import {Component} from '@angular/core';
import {Platform, Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Config} from './app.config';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {ChatPage} from '../pages/chat/chat';
import Util from "../app/util";

declare let cordova;
declare let localStorage: any;
declare let window: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, public http: Http) {
    let self = this;
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user)
      this.rootPage = HomePage;
    else
      this.rootPage = LoginPage;
    //this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      let notificationOpenedCallback = function (jsonData) {
        console.log('jsonData.notification.payload.additionalData', jsonData.notification.payload.additionalData)
        if (jsonData.notification.payload.additionalData.videoCall) {
          console.log('22222222222', jsonData.notification.payload.additionalData.isStartCall);
          self.http.get(Config.url + Config.api.channel + jsonData.notification.payload.additionalData.channelId).map(res => res.json())
            .subscribe(response => {
              let channel = Util.formatChannel(response, user);

              events.publish('open-video-call', {
                channel: channel,
                from: channel.userShow
              });
            });
        }
      };

      document.addEventListener("deviceready", function () {
        window.plugins.OneSignal
          .startInit('e3811a84-3edd-463d-8de8-9fd1f5dc536a')
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
        console.log(window.plugins.OneSignal)

        if (platform.is('ios')) {
          console.log('2222')
          cordova.plugins.iosrtc.registerGlobals();
          console.log(cordova.plugins.iosrtc)
          // load adapter.js
          let script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "js/adapter-latest.js";
          script.async = false;
          document.getElementsByTagName("head")[0].appendChild(script);
        }
      })


    });
  }
}

