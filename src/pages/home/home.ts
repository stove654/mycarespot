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

declare let localStorage:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users = [];
  user = {
    type: null,
    id: null
  };

  tabActive = 1;
  channels = [];
  read: 0;
  isLoading = false;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public events: Events) {
    const socket = io(Config.url, {
      path: '/socket.io-client'
    });

    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user.type == 2) {
      this.users = Doctors;
    } else {
      this.users = Patients;

    }

    this.isLoading = true;
    this.http.get(Config.url + Config.api.channel, {
      params: {
        userId: this.user.id
      }
    }).map(res => res.json())
      .subscribe(
        response => {
          this.isLoading = false;
          response.map((channel) => {
            channel = Util.formatChannel(channel, this.user);
            return channel
          });
          this.channels = response;
          this.getBadge();

          socket.on('channel:save', (channel) => {
            let isChannel = false
            for (let i = 0; i < channel.users.length; i++) {
              if (channel.users[i].userId == this.user.id) {
                isChannel = true;
                break;
              }
            }

            if (isChannel) {
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
              if (!isCheck) {
                this.channels.unshift(channel);
              }
              this.getBadge();
            }
          });
        },
        error => console.log(error)
      );


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
      user: item
    });
  }

  logOut() {
    localStorage.clear()
    this.navCtrl.push(LoginPage);
  }
}
