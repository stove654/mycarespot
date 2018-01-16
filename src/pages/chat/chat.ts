import {Component, ViewChild, NgZone} from '@angular/core';
import {
  NavController,
  NavParams,
  Platform,
  LoadingController,
  Content,
  Events,
  AlertController,
  ModalController
} from 'ionic-angular';
import {Http} from '@angular/http';
import {Config} from '../../app/app.config';
import 'rxjs/add/operator/map';
import io from 'socket.io-client';
import {VideoPage} from '../video/modal';

import {InAppBrowser} from '@ionic-native/in-app-browser';

declare let cordova: any;
declare let localStorage: any;

declare let navigator: any;
declare let RTCPeerConnection: any;

declare let window: any;
const socket = io(Config.url, {
  path: '/socket.io-client'
});
let self;
let peerConnection;
let peerConnectionConfig = {
  'iceServers': [{"url": "stun:global.stun.twilio.com:3478?transport=udp"}, {
    "url": "turn:global.turn.twilio.com:3478?transport=udp",
    "username": "4689bcd70bf84954ec2e85b18a193833b7cb0d4d374b963d216b1197785ab7a2",
    "credential": "p0xKPUOMcY/7IPW/Nf8fdzh5/6WqzVd7rH/y3ZA8tRk="
  }, {
    "url": "turn:global.turn.twilio.com:3478?transport=tcp",
    "username": "4689bcd70bf84954ec2e85b18a193833b7cb0d4d374b963d216b1197785ab7a2",
    "credential": "p0xKPUOMcY/7IPW/Nf8fdzh5/6WqzVd7rH/y3ZA8tRk="
  }, {
    "url": "turn:global.turn.twilio.com:443?transport=tcp",
    "username": "4689bcd70bf84954ec2e85b18a193833b7cb0d4d374b963d216b1197785ab7a2",
    "credential": "p0xKPUOMcY/7IPW/Nf8fdzh5/6WqzVd7rH/y3ZA8tRk="
  }]
};
let modal;
let prompt;

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  user = {
    id: null,
    _id: null
  };
  myAccount = {
    id: null,
    userId: null,
    _id: null
  };

  channel = {
    _id: null,
    users: []
  };
  messages = [];
  isLoading = true;
  text = '';
  createAt = '';
  image = '';
  pdf = '';
  video = '';
  audio = '';
  voiceMessage = '';
  sticker = '';
  location = '';
  fileType = '';
  keyboardHeight: 0;
  receiveUser: {
    _id: null
  };
  localStream: null;
  remoteStream: null;
  isCalling: false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public http: Http, public loadingCtrl: LoadingController, private iab: InAppBrowser, public events: Events, public alertCtrl: AlertController, private _ngZone: NgZone, public modalCtrl: ModalController) {
    self = this;
    this.user = this.navParams.get('user');
    console.log(this.user)
    this.myAccount = JSON.parse(localStorage.getItem('user'));
    this.http.post(Config.url + Config.api.channel, {
      from: this.user.id,
      to: this.myAccount.id,
      userPush: [this.user._id, this.myAccount._id]
    }).map(res => res.json())
      .subscribe(response => {
        this.channel = response;
        this.http.get(Config.url + Config.api.message, {
          params: {
            channel: this.channel._id
          }
        }).map(res => res.json())
          .subscribe(response => {
            this.isLoading = false;
            this.messages = response;

            socket.on('message:save', (message) => {
              if (message.from.userId != this.myAccount.id) {
                this.messages.push(message)
              }
            });
          });

        this.readMessage();
      })

    events.subscribe('channel', (channel) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.channel = channel;
    });

    events.subscribe('stopCall', () => {
      self.closeCallUser()
      self.http.post(Config.url + Config.api.webrtc, {
        to: self.receiveUser,
        status: 4
      }).subscribe(res => {
        console.log('res', res);
      })
    });


    this.http.get(Config.url + Config.api.turn).map(res => res.json())
      .subscribe(response => {
        peerConnectionConfig.iceServers = response;
      })

    socket.on('webrtc:save', (message) => {
      console.log(message);
      if (!message.to) {
        message.to = {}
      }
      if (message.status == 2 && self.myAccount._id == message.to._id) {
        self.gotMessageFromServer(message);
      }

      if (message.status == 3 && self.myAccount._id == message.to._id) {
        self.closeCallUser(true);
        self.events.publish('dismiss');
      }
      if (message.status == 1 && self.myAccount._id == message.to._id) {
        if (!self.isCalling ) {
          self.isCalling = true;
          prompt = self.alertCtrl.create({
            title: 'Video Call',
            message: message.from.name + " Calling you...",
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                  self.isCalling = false;
                  self.closeCallUser();
                }
              },
              {
                text: 'Ok',
                handler: data => {
                  self.startCallUser(message.from, true)
                  self.isCalling = false;
                }
              }
            ]
          });
          prompt.present();
        }

      }

      if (message.status == 4 && self.myAccount._id == message.to._id ) {
        if (prompt) {
          prompt.dismiss();
        }
        self.isCalling = false
      }


    });

    if (this.platform.is('ios')) {
      //cordova.plugins.Keyboard.disableScroll(true)
      window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
      window.addEventListener('native.keyboardhide', this.keyboardHideHandler);
    }

    document.addEventListener("deviceready", function () {
      if (self.platform.is('android')) {
        let checkPermissionCallback = function (status) {
          console.log('status', status)
          if (!status.hasPermission) {
            let errorCallback = function () {
              console.log('Camera permission is not turned on, please open setting on your device!');
            }

            permissions.requestPermissions(
              listPer,
              function (status) {
                if (!status.hasPermission) errorCallback();
              },
              errorCallback);
          }
        }
        let permissions = cordova.plugins.permissions;
        let listPer = [
          permissions.CAMERA,
          permissions.RECORD_AUDIO
        ]
        permissions.checkPermission(listPer, checkPermissionCallback, null);
        console.log('permissions', permissions)
      }

    })
  }

  keyboardShowHandler(e) {
    this.keyboardHeight = e.keyboardHeight;
    let header = window.document.getElementById('chat-header');
    let messages = window.document.getElementById('messages');
    header.style.top = this.keyboardHeight + 'px';
    header.style.position = 'fixed';
    messages.style.paddingTop = this.keyboardHeight + 'px';
    console.log('Keyboard height is: ' + e.keyboardHeight, header);
  }

  keyboardHideHandler(e) {
    this.keyboardHeight = 0;
    let header = window.document.getElementById('chat-header');
    header.style.top = 0 + 'px';
    header.style.position = 'absolute';
    let messages = window.document.getElementById('messages');
    messages.style.paddingTop = 0 + 'px';
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 1000);
  }


  uploadFile(event) {
    let file = event.srcElement.files[0];
    if (!file) return;
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    this.fileType = file.type;
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.http.post(Config.url + Config.api.upload, formData)
      .map(res => res.json())
      .subscribe(
        response => {
          loader.dismiss();
          if (file.type.indexOf('image') !== -1) {
            this.image = Config.url + '/' + response.path;
          } else if (file.type.indexOf('video') !== -1) {
            this.video = Config.url + '/' + response.path;
          } else if (file.type.indexOf('audio') !== -1) {
            this.audio = Config.url + '/' + response.path;
          } else if (file.type.indexOf('pdf') !== -1) {
            this.pdf = Config.url + '/' + response.path;
          }
          this._sendMessage();
        },
        error => console.log(error)
      );
  }

  _clearMessage = function () {
    this.text = '';
    this.createAt = '';
    this.image = '';
    this.pdf = '';
    this.video = '';
    this.audio = '';
    this.voiceMessage = '';
    this.sticker = '';
    this.location = '';
    this.fileType = '';
  };

  _sendMessage() {
    let params = {
      from: this.myAccount,
      channel: this.channel._id,
      createdAt: new Date(),
      text: '',
      image: '',
      voiceMessage: '',
      location: '',
      sticker: '',
      video: '',
      audio: '',
      fileType: '',
      pdf: '',
      fromId: this.myAccount._id
    };

    params.from.userId = this.myAccount.id;

    if (this.text) {
      params.text = this.text;
    } else {
      delete params.text
    }

    if (this.image) {
      params.image = this.image;
    } else {
      delete params.image
    }

    if (this.voiceMessage) {
      params.voiceMessage = this.voiceMessage;
    } else {
      delete params.voiceMessage
    }

    if (this.location) {
      params.location = this.location;
    } else {
      delete params.location
    }

    if (this.sticker) {
      params.sticker = this.sticker;
    } else {
      delete params.sticker
    }

    if (this.video) {
      params.video = this.video;
    } else {
      delete params.video
    }

    if (this.audio) {
      params.audio = this.audio;
    } else {
      delete params.audio
    }

    if (this.fileType) {
      params.fileType = this.fileType;
    } else {
      delete params.fileType
    }

    if (this.pdf) {
      params.pdf = this.pdf;
    } else {
      delete params.pdf
    }

    this.messages.push(params);
    let index = this.messages.length - 1;
    this._clearMessage();
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 300);

    this.http.post(Config.url + Config.api.message, params).map(res => res.json())
      .subscribe(response => {
        this.messages[index] = response;
      })
  };

  sendMessage() {
    if (this.text) {
      this._sendMessage()
    }
  }

  openFile(url) {
    this.iab.create(url,'_system', "location=yes");
  }

  readMessage() {
    let check = false;
    for (let i = 0; i < this.channel.users.length; i++) {
      if (this.channel.users[i].userId == this.myAccount.id && this.channel.users[i].read) {
        check = true;
        break;
      }
    }
    if (check) {
      this.http.put(Config.url + Config.api.channel + this.channel._id, {
        read: 0,
        user: this.myAccount.id
      }).subscribe(() => {
      })
    }
  };

  //Start video call
  startCallUser(user, isConnecting) {
    console.log(VideoPage)
    modal = this.modalCtrl.create(VideoPage);
    modal.present();

    self.receiveUser = user;

    if (self.platform.is('ios')) {
      self._callVideo({video: true, audio: true}, isConnecting, user)

      // cordova.plugins.iosrtc.getUserMedia(
      //   // constraints
      //   { audio: true, video: true },
      //   // success callback
      //   function (stream) {
      //     self.localStream = stream;
      //     self.localStream.src = window.URL.createObjectURL(stream);
      //     self.isOpenCall = true;
      //     self._ngZone.run(() => {
      //       console.log('Outside Done!');
      //     });
      //     self.events.publish('stream', {
      //       localStream: self.localStream,
      //       user: user
      //     });
      //     if (!isConnecting) {
      //
      //       self.http.post(Config.url + Config.api.webrtc, {
      //         to: user,
      //         status: 1,
      //         from: self.myAccount,
      //         option: {
      //           audio: true,
      //           video: true
      //         },
      //       }).subscribe(res => {
      //         console.log('res', res);
      //       })
      //     } else {
      //       self.connect(true)
      //     }
      //   },
      //   // failure callback
      //   function (error) {
      //     console.error('getUserMedia failed: ', error);
      //   }
      // )
    } else {
      navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
          let deviceId;
          for (let i = 0; i < devices.length; i++) {
            if (devices[i].kind == 'videoinput') {
              deviceId = devices[i].deviceId;
              break;
            }
          }
          let constraints = {
            audio: true,
            video: {
              mandatory: {},
              optional: [{
                sourceId: deviceId
              }]
            }
          };
          self._callVideo(constraints, isConnecting, user)
        })
    }
  }

  _callVideo(option, isConnecting, user) {
    option = option || {
      video: true,
      audio: true
    };

    navigator.webkitGetUserMedia(option, function (stream) {
      self.localStream = stream;
      self.localStream.src = window.URL.createObjectURL(stream);
      self.isOpenCall = true;
      self._ngZone.run(() => {
        console.log('Outside Done!');
      });
      self.events.publish('stream', {
        localStream: self.localStream,
        user: user
      });
      if (!isConnecting) {

        self.http.post(Config.url + Config.api.webrtc, {
          to: user,
          status: 1,
          from: self.myAccount,
          option: {
            audio: true,
            video: true
          },
        }).subscribe(res => {
          console.log('res', res);
        })
      } else {
        self.connect(true)
      }
    }, function (e) {
      console.log('No live audio input: ' + e);
    });
  };

  connect(isCaller) {
    if (self.platform.is('ios')) {
      peerConnection = new window.RTCPeerConnection(peerConnectionConfig)

    } else {
      peerConnection = new RTCPeerConnection(peerConnectionConfig);

    }
    //peerConnection = new RTCPeerConnection(peerConnectionConfig);

    peerConnection.onicecandidate = (event) => self.gotIceCandidate(event);
    peerConnection.onaddstream = (stream) => self.gotRemoteStream(stream);
    peerConnection.addStream(self.localStream);
    self._ngZone.run(() => {
      console.log('Outside Done!');
    });
    if (isCaller) {
      peerConnection.createOffer().then((des) => self.createdDescription(des)).catch(this.errorHandler);
      self._ngZone.run(() => {
        console.log('Outside Done!');
      });
    }

  };

  gotMessageFromServer(message) {
    let self = this;
    if (!peerConnection) self.connect(false);

    let signal = message;
    // Ignore messages from ourself
    if (signal.to._id == self.receiveUser._id) return;

    if (signal.sdp) {
      peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function () {
        // Only create answers in response to offers
        if (signal.sdp.type == 'offer') {
          peerConnection.createAnswer().then(self.createdDescription).catch(self.errorHandler);
          self._ngZone.run(() => {
            console.log('Outside Done!');
          });
        }
      }).catch(this.errorHandler);
    } else if (signal.ice) {
      peerConnection.addIceCandidate(new RTCIceCandidate(signal.ice)).catch(self.errorHandler);
    }
  }

  gotIceCandidate(event) {
    if (event.candidate != null) {
      console.log(event)
      self.http.post(Config.url + Config.api.webrtc, {
        ice: event.candidate,
        to: self.receiveUser,
        status: 2
      }).subscribe(res => {
        console.log('res', res);
      })
    }
  }

  gotRemoteStream(event) {
    console.log('event', event)
    self.remoteStream = event.stream;
    self.remoteStream.src = window.URL.createObjectURL(event.stream);
    self.events.publish('stream', {
      remoteStream: self.remoteStream
    });
    self._ngZone.run(() => {
      console.log('Outside Done!');
    });
  }


  createdDescription(description) {
    peerConnection.setLocalDescription(description).then(function () {

      self.http.post(Config.url + Config.api.webrtc, {
        sdp: peerConnection.localDescription,
        to: self.receiveUser,
        status: 2
      }).subscribe(res => {
        console.log('res', res);
      })
    }).catch(self.errorHandler);
  }

  errorHandler(error) {
    console.log(error);
  }

  stopMediaTrack(stream) {
    stream.getTracks().forEach(function (track) {
      track.stop();
    })
    stream = null;
    self._ngZone.run(() => {
      console.log('Outside Done!');
    });

  };

  closeCallUser(isStop) {
    self.isOpenCall = false;
    if (self.platform.is('ios')) {

      if (self.remoteStream) {
        self.remoteStream.stop();
        self.remoteStream = null;
      }
      if (self.localStream) {
        self.localStream.stop();
        self.localStream = null;
      }
    } else {
      if (self.localStream) {
        self.stopMediaTrack(self.localStream);
      }
      if (self.remoteStream) {
        self.stopMediaTrack(self.remoteStream);
      }

    }
    if (peerConnection) {
      peerConnection.close();
      peerConnection = null;
    }
    self._ngZone.run(() => {
      console.log('Outside Done!');
    });

    if (!isStop) {
      self.http.post(Config.url + Config.api.webrtc, {
        to: self.receiveUser,
        status: 3,
        from: self.myAccount
      }).subscribe(res => {
        console.log('res', res);
      })
    }

  };

  //End video call

  ngOnDestroy() {
    socket.removeAllListeners('message:save');
    socket.removeAllListeners('webrtc:save');
  }
}
