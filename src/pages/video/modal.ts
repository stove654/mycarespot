import {Component, NgZone} from '@angular/core';
import {NavParams, Platform, ViewController, Events} from 'ionic-angular';
let self;
@Component({
  selector: 'page-video',
  templateUrl: 'modal.html'
})
export class VideoPage {
  localStream;
  remoteStream;
  user;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public events: Events,
    private _ngZone: NgZone
  ) {

    self = this;
    events.subscribe('stream', (stream) => {
      console.log(stream)
      if (stream.localStream) self.localStream = stream.localStream;
      if (stream.remoteStream) self.remoteStream = stream.remoteStream;
      if (stream.user) self.user = stream.user
      // user and time are the same arguments passed in `events.publish(user, time)`
    });

    events.subscribe('dismiss', (stream) => {
      console.log(stream)
      self.closeCall(true)
      // user and time are the same arguments passed in `events.publish(user, time)`
    });

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


  closeCall(boolean) {
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
    if (!boolean) {
      this.events.publish('stopCall');
    }
    this.viewCtrl.dismiss();

  }
}
