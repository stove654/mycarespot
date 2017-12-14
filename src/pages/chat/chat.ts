import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, Content, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { Config } from '../../app/app.config';
import 'rxjs/add/operator/map';
import io  from 'socket.io-client';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare let cordova:any;
declare let localStorage:any;
declare let window:any;
const socket = io(Config.url, {
  path: '/socket.io-client'
});

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  user = {
    id: null
  };
  myAccount = {
    id: null,
    userId: null
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public http: Http, public loadingCtrl: LoadingController, private iab: InAppBrowser, public events: Events) {

    this.user = this.navParams.get('user');
    this.myAccount = JSON.parse(localStorage.getItem('user'));
    this.http.post(Config.url + Config.api.channel, {
      from: this.user.id,
      to: this.myAccount.id,
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

    if (this.platform.is('ios') || this.platform.is('android')) {
      //cordova.plugins.Keyboard.disableScroll(true)
      window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
      window.addEventListener('native.keyboardhide', this.keyboardHideHandler);
    }
  }

  keyboardShowHandler(e){
    this.keyboardHeight = e.keyboardHeight;
    let header  = window.document.getElementById('chat-header');
    let messages  = window.document.getElementById('messages');
    header.style.top= this.keyboardHeight + 'px';
    header.style.position= 'fixed';
    messages.style.paddingTop = this.keyboardHeight + 'px';
    console.log('Keyboard height is: ' + e.keyboardHeight, header);
  }

  keyboardHideHandler(e){
    this.keyboardHeight = 0;
    let header  = window.document.getElementById('chat-header');
    header.style.top= 0 + 'px';
    header.style.position= 'absolute';
    let messages  = window.document.getElementById('messages');
    messages.style.paddingTop = 0 + 'px';

    console.log('Keyboard off is: ');
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 1000);
  }



  uploadFile (event) {
    let file = event.srcElement.files[0];
    if (!file) return;
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    this.fileType = file.type;
    let formData:FormData = new FormData();
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
            this.image = Config.url + '/' +response.path;
          } else if (file.type.indexOf('video') !== -1) {
            this.video = Config.url + '/' +response.path;
          } else if (file.type.indexOf('audio') !== -1) {
            this.audio = Config.url + '/' +response.path;
          } else if (file.type.indexOf('pdf') !== -1) {
            this.pdf = Config.url + '/' +response.path;
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

  _sendMessage () {
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
      pdf: ''
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

  sendMessage () {
    if (this.text) {
      this._sendMessage()
    }
  }

  openFile (url) {
    this.iab.create(url);

  }

  readMessage () {
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

  ngOnDestroy() {
    socket.removeAllListeners('message:save');
  }
}
