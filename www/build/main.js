webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_doctor__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_patient__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(137);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 135:
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

/***/ 136:
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_doctor__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_patient__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_socket_io_client__ = __webpack_require__(392);
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
            setTimeout(function () {
                if (self.navCtrl.getActive().component.name != 'ChatPage') {
                    channel = __WEBPACK_IMPORTED_MODULE_6__app_util__["a" /* default */].formatChannel(channel, self.user);
                    self.openChat(channel.userShow);
                }
            }, 500);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    url: 'http://192.168.1.196:8080',
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

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_modal__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(238);
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
    function ChatPage(navCtrl, navParams, platform, http, loadingCtrl, iab, events, alertCtrl, _ngZone, modalCtrl, transfer, file, camera, actionSheetCtrl) {
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
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
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
        this.receiveUser = {
            _id: null
        };
        this.localStream = null;
        this.remoteStream = null;
        this.isCalling = false;
        this.platformName = '';
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
        self.receiveUser = this.user;
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
                _this.messages = response.reverse();
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
            console.log('1111', self.receiveUser);
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
                //self.viewCtrl.dismiss();
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
        if (self.platform.is('ios')) {
            //cordova.plugins.Keyboard.disableScroll(true)
            self.platformName = 'ios';
            window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
            window.addEventListener('native.keyboardhide', this.keyboardHideHandler);
        }
        document.addEventListener("deviceready", function () {
            self.isPlatform = 'device';
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
            if (self.platform.is('ios')) {
                //cordova.plugins.Keyboard.disableScroll(true)
                self.platformName = 'ios';
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
    ChatPage.prototype.deviceUploadFile = function (boolean) {
        var options = {
            quality: 50,
            destinationType: self.camera.DestinationType.FILE_URI,
            sourceType: 1,
            encodingType: 0,
            correctOrientation: true
        };
        if (boolean) {
            options.sourceType = 0;
        }
        var onSuccess = function (FILE_URI) {
            var optionsUpload = new FileUploadOptions();
            optionsUpload.fileKey = "file";
            optionsUpload.chunkedMode = false;
            var fileTransfer = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["b" /* FileTransferObject */]();
            fileTransfer.upload(FILE_URI, encodeURI(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.upload), optionsUpload, true).then(function (result) {
                var data = JSON.parse(result.response);
                console.log(data);
                self.image = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + '/' + data.path;
                self._sendMessage();
            });
        };
        var onFail = function (e) {
            console.log("On fail " + e);
        };
        navigator.camera.getPicture(onSuccess, onFail, options);
    };
    ChatPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Upload',
            buttons: [
                {
                    text: 'Take photo',
                    handler: function () {
                        console.log('Archive clicked');
                        self.deviceUploadFile();
                    }
                }, {
                    text: 'Choose photo',
                    handler: function () {
                        self.deviceUploadFile(true);
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
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
                            }],
                        minWidth: 320,
                        maxWidth: 320,
                        minHeight: 720,
                        maxHeight: 720,
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
            console.log('222', self.receiveUser);
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
    ChatPage.prototype.openImage = function (image) {
    };
    ChatPage.prototype.ngOnDestroy = function () {
        socket.removeAllListeners('message:save');
        socket.removeAllListeners('webrtc:save');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/'<ion-header id="chat-header">\n  <ion-navbar>\n    <ion-title>\n      <div class="horizontal layout center header-chat">\n        <img src="{{user.image}}" alt="">\n        <div class="flex">\n          <div class="user-name">{{user.name}}</div>\n          <div class="user-status horizontal layout center"><span class="online-status"></span> Online</div>\n        </div>\n      </div>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="startCallUser(user, false)">\n        <ion-icon name="ios-videocam" style="font-size: 2.2em;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="chat-content">\n  <div padding class="text-center" *ngIf="isLoading">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div class="messages" (click)="readMessage()" id="messages">\n    <ul class="chat">\n      <!--[ngClass]="{\'chat__bubble&#45;&#45;rcvd\': item.from.userId != myAccount.id, \'chat__bubble&#45;&#45;sent\': item.from.userId == myAccount.id, \'chat__bubble&#45;&#45;stop\': index == messages.length - 1 || item.from.userId != data.messages[index + 1].from.userId}"-->\n      <li class="chat__bubble" *ngFor="let item of messages; let i = index; trackBy: index" [ngClass]="{\'chat__bubble--rcvd\': item.from.userId != myAccount.id, \'chat__bubble--sent\': item.from.userId == myAccount.id, \'chat__bubble--stop\': (i == messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId, \'no-bg\': item.image || item.pdf || item.video || item.audio || item.voiceMessage}">\n        <div *ngIf="item.from.userId != myAccount.id">\n          <img src="{{item.from.image}}" alt="" *ngIf="i == (messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId" class="message-user-avatar">\n        </div>\n        <div *ngIf="item.text" class="message-text">{{item.text}}</div>\n        <div *ngIf="item.image" class="message-image">\n          <img src="{{item.image}}" alt="" imageViewer>\n        </div>\n\n        <div *ngIf="item.pdf" class="message-pdf">\n          <div class="file-pdf" (click)="openFile(item.pdf)">\n            Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>\n          </div>\n          <!--<a href="{{item.pdf}}" class="file-pdf" target="_blank">Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>-->\n          <!--</a>-->\n        </div>\n\n        <div *ngIf="item.audio" class="message-audio">\n          <audio controls [src]="item.audio | safe:\'url\'"></audio>\n        </div>\n\n        <div *ngIf="item.video" class="message-video">\n          <video controls [src]="item.video | safe:\'url\'"></video>\n        </div>\n        <!--<div style="width: 100%; min-width: 230px" ng-if="item.audio">-->\n\n        <!--<audio ng-src="{{item.audio | trustUrl}}" controls ></audio>-->\n        <!--</div>-->\n\n        <!--<img ng-src="{{item.sticker}}" alt="" class="img-responsive" ng-if="item.sticker">-->\n\n        <!--<div class="message-time" ng-show="item.showTime || $index == data.messages.length - 1">{{item.createdAt |-->\n        <!--date:\'short\'}}-->\n        <!--</div>-->\n\n      </li>\n\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">What are you up to?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Not much.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Just writing some CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">I just LOVE writing CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent chat__bubble&#45;&#45;stop">Do you?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">Yeah!</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">It\'s super fun.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">... SUPER fun.</li>-->\n    </ul>\n  </div>\n\n</ion-content>\n<ion-footer class="horizontal layout center chat-footer">\n  <input type="file" accept="*" #file\n         style="visibility: hidden; position: fixed; z-index: -99999" (change)="uploadFile($event)">\n  <button clear icon-start ion-button (click)="file.click()" class="first-child">\n    <ion-icon name="ios-add-circle"></ion-icon>\n  </button>\n\n  <button clear icon-start ion-button (click)="presentActionSheet()" class="first-child" *ngIf="platformName == \'ios\'">\n    <ion-icon name="ios-camera"></ion-icon>\n  </button>\n  <input type="text" placeholder="Text message..." class="flex" [(ngModel)]="text">\n  <button clear icon-start ion-button (click)="sendMessage()">\n    <ion-icon name="ios-send"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    function VideoPage(platform, params, viewCtrl, events) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.events = events;
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
            selector: 'page-video',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Video Call\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="closeCall()">\n        <ion-icon name="ios-close-circle-outline" style="font-size: 3.2em; color: #fff"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="overflow: hidden" class="horizontal layout center center-justified">\n  <div *ngIf="!remoteStream && user">\n    Calling {{user.name}}...\n  </div>\n  <div *ngIf="remoteStream"  style="width: 100%; height: 100%">\n    <video [src]="remoteStream.src | safe:\'url\'" autoplay style="width: 100%; height: 100%; object-fit: cover"></video>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="horizontal layout">\n    <div class="flex"></div>\n    <video [src]="localStream.src | safe:\'url\'" autoplay muted style="height: 80px; width: auto; margin-bottom: 5px; margin-right: 5px" *ngIf="localStream"></video>\n\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(417);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipe__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_video_modal__ = __webpack_require__(405);
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
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_15__pages_video_modal__["a" /* VideoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_video_modal__["a" /* VideoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__pipe__["a" /* SafePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 240,
	"./af.js": 240,
	"./ar": 241,
	"./ar-dz": 242,
	"./ar-dz.js": 242,
	"./ar-kw": 243,
	"./ar-kw.js": 243,
	"./ar-ly": 244,
	"./ar-ly.js": 244,
	"./ar-ma": 245,
	"./ar-ma.js": 245,
	"./ar-sa": 246,
	"./ar-sa.js": 246,
	"./ar-tn": 247,
	"./ar-tn.js": 247,
	"./ar.js": 241,
	"./az": 248,
	"./az.js": 248,
	"./be": 249,
	"./be.js": 249,
	"./bg": 250,
	"./bg.js": 250,
	"./bm": 251,
	"./bm.js": 251,
	"./bn": 252,
	"./bn.js": 252,
	"./bo": 253,
	"./bo.js": 253,
	"./br": 254,
	"./br.js": 254,
	"./bs": 255,
	"./bs.js": 255,
	"./ca": 256,
	"./ca.js": 256,
	"./cs": 257,
	"./cs.js": 257,
	"./cv": 258,
	"./cv.js": 258,
	"./cy": 259,
	"./cy.js": 259,
	"./da": 260,
	"./da.js": 260,
	"./de": 261,
	"./de-at": 262,
	"./de-at.js": 262,
	"./de-ch": 263,
	"./de-ch.js": 263,
	"./de.js": 261,
	"./dv": 264,
	"./dv.js": 264,
	"./el": 265,
	"./el.js": 265,
	"./en-au": 266,
	"./en-au.js": 266,
	"./en-ca": 267,
	"./en-ca.js": 267,
	"./en-gb": 268,
	"./en-gb.js": 268,
	"./en-ie": 269,
	"./en-ie.js": 269,
	"./en-nz": 270,
	"./en-nz.js": 270,
	"./eo": 271,
	"./eo.js": 271,
	"./es": 272,
	"./es-do": 273,
	"./es-do.js": 273,
	"./es-us": 274,
	"./es-us.js": 274,
	"./es.js": 272,
	"./et": 275,
	"./et.js": 275,
	"./eu": 276,
	"./eu.js": 276,
	"./fa": 277,
	"./fa.js": 277,
	"./fi": 278,
	"./fi.js": 278,
	"./fo": 279,
	"./fo.js": 279,
	"./fr": 280,
	"./fr-ca": 281,
	"./fr-ca.js": 281,
	"./fr-ch": 282,
	"./fr-ch.js": 282,
	"./fr.js": 280,
	"./fy": 283,
	"./fy.js": 283,
	"./gd": 284,
	"./gd.js": 284,
	"./gl": 285,
	"./gl.js": 285,
	"./gom-latn": 286,
	"./gom-latn.js": 286,
	"./gu": 287,
	"./gu.js": 287,
	"./he": 288,
	"./he.js": 288,
	"./hi": 289,
	"./hi.js": 289,
	"./hr": 290,
	"./hr.js": 290,
	"./hu": 291,
	"./hu.js": 291,
	"./hy-am": 292,
	"./hy-am.js": 292,
	"./id": 293,
	"./id.js": 293,
	"./is": 294,
	"./is.js": 294,
	"./it": 295,
	"./it.js": 295,
	"./ja": 296,
	"./ja.js": 296,
	"./jv": 297,
	"./jv.js": 297,
	"./ka": 298,
	"./ka.js": 298,
	"./kk": 299,
	"./kk.js": 299,
	"./km": 300,
	"./km.js": 300,
	"./kn": 301,
	"./kn.js": 301,
	"./ko": 302,
	"./ko.js": 302,
	"./ky": 303,
	"./ky.js": 303,
	"./lb": 304,
	"./lb.js": 304,
	"./lo": 305,
	"./lo.js": 305,
	"./lt": 306,
	"./lt.js": 306,
	"./lv": 307,
	"./lv.js": 307,
	"./me": 308,
	"./me.js": 308,
	"./mi": 309,
	"./mi.js": 309,
	"./mk": 310,
	"./mk.js": 310,
	"./ml": 311,
	"./ml.js": 311,
	"./mr": 312,
	"./mr.js": 312,
	"./ms": 313,
	"./ms-my": 314,
	"./ms-my.js": 314,
	"./ms.js": 313,
	"./my": 315,
	"./my.js": 315,
	"./nb": 316,
	"./nb.js": 316,
	"./ne": 317,
	"./ne.js": 317,
	"./nl": 318,
	"./nl-be": 319,
	"./nl-be.js": 319,
	"./nl.js": 318,
	"./nn": 320,
	"./nn.js": 320,
	"./pa-in": 321,
	"./pa-in.js": 321,
	"./pl": 322,
	"./pl.js": 322,
	"./pt": 323,
	"./pt-br": 324,
	"./pt-br.js": 324,
	"./pt.js": 323,
	"./ro": 325,
	"./ro.js": 325,
	"./ru": 326,
	"./ru.js": 326,
	"./sd": 327,
	"./sd.js": 327,
	"./se": 328,
	"./se.js": 328,
	"./si": 329,
	"./si.js": 329,
	"./sk": 330,
	"./sk.js": 330,
	"./sl": 331,
	"./sl.js": 331,
	"./sq": 332,
	"./sq.js": 332,
	"./sr": 333,
	"./sr-cyrl": 334,
	"./sr-cyrl.js": 334,
	"./sr.js": 333,
	"./ss": 335,
	"./ss.js": 335,
	"./sv": 336,
	"./sv.js": 336,
	"./sw": 337,
	"./sw.js": 337,
	"./ta": 338,
	"./ta.js": 338,
	"./te": 339,
	"./te.js": 339,
	"./tet": 340,
	"./tet.js": 340,
	"./th": 341,
	"./th.js": 341,
	"./tl-ph": 342,
	"./tl-ph.js": 342,
	"./tlh": 343,
	"./tlh.js": 343,
	"./tr": 344,
	"./tr.js": 344,
	"./tzl": 345,
	"./tzl.js": 345,
	"./tzm": 346,
	"./tzm-latn": 347,
	"./tzm-latn.js": 347,
	"./tzm.js": 346,
	"./uk": 348,
	"./uk.js": 348,
	"./ur": 349,
	"./ur.js": 349,
	"./uz": 350,
	"./uz-latn": 351,
	"./uz-latn.js": 351,
	"./uz.js": 350,
	"./vi": 352,
	"./vi.js": 352,
	"./x-pseudo": 353,
	"./x-pseudo.js": 353,
	"./yo": 354,
	"./yo.js": 354,
	"./zh-cn": 355,
	"./zh-cn.js": 355,
	"./zh-hk": 356,
	"./zh-hk.js": 356,
	"./zh-tw": 357,
	"./zh-tw.js": 357
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
webpackContext.id = 464;

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
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

/***/ 590:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_doctor__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_patient__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(406);
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

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(137);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[407]);
//# sourceMappingURL=main.js.map