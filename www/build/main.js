webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_patient__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log(__WEBPACK_IMPORTED_MODULE_2__data_doctor__["a" /* Doctors */]);
    }
    LoginPage.prototype.selectUser = function (index) {
        var user;
        if (index == 1) {
            user = __WEBPACK_IMPORTED_MODULE_2__data_doctor__["a" /* Doctors */][0];
        }
        else if (index == 2) {
            user = __WEBPACK_IMPORTED_MODULE_3__data_patient__["a" /* Patients */][0];
        }
        user.type = index;
        localStorage.setItem('user', JSON.stringify(user));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/login/login.html"*/'<ion-content>\n\n  <div class="fit horizontal layout center center-justified">\n    <div padding style="width: 100%">\n      <div padding>\n        <button ion-button full color="secondary" (click)="selectUser(1)">Account Doctor</button>\n      </div>\n      <div padding>\n        <button ion-button full (click)="selectUser(2)">Account Patient</button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctors; });
var Doctors = [
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor1.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor2.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor3.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor4.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor5.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor6.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor6.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor8.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    },
    {
        "id": "doctor-01",
        "name": "Devi Shetty",
        "image": "./assets/imgs/doctor9.jpg",
        "specialist": "Allergist or Immunologist, Anesthesiologist, Cardiologist, Dermatologist, Gastroenterologist"
    }
];
//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patients; });
var Patients = [
    {
        "id": "patient-01",
        "name": "Woody",
        "image": "./assets/imgs/user.jpg"
    },
    {
        "id": "patient-02",
        "name": "Buzz Lightyear",
        "image": "./assets/imgs/user1.jpg"
    },
    {
        "id": "patient-03",
        "name": "Jessie",
        "image": "./assets/imgs/user2.jpg"
    },
    {
        "id": "patient-01",
        "name": "Reuben",
        "image": "./assets/imgs/user3.jpg"
    },
    {
        "id": "patient-01",
        "name": "Leone Battista",
        "image": "./assets/imgs/user4.jpg"
    },
    {
        "id": "patient-01",
        "name": "Sherman",
        "image": "./assets/imgs/user5.jpg"
    },
    {
        "id": "patient-01",
        "name": "Alphonse",
        "image": "./assets/imgs/user6.jpg"
    },
    {
        "id": "patient-01",
        "name": "Hans Christian",
        "image": "./assets/imgs/user7.jpg"
    },
    {
        "id": "patient-01",
        "name": "Sparky",
        "image": "./assets/imgs/user8.jpg"
    },
    {
        "id": "patient-01",
        "name": "Beth",
        "image": "./assets/imgs/user9.jpg"
    }
];
//# sourceMappingURL=patient.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_patient__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_socket_io_client__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var self;
var HomePage = (function () {
    function HomePage(navCtrl, http, loadingCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.users = [];
        this.user = {
            type: null,
            id: null,
            name: null
        };
        this.tabActive = 1;
        this.channels = [];
        this.isLoading = false;
        var socket = __WEBPACK_IMPORTED_MODULE_11_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].url, {
            path: '/socket.io-client'
        });
        self = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.type == 2) {
            this.users = __WEBPACK_IMPORTED_MODULE_2__data_doctor__["a" /* Doctors */];
        }
        else {
            this.users = __WEBPACK_IMPORTED_MODULE_3__data_patient__["a" /* Patients */];
        }
        this.isLoading = true;
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].api.user).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_10_lodash___default.a.forEach(_this.users, function (value) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].name == value.name) {
                        value._id = response[i]._id;
                    }
                }
            });
        });
        this.isLoading = true;
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].api.channel, {
            params: {
                userId: this.user.id
            }
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.isLoading = false;
            response.map(function (channel) {
                channel = __WEBPACK_IMPORTED_MODULE_6__app_util__["a" /* default */].formatChannel(channel, _this.user);
                return channel;
            });
            _this.channels = response;
            _this.getBadge();
            socket.on('channel:save', function (channel) {
                var isChannel = false;
                for (var i = 0; i < channel.users.length; i++) {
                    if (channel.users[i].userId == _this.user.id) {
                        isChannel = true;
                        break;
                    }
                }
                if (isChannel) {
                    channel = __WEBPACK_IMPORTED_MODULE_6__app_util__["a" /* default */].formatChannel(channel, _this.user);
                    var isCheck = false;
                    for (var i = 0; i < _this.channels.length; i++) {
                        if (_this.channels[i]._id == channel._id) {
                            _this.channels[i] = channel;
                            _this.events.publish('channel', channel);
                            isCheck = true;
                            break;
                        }
                    }
                    if (!isCheck) {
                        _this.channels.unshift(channel);
                    }
                    _this.getBadge();
                }
            });
        }, function (error) { return console.log(error); });
        self.getUser();
        events.subscribe('open-noti', function (channel) {
            channel = __WEBPACK_IMPORTED_MODULE_6__app_util__["a" /* default */].formatChannel(channel, self.user);
            self.openChat(channel.userShow);
        });
        document.addEventListener("deviceready", function () {
            window.plugins.OneSignal.getIds(function (ids) {
                var token = ids.pushToken;
                var userPush = ids.userId;
                if (userPush != self.user.userPush) {
                    self.user.userPush = userPush;
                    self.getUser(userPush);
                }
                self.user.userPush = userPush;
                localStorage.setItem('user', JSON.stringify(self.user));
                console.log('notification', userPush, token);
            });
        });
    }
    HomePage.prototype.getUser = function (userPush) {
        self.http.post(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].api.user, {
            name: self.user.name,
            userPush: userPush || null
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            self.user._id = response._id;
            localStorage.setItem('user', JSON.stringify(self.user));
            //localStorage.setItem('user', self.user)
            console.log(self.user);
        });
    };
    HomePage.prototype.switchTab = function (index) {
        this.tabActive = index;
    };
    HomePage.prototype.getBadge = function () {
        var _this = this;
        this.read = 0;
        __WEBPACK_IMPORTED_MODULE_10_lodash___default.a.each(this.channels, function (channel) {
            _this.read += channel.userShow.read;
        });
    };
    HomePage.prototype.openChat = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], {
            user: item
        });
    };
    HomePage.prototype.logOut = function () {
        self.http.put(__WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].api.user + self.user._id, {
            userPush: null
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
        });
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n    </ion-buttons>\n    <ion-title>\n      <div class="horizontal layout center user-info">\n        <div class="home-user flex horizontal layout center">\n          <img src="{{user.image}}" alt="" width="30" height="30" class="user-image">\n          <div class="user-name">{{user.name}}</div>\n        </div>\n      </div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear style="padding: 0 5px" (click)="logOut()">\n        <ion-icon name="ios-power" style="font-size: 1.8em;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar style="padding-top: 0">\n    <div class="tab-home horizontal layout center">\n      <div class="tab-button-home active" (click)="switchTab(1)" [ngClass]="{\'active\': tabActive == 1}">\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon>\n        Messages\n        <ion-badge color="danger" *ngIf="read">{{read}}</ion-badge>\n      </div>\n      <div class="tab-button-home horizontal layout center center-justified" (click)="switchTab(2)" [ngClass]="{\'active\': tabActive == 2}">\n        <ion-icon name="ios-people-outline"></ion-icon>\n        &nbsp;\n        <span *ngIf="user.type == 1"> Patients</span>\n        <span *ngIf="user.type == 2"> Doctors</span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style="padding: 10px 0">\n    <div *ngIf="tabActive == 2">\n      <ion-list>\n        <ion-item *ngFor="let item of users; let i = index; trackBy: index" (click)="openChat(item)">\n          <ion-avatar item-start class="image-thumbnail">\n            <img src="{{item.image}}">\n            <div class="online-status" *ngIf="i == 0"></div>\n          </ion-avatar>\n          <h3>{{item.name}}</h3>\n          <p *ngIf="item.specialist">{{item.specialist}}</p>\n          <p *ngIf="!item.specialist">I need help!!!</p>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngIf="tabActive == 1">\n      <div padding class="text-center" *ngIf="isLoading">\n        <ion-spinner></ion-spinner>\n      </div>\n\n      <div class="text-center" padding *ngIf="!this.channels.length && !isLoading">\n        Your don\'t have message!!!\n      </div>\n      <ion-list>\n        <ion-item *ngFor="let item of channels; let i = index; trackBy: index" (click)="openChat(item.userShow)" class="item-channel" [ngClass]="{\'active\': item.userShow.read}">\n          <ion-avatar item-start class="image-thumbnail">\n            <img src="{{item.userShow.image}}">\n            <div class="online-status" *ngIf="i == 0"></div>\n          </ion-avatar>\n          <ion-note item-end class="time-ago">{{item.lastMessageTime | amTimeAgo}}</ion-note>\n          <ion-badge color="danger" class="channel-badge" *ngIf="item.userShow.read">{{item.userShow.read}}</ion-badge>\n\n          <h3>{{item.userShow.name}}</h3>\n          <p>{{item.lastMessage}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_modal__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url, {
    path: '/socket.io-client'
});
var self;
var peerConnection;
var peerConnectionConfig = {
    'iceServers': [{ "url": "stun:global.stun.twilio.com:3478?transport=udp" }, {
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
var modal;
var prompt;
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, platform, http, loadingCtrl, iab, events, alertCtrl, _ngZone, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this._ngZone = _ngZone;
        this.modalCtrl = modalCtrl;
        this.user = {
            id: null,
            _id: null
        };
        this.myAccount = {
            id: null,
            userId: null,
            _id: null
        };
        this.channel = {
            _id: null,
            users: []
        };
        this.messages = [];
        this.isLoading = true;
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
        this._clearMessage = function () {
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
        self = this;
        this.user = this.navParams.get('user');
        console.log(this.user);
        this.myAccount = JSON.parse(localStorage.getItem('user'));
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.channel, {
            from: this.user.id,
            to: this.myAccount.id,
            userPush: [this.user._id, this.myAccount._id]
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.channel = response;
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.message, {
                params: {
                    channel: _this.channel._id
                }
            }).map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.isLoading = false;
                _this.messages = response;
                socket.on('message:save', function (message) {
                    if (message.from.userId != _this.myAccount.id) {
                        _this.messages.push(message);
                    }
                });
            });
            _this.readMessage();
        });
        events.subscribe('channel', function (channel) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.channel = channel;
        });
        events.subscribe('stopCall', function () {
            self.closeCallUser();
            self.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.webrtc, {
                to: self.receiveUser,
                status: 4
            }).subscribe(function (res) {
                console.log('res', res);
            });
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.turn).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            peerConnectionConfig.iceServers = response;
        });
        socket.on('webrtc:save', function (message) {
            console.log(message);
            if (!message.to) {
                message.to = {};
            }
            if (message.status == 2 && self.myAccount._id == message.to._id) {
                self.gotMessageFromServer(message);
            }
            if (message.status == 3 && self.myAccount._id == message.to._id) {
                self.closeCallUser(true);
                self.events.publish('dismiss');
            }
            if (message.status == 1 && self.myAccount._id == message.to._id) {
                if (!self.isCalling) {
                    self.isCalling = true;
                    prompt = self.alertCtrl.create({
                        title: 'Video Call',
                        message: message.from.name + " Calling you...",
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                    self.isCalling = false;
                                    self.closeCallUser();
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function (data) {
                                    self.startCallUser(message.from, true);
                                    self.isCalling = false;
                                }
                            }
                        ]
                    });
                    prompt.present();
                }
            }
            if (message.status == 4 && self.myAccount._id == message.to._id) {
                if (prompt) {
                    prompt.dismiss();
                }
                self.isCalling = false;
            }
        });
        if (this.platform.is('ios')) {
            //cordova.plugins.Keyboard.disableScroll(true)
            window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
            window.addEventListener('native.keyboardhide', this.keyboardHideHandler);
        }
        document.addEventListener("deviceready", function () {
            if (self.platform.is('android')) {
                var checkPermissionCallback = function (status) {
                    console.log('status', status);
                    if (!status.hasPermission) {
                        var errorCallback_1 = function () {
                            console.log('Camera permission is not turned on, please open setting on your device!');
                        };
                        permissions_1.requestPermissions(listPer_1, function (status) {
                            if (!status.hasPermission)
                                errorCallback_1();
                        }, errorCallback_1);
                    }
                };
                var permissions_1 = cordova.plugins.permissions;
                var listPer_1 = [
                    permissions_1.CAMERA,
                    permissions_1.RECORD_AUDIO
                ];
                permissions_1.checkPermission(listPer_1, checkPermissionCallback, null);
                console.log('permissions', permissions_1);
            }
        });
    }
    ChatPage.prototype.keyboardShowHandler = function (e) {
        this.keyboardHeight = e.keyboardHeight;
        var header = window.document.getElementById('chat-header');
        var messages = window.document.getElementById('messages');
        header.style.top = this.keyboardHeight + 'px';
        header.style.position = 'fixed';
        messages.style.paddingTop = this.keyboardHeight + 'px';
        console.log('Keyboard height is: ' + e.keyboardHeight, header);
    };
    ChatPage.prototype.keyboardHideHandler = function (e) {
        this.keyboardHeight = 0;
        var header = window.document.getElementById('chat-header');
        header.style.top = 0 + 'px';
        header.style.position = 'absolute';
        var messages = window.document.getElementById('messages');
        messages.style.paddingTop = 0 + 'px';
    };
    ChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        }, 1000);
    };
    ChatPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.srcElement.files[0];
        if (!file)
            return;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        this.fileType = file.type;
        var formData = new FormData();
        formData.append('file', file, file.name);
        var headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.upload, formData)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            loader.dismiss();
            if (file.type.indexOf('image') !== -1) {
                _this.image = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + '/' + response.path;
            }
            else if (file.type.indexOf('video') !== -1) {
                _this.video = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + '/' + response.path;
            }
            else if (file.type.indexOf('audio') !== -1) {
                _this.audio = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + '/' + response.path;
            }
            else if (file.type.indexOf('pdf') !== -1) {
                _this.pdf = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + '/' + response.path;
            }
            _this._sendMessage();
        }, function (error) { return console.log(error); });
    };
    ChatPage.prototype._sendMessage = function () {
        var _this = this;
        var params = {
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
        }
        else {
            delete params.text;
        }
        if (this.image) {
            params.image = this.image;
        }
        else {
            delete params.image;
        }
        if (this.voiceMessage) {
            params.voiceMessage = this.voiceMessage;
        }
        else {
            delete params.voiceMessage;
        }
        if (this.location) {
            params.location = this.location;
        }
        else {
            delete params.location;
        }
        if (this.sticker) {
            params.sticker = this.sticker;
        }
        else {
            delete params.sticker;
        }
        if (this.video) {
            params.video = this.video;
        }
        else {
            delete params.video;
        }
        if (this.audio) {
            params.audio = this.audio;
        }
        else {
            delete params.audio;
        }
        if (this.fileType) {
            params.fileType = this.fileType;
        }
        else {
            delete params.fileType;
        }
        if (this.pdf) {
            params.pdf = this.pdf;
        }
        else {
            delete params.pdf;
        }
        this.messages.push(params);
        var index = this.messages.length - 1;
        this._clearMessage();
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        }, 300);
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.message, params).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.messages[index] = response;
        });
    };
    ;
    ChatPage.prototype.sendMessage = function () {
        if (this.text) {
            this._sendMessage();
        }
    };
    ChatPage.prototype.openFile = function (url) {
        this.iab.create(url, '_system', "location=yes");
    };
    ChatPage.prototype.readMessage = function () {
        var check = false;
        for (var i = 0; i < this.channel.users.length; i++) {
            if (this.channel.users[i].userId == this.myAccount.id && this.channel.users[i].read) {
                check = true;
                break;
            }
        }
        if (check) {
            this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.channel + this.channel._id, {
                read: 0,
                user: this.myAccount.id
            }).subscribe(function () {
            });
        }
    };
    ;
    //Start video call
    ChatPage.prototype.startCallUser = function (user, isConnecting) {
        console.log(__WEBPACK_IMPORTED_MODULE_6__video_modal__["a" /* VideoPage */]);
        modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__video_modal__["a" /* VideoPage */]);
        modal.present();
        self.receiveUser = user;
        if (self.platform.is('ios')) {
            self._callVideo({ video: true, audio: true }, isConnecting, user);
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
        }
        else {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                var deviceId;
                for (var i = 0; i < devices.length; i++) {
                    if (devices[i].kind == 'videoinput') {
                        deviceId = devices[i].deviceId;
                        break;
                    }
                }
                var constraints = {
                    audio: true,
                    video: {
                        mandatory: {},
                        optional: [{
                                sourceId: deviceId
                            }]
                    }
                };
                self._callVideo(constraints, isConnecting, user);
            });
        }
    };
    ChatPage.prototype._callVideo = function (option, isConnecting, user) {
        option = option || {
            video: true,
            audio: true
        };
        navigator.webkitGetUserMedia(option, function (stream) {
            self.localStream = stream;
            self.localStream.src = window.URL.createObjectURL(stream);
            self.isOpenCall = true;
            self._ngZone.run(function () {
                console.log('Outside Done!');
            });
            self.events.publish('stream', {
                localStream: self.localStream,
                user: user
            });
            if (!isConnecting) {
                self.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.webrtc, {
                    to: user,
                    status: 1,
                    from: self.myAccount,
                    option: {
                        audio: true,
                        video: true
                    },
                }).subscribe(function (res) {
                    console.log('res', res);
                });
            }
            else {
                self.connect(true);
            }
        }, function (e) {
            console.log('No live audio input: ' + e);
        });
    };
    ;
    ChatPage.prototype.connect = function (isCaller) {
        if (self.platform.is('ios')) {
            peerConnection = new window.RTCPeerConnection(peerConnectionConfig);
        }
        else {
            peerConnection = new RTCPeerConnection(peerConnectionConfig);
        }
        //peerConnection = new RTCPeerConnection(peerConnectionConfig);
        peerConnection.onicecandidate = function (event) { return self.gotIceCandidate(event); };
        peerConnection.onaddstream = function (stream) { return self.gotRemoteStream(stream); };
        peerConnection.addStream(self.localStream);
        self._ngZone.run(function () {
            console.log('Outside Done!');
        });
        if (isCaller) {
            peerConnection.createOffer().then(function (des) { return self.createdDescription(des); }).catch(this.errorHandler);
            self._ngZone.run(function () {
                console.log('Outside Done!');
            });
        }
    };
    ;
    ChatPage.prototype.gotMessageFromServer = function (message) {
        var self = this;
        if (!peerConnection)
            self.connect(false);
        var signal = message;
        // Ignore messages from ourself
        if (signal.to._id == self.receiveUser._id)
            return;
        if (signal.sdp) {
            peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function () {
                // Only create answers in response to offers
                if (signal.sdp.type == 'offer') {
                    peerConnection.createAnswer().then(self.createdDescription).catch(self.errorHandler);
                    self._ngZone.run(function () {
                        console.log('Outside Done!');
                    });
                }
            }).catch(this.errorHandler);
        }
        else if (signal.ice) {
            peerConnection.addIceCandidate(new RTCIceCandidate(signal.ice)).catch(self.errorHandler);
        }
    };
    ChatPage.prototype.gotIceCandidate = function (event) {
        if (event.candidate != null) {
            console.log(event);
            self.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.webrtc, {
                ice: event.candidate,
                to: self.receiveUser,
                status: 2
            }).subscribe(function (res) {
                console.log('res', res);
            });
        }
    };
    ChatPage.prototype.gotRemoteStream = function (event) {
        console.log('event', event);
        self.remoteStream = event.stream;
        self.remoteStream.src = window.URL.createObjectURL(event.stream);
        self.events.publish('stream', {
            remoteStream: self.remoteStream
        });
        self._ngZone.run(function () {
            console.log('Outside Done!');
        });
    };
    ChatPage.prototype.createdDescription = function (description) {
        peerConnection.setLocalDescription(description).then(function () {
            self.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.webrtc, {
                sdp: peerConnection.localDescription,
                to: self.receiveUser,
                status: 2
            }).subscribe(function (res) {
                console.log('res', res);
            });
        }).catch(self.errorHandler);
    };
    ChatPage.prototype.errorHandler = function (error) {
        console.log(error);
    };
    ChatPage.prototype.stopMediaTrack = function (stream) {
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        stream = null;
        self._ngZone.run(function () {
            console.log('Outside Done!');
        });
    };
    ;
    ChatPage.prototype.closeCallUser = function (isStop) {
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
        }
        else {
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
        self._ngZone.run(function () {
            console.log('Outside Done!');
        });
        if (!isStop) {
            self.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.webrtc, {
                to: self.receiveUser,
                status: 3,
                from: self.myAccount
            }).subscribe(function (res) {
                console.log('res', res);
            });
        }
    };
    ;
    //End video call
    ChatPage.prototype.ngOnDestroy = function () {
        socket.removeAllListeners('message:save');
        socket.removeAllListeners('webrtc:save');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/'<ion-header id="chat-header">\n  <ion-navbar>\n    <ion-title>\n      <div class="horizontal layout center header-chat">\n        <img src="{{user.image}}" alt="">\n        <div class="flex">\n          <div class="user-name">{{user.name}}</div>\n          <div class="user-status horizontal layout center"><span class="online-status"></span> Online</div>\n        </div>\n      </div>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="startCallUser(user, false)">\n        <ion-icon name="ios-videocam" style="font-size: 2.2em;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="chat-content">\n  <div padding class="text-center" *ngIf="isLoading">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div class="messages" (click)="readMessage()" id="messages">\n    <ul class="chat">\n      <!--[ngClass]="{\'chat__bubble&#45;&#45;rcvd\': item.from.userId != myAccount.id, \'chat__bubble&#45;&#45;sent\': item.from.userId == myAccount.id, \'chat__bubble&#45;&#45;stop\': index == messages.length - 1 || item.from.userId != data.messages[index + 1].from.userId}"-->\n      <li class="chat__bubble" *ngFor="let item of messages; let i = index; trackBy: index" [ngClass]="{\'chat__bubble--rcvd\': item.from.userId != myAccount.id, \'chat__bubble--sent\': item.from.userId == myAccount.id, \'chat__bubble--stop\': (i == messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId, \'no-bg\': item.image || item.pdf || item.video || item.audio || item.voiceMessage}">\n        <div *ngIf="item.from.userId != myAccount.id">\n          <img src="{{item.from.image}}" alt="" *ngIf="i == (messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId" class="message-user-avatar">\n        </div>\n        <div *ngIf="item.text" class="message-text">{{item.text}}</div>\n        <div *ngIf="item.image" class="message-image">\n          <img src="{{item.image}}" alt="">\n        </div>\n\n        <div *ngIf="item.pdf" class="message-pdf">\n          <div class="file-pdf" (click)="openFile(item.pdf)">\n            Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>\n          </div>\n          <!--<a href="{{item.pdf}}" class="file-pdf" target="_blank">Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>-->\n          <!--</a>-->\n        </div>\n\n        <div *ngIf="item.audio" class="message-audio">\n          <audio controls [src]="item.audio | safe:\'url\'"></audio>\n        </div>\n\n        <div *ngIf="item.video" class="message-video">\n          <video controls [src]="item.video | safe:\'url\'"></video>\n        </div>\n        <!--<div style="width: 100%; min-width: 230px" ng-if="item.audio">-->\n\n        <!--<audio ng-src="{{item.audio | trustUrl}}" controls ></audio>-->\n        <!--</div>-->\n\n        <!--<img ng-src="{{item.sticker}}" alt="" class="img-responsive" ng-if="item.sticker">-->\n\n        <!--<div class="message-time" ng-show="item.showTime || $index == data.messages.length - 1">{{item.createdAt |-->\n        <!--date:\'short\'}}-->\n        <!--</div>-->\n\n      </li>\n\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">What are you up to?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Not much.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Just writing some CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">I just LOVE writing CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent chat__bubble&#45;&#45;stop">Do you?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">Yeah!</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">It\'s super fun.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">... SUPER fun.</li>-->\n    </ul>\n  </div>\n\n</ion-content>\n<ion-footer class="horizontal layout center chat-footer">\n  <input type="file" accept="*" #file\n         style="visibility: hidden; position: fixed; z-index: -99999" (change)="uploadFile($event)">\n  <button clear icon-start ion-button (click)="file.click()" class="first-child">\n    <ion-icon name="ios-add-circle"></ion-icon>\n  </button>\n  <input type="text" placeholder="Text message..." class="flex" [(ngModel)]="text">\n  <button clear icon-start ion-button (click)="sendMessage()">\n    <ion-icon name="ios-send"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _l || Object])
    ], ChatPage);
    return ChatPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    url: 'http://192.168.13.101:8080',
    oneSignalId: '0aefe444-ad09-494a-b457-2d9febdbf78e',
    api: {
        login: '/auth/phone/',
        user: '/api/users/',
        upload: '/api/uploads/',
        channel: '/api/channels/',
        message: '/api/messages/',
        turn: '/api/turn/',
        webrtc: '/api/webrtc/',
        story: '/api/stories/',
        feedback: '/api/feedbacks/',
        qrcode: '/api/qrcode/',
        socket: '/api/socket/'
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var self;
var VideoPage = (function () {
    function VideoPage(platform, params, viewCtrl, events, _ngZone) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this._ngZone = _ngZone;
        self = this;
        events.subscribe('stream', function (stream) {
            console.log(stream);
            if (stream.localStream)
                self.localStream = stream.localStream;
            if (stream.remoteStream)
                self.remoteStream = stream.remoteStream;
            if (stream.user)
                self.user = stream.user;
            // user and time are the same arguments passed in `events.publish(user, time)`
        });
        events.subscribe('dismiss', function (stream) {
            console.log(stream);
            self.closeCall(true);
            // user and time are the same arguments passed in `events.publish(user, time)`
        });
    }
    VideoPage.prototype.stopMediaTrack = function (stream) {
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        stream = null;
        self._ngZone.run(function () {
            console.log('Outside Done!');
        });
    };
    ;
    VideoPage.prototype.closeCall = function (boolean) {
        if (self.platform.is('ios')) {
            if (self.remoteStream) {
                self.remoteStream.stop();
                self.remoteStream = null;
            }
            if (self.localStream) {
                self.localStream.stop();
                self.localStream = null;
            }
        }
        else {
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
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Video Call\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="closeCall()">\n        <ion-icon name="ios-close-circle-outline" style="font-size: 3.2em; color: #fff"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="overflow: hidden" class="horizontal layout center center-justified">\n  <div *ngIf="!remoteStream && user">\n    Calling {{user.name}}...\n  </div>\n  <div *ngIf="remoteStream">\n    <video [src]="remoteStream.src | safe:\'url\'" autoplay style="width: 100%; height: 100%; object-fit: cover;"></video>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="horizontal layout">\n    <div class="flex"></div>\n    <video [src]="localStream.src | safe:\'url\'" autoplay muted style="height: 80px; width: auto; margin-bottom: 5px; margin-right: 5px" *ngIf="localStream"></video>\n\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_video_modal__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_14__pages_video_modal__["a" /* VideoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_video_modal__["a" /* VideoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__pipe__["a" /* SafePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 246,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es-us": 248,
	"./es-us.js": 248,
	"./es.js": 246,
	"./et": 249,
	"./et.js": 249,
	"./eu": 250,
	"./eu.js": 250,
	"./fa": 251,
	"./fa.js": 251,
	"./fi": 252,
	"./fi.js": 252,
	"./fo": 253,
	"./fo.js": 253,
	"./fr": 254,
	"./fr-ca": 255,
	"./fr-ca.js": 255,
	"./fr-ch": 256,
	"./fr-ch.js": 256,
	"./fr.js": 254,
	"./fy": 257,
	"./fy.js": 257,
	"./gd": 258,
	"./gd.js": 258,
	"./gl": 259,
	"./gl.js": 259,
	"./gom-latn": 260,
	"./gom-latn.js": 260,
	"./gu": 261,
	"./gu.js": 261,
	"./he": 262,
	"./he.js": 262,
	"./hi": 263,
	"./hi.js": 263,
	"./hr": 264,
	"./hr.js": 264,
	"./hu": 265,
	"./hu.js": 265,
	"./hy-am": 266,
	"./hy-am.js": 266,
	"./id": 267,
	"./id.js": 267,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it.js": 269,
	"./ja": 270,
	"./ja.js": 270,
	"./jv": 271,
	"./jv.js": 271,
	"./ka": 272,
	"./ka.js": 272,
	"./kk": 273,
	"./kk.js": 273,
	"./km": 274,
	"./km.js": 274,
	"./kn": 275,
	"./kn.js": 275,
	"./ko": 276,
	"./ko.js": 276,
	"./ky": 277,
	"./ky.js": 277,
	"./lb": 278,
	"./lb.js": 278,
	"./lo": 279,
	"./lo.js": 279,
	"./lt": 280,
	"./lt.js": 280,
	"./lv": 281,
	"./lv.js": 281,
	"./me": 282,
	"./me.js": 282,
	"./mi": 283,
	"./mi.js": 283,
	"./mk": 284,
	"./mk.js": 284,
	"./ml": 285,
	"./ml.js": 285,
	"./mr": 286,
	"./mr.js": 286,
	"./ms": 287,
	"./ms-my": 288,
	"./ms-my.js": 288,
	"./ms.js": 287,
	"./my": 289,
	"./my.js": 289,
	"./nb": 290,
	"./nb.js": 290,
	"./ne": 291,
	"./ne.js": 291,
	"./nl": 292,
	"./nl-be": 293,
	"./nl-be.js": 293,
	"./nl.js": 292,
	"./nn": 294,
	"./nn.js": 294,
	"./pa-in": 295,
	"./pa-in.js": 295,
	"./pl": 296,
	"./pl.js": 296,
	"./pt": 297,
	"./pt-br": 298,
	"./pt-br.js": 298,
	"./pt.js": 297,
	"./ro": 299,
	"./ro.js": 299,
	"./ru": 300,
	"./ru.js": 300,
	"./sd": 301,
	"./sd.js": 301,
	"./se": 302,
	"./se.js": 302,
	"./si": 303,
	"./si.js": 303,
	"./sk": 304,
	"./sk.js": 304,
	"./sl": 305,
	"./sl.js": 305,
	"./sq": 306,
	"./sq.js": 306,
	"./sr": 307,
	"./sr-cyrl": 308,
	"./sr-cyrl.js": 308,
	"./sr.js": 307,
	"./ss": 309,
	"./ss.js": 309,
	"./sv": 310,
	"./sv.js": 310,
	"./sw": 311,
	"./sw.js": 311,
	"./ta": 312,
	"./ta.js": 312,
	"./te": 313,
	"./te.js": 313,
	"./tet": 314,
	"./tet.js": 314,
	"./th": 315,
	"./th.js": 315,
	"./tl-ph": 316,
	"./tl-ph.js": 316,
	"./tlh": 317,
	"./tlh.js": 317,
	"./tr": 318,
	"./tr.js": 318,
	"./tzl": 319,
	"./tzl.js": 319,
	"./tzm": 320,
	"./tzm-latn": 321,
	"./tzm-latn.js": 321,
	"./tzm.js": 320,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Unable to bypass security for invalid type: " + type);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_patient__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



function formatChannel(channel, user) {
    var userId;
    var read = 0;
    for (var i = 0; i < channel.users.length; i++) {
        if (channel.users[i].userId != user.id) {
            userId = channel.users[i].userId;
        }
        else {
            read = channel.users[i].read;
        }
    }
    if (userId.indexOf('doctor') !== -1) {
        channel.userShow = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.find(__WEBPACK_IMPORTED_MODULE_0__data_doctor__["a" /* Doctors */], { id: userId });
        channel.userShow.read = read;
    }
    else if (userId.indexOf('patient') !== -1) {
        channel.userShow = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.find(__WEBPACK_IMPORTED_MODULE_1__data_patient__["a" /* Patients */], { id: userId });
        channel.userShow.read = read;
    }
    return channel;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    formatChannel: formatChannel
});
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events) {
        this.events = events;
        var self = this;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user)
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        else
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var notificationOpenedCallback = function (jsonData) {
                if (jsonData.notification.payload.additionalData.channel) {
                    console.log(jsonData.notification.payload.additionalData.channel);
                    self.events.publish('open-noti', jsonData.notification.payload.additionalData.channel);
                    //$state.go('app.chatDetail', {id: jsonData.notification.payload.additionalData.channel})
                }
            };
            document.addEventListener("deviceready", function () {
                window.plugins.OneSignal
                    .startInit(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].oneSignalId)
                    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
                console.log(window.plugins.OneSignal);
                if (platform.is('ios')) {
                    console.log('2222');
                    cordova.plugins.iosrtc.registerGlobals();
                    console.log(cordova.plugins.iosrtc);
                    // load adapter.js
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = "js/adapter-latest.js";
                    script.async = false;
                    document.getElementsByTagName("head")[0].appendChild(script);
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map