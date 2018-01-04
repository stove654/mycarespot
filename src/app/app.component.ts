import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Config } from './app.config';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
//import { ChatPage } from '../pages/chat/chat';
declare let cordova;
declare let localStorage:any;
declare let window:any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user)
      this.rootPage = HomePage;
    else
      this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      let notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        if (jsonData.notification.payload.additionalData.channel) {
          //$state.go('app.chatDetail', {id: jsonData.notification.payload.additionalData.channel})
        }
      };

      document.addEventListener("deviceready", function () {
        window.plugins.OneSignal
          .startInit(Config.oneSignalId)
          .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
        console.log(window.plugins.OneSignal)

        if (platform.is('ios')) {
          console.log('2222')
          cordova.plugins.iosrtc.registerGlobals();
          console.log( cordova.plugins.iosrtc)
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

