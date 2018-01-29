import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MomentModule } from 'angular2-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { SafePipe } from './pipe';

import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { VideoPage } from '../pages/video/modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ChatPage,
    SafePipe,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    MomentModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ChatPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ],
  exports: [
    SafePipe
  ]
})
export class AppModule {}
