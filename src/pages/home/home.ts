import { Component, } from '@angular/core';
import { NavController, LoadingController, Events } from 'ionic-angular';
import { Doctors } from '../../data/doctor';
import { Patients } from '../../data/patient';
import { ChatPage } from '../chat/chat';
import { LoginPage } from "../login/login";
import Util from "../../app/util";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../app/app.config';
import _ from 'lodash';
import io  from 'socket.io-client';
let self;

declare let localStorage:any;
declare let window:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  users = [];
  user = {
    type: null,
    _id: null,
    name: null
  };

  tabActive = 1;
  channels = [];
  read: 0;
  isLoading = false;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public events: Events) {
    const socket = io(Config.url, {
      path: '/socket.io-client'
    });

    self = this;

    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
    this.isLoading = true;
    this.http.get(Config.url + Config.api.channel, {
      params: {
        userId: this.user._id
      }
    }).map(res => res.json())
      .subscribe(
        response => {
          this.isLoading = false;
          console.log(response)
          response.map((channel) => {
            channel = Util.formatChannel(channel, this.user);
            return channel
          });
          this.channels = response;
          console.log(this.channels)
          socket.on('channel:save', (channel) => {

            let isChannel = false
            for (let i = 0; i < channel.users.length; i++) {
              if (channel.users[i].userId == this.user._id) {
                isChannel = true;
                break;
              }
            }

            if (isChannel) {
              this.http.get(Config.url + Config.api.channel + channel._id).map(res => res.json())
                .subscribe(
                  response => {
                    let channel = response;

                    channel = Util.formatChannel(channel, this.user);
                    let isCheck = false;
                    for (let i = 0; i < this.channels.length; i++) {
                      if (this.channels[i]._id == channel._id) {
                        this.channels[i] = channel;
                        this.events.publish('channel', channel);
                        isCheck = true;
                        break;
                      }
                    }
                  })
            }
          });
        },
        error => console.log(error)
      );

    events.subscribe('open-noti', (channel) => {

      setTimeout(() => {
        if (self.navCtrl.getActive().component.name != 'ChatPage') {
          self.openChat(channel)
        }
      }, 500);

    });

    document.addEventListener("deviceready", function () {
      window.plugins.OneSignal.getIds(function (ids) {
        let token = ids.pushToken;
        let userPush = ids.userId;
        if (userPush != self.user.userPush) {
          self.user.userPush = userPush;
        }
        self.user.userPush = userPush;
        localStorage.setItem('user', JSON.stringify(self.user))
        console.log('notification', userPush, token);
      })
    })

  }


  switchTab(index) {
    this.tabActive = index;
  }

  getBadge() {
    this.read = 0;
    _.each(this.channels, channel => {
      this.read += channel.userShow.read;
    })
  }

  openChat(item) {
    this.navCtrl.push(ChatPage, {
      channel: item
    });
  }

  logOut() {
    self.http.put(Config.url + Config.api.user + self.user._id, {
      userPush: null
    }).map(res => res.json())
      .subscribe(
        response => {
        })
    localStorage.clear()
    this.navCtrl.push(LoginPage);
  }
}
