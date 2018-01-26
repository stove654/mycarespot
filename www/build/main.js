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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(113);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    url: 'http://192.168.12.113:8080',
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

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_modal__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(211);
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
    function ChatPage(navCtrl, navParams, platform, http, loadingCtrl, iab, events, alertCtrl, _ngZone, modalCtrl, actionSheetCtrl) {
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
    ChatPage.prototype.ngOnDestroy = function () {
        socket.removeAllListeners('message:save');
        socket.removeAllListeners('webrtc:save');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/'<ion-header id="chat-header">\n  <ion-navbar>\n    <ion-title>\n      <div class="horizontal layout center header-chat">\n        <img src="{{user.image}}" alt="">\n        <div class="flex">\n          <div class="user-name">{{user.name}}</div>\n          <div class="user-status horizontal layout center"><span class="online-status"></span> Online</div>\n        </div>\n      </div>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="startCallUser(user, false)">\n        <ion-icon name="ios-videocam" style="font-size: 2.2em;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="chat-content">\n  <div padding class="text-center" *ngIf="isLoading">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div class="messages" (click)="readMessage()" id="messages">\n    <ul class="chat">\n      <!--[ngClass]="{\'chat__bubble&#45;&#45;rcvd\': item.from.userId != myAccount.id, \'chat__bubble&#45;&#45;sent\': item.from.userId == myAccount.id, \'chat__bubble&#45;&#45;stop\': index == messages.length - 1 || item.from.userId != data.messages[index + 1].from.userId}"-->\n      <li class="chat__bubble" *ngFor="let item of messages; let i = index; trackBy: index" [ngClass]="{\'chat__bubble--rcvd\': item.from.userId != myAccount.id, \'chat__bubble--sent\': item.from.userId == myAccount.id, \'chat__bubble--stop\': (i == messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId, \'no-bg\': item.image || item.pdf || item.video || item.audio || item.voiceMessage}">\n        <div *ngIf="item.from.userId != myAccount.id">\n          <img src="{{item.from.image}}" alt="" *ngIf="i == (messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId" class="message-user-avatar">\n        </div>\n        <div *ngIf="item.text" class="message-text">{{item.text}}</div>\n        <div *ngIf="item.image" class="message-image">\n          <img src="{{item.image}}" alt="">\n        </div>\n\n        <div *ngIf="item.pdf" class="message-pdf">\n          <div class="file-pdf" (click)="openFile(item.pdf)">\n            Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>\n          </div>\n          <!--<a href="{{item.pdf}}" class="file-pdf" target="_blank">Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>-->\n          <!--</a>-->\n        </div>\n\n        <div *ngIf="item.audio" class="message-audio">\n          <audio controls [src]="item.audio | safe:\'url\'"></audio>\n        </div>\n\n        <div *ngIf="item.video" class="message-video">\n          <video controls [src]="item.video | safe:\'url\'"></video>\n        </div>\n        <!--<div style="width: 100%; min-width: 230px" ng-if="item.audio">-->\n\n        <!--<audio ng-src="{{item.audio | trustUrl}}" controls ></audio>-->\n        <!--</div>-->\n\n        <!--<img ng-src="{{item.sticker}}" alt="" class="img-responsive" ng-if="item.sticker">-->\n\n        <!--<div class="message-time" ng-show="item.showTime || $index == data.messages.length - 1">{{item.createdAt |-->\n        <!--date:\'short\'}}-->\n        <!--</div>-->\n\n      </li>\n\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">What are you up to?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Not much.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Just writing some CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">I just LOVE writing CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent chat__bubble&#45;&#45;stop">Do you?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">Yeah!</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">It\'s super fun.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">... SUPER fun.</li>-->\n    </ul>\n  </div>\n\n</ion-content>\n<ion-footer class="horizontal layout center chat-footer">\n  <input type="file" accept="*" #file\n         style="visibility: hidden; position: fixed; z-index: -99999" (change)="uploadFile($event)">\n  <button clear icon-start ion-button (click)="file.click()" class="first-child">\n    <ion-icon name="ios-add-circle"></ion-icon>\n  </button>\n\n  <button clear icon-start ion-button (click)="presentActionSheet()" class="first-child" *ngIf="platformName == \'ios\'">\n    <ion-icon name="ios-camera"></ion-icon>\n  </button>\n  <input type="text" placeholder="Text message..." class="flex" [(ngModel)]="text">\n  <button clear icon-start ion-button (click)="sendMessage()">\n    <ion-icon name="ios-send"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

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
            selector: 'page-video',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Video Call\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="closeCall()">\n        <ion-icon name="ios-close-circle-outline" style="font-size: 3.2em; color: #fff"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="overflow: hidden" class="horizontal layout center center-justified">\n  <div *ngIf="!remoteStream && user">\n    Calling {{user.name}}...\n  </div>\n  <div *ngIf="remoteStream">\n    <video [src]="remoteStream.src | safe:\'url\'" autoplay style="width: 100%; height: 100%; object-fit: cover;"></video>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="horizontal layout">\n    <div class="flex"></div>\n    <video [src]="localStream.src | safe:\'url\'" autoplay muted style="height: 80px; width: auto; margin-bottom: 5px; margin-right: 5px" *ngIf="localStream"></video>\n\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(342);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
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
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bm": 224,
	"./bm.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./gu": 260,
	"./gu.js": 260,
	"./he": 261,
	"./he.js": 261,
	"./hi": 262,
	"./hi.js": 262,
	"./hr": 263,
	"./hr.js": 263,
	"./hu": 264,
	"./hu.js": 264,
	"./hy-am": 265,
	"./hy-am.js": 265,
	"./id": 266,
	"./id.js": 266,
	"./is": 267,
	"./is.js": 267,
	"./it": 268,
	"./it.js": 268,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mr": 285,
	"./mr.js": 285,
	"./ms": 286,
	"./ms-my": 287,
	"./ms-my.js": 287,
	"./ms.js": 286,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./uk": 321,
	"./uk.js": 321,
	"./ur": 322,
	"./ur.js": 322,
	"./uz": 323,
	"./uz-latn": 324,
	"./uz-latn.js": 324,
	"./uz.js": 323,
	"./vi": 325,
	"./vi.js": 325,
	"./x-pseudo": 326,
	"./x-pseudo.js": 326,
	"./yo": 327,
	"./yo.js": 327,
	"./zh-cn": 328,
	"./zh-cn.js": 328,
	"./zh-hk": 329,
	"./zh-hk.js": 329,
	"./zh-tw": 330,
	"./zh-tw.js": 330
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

/***/ 461:
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(113);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map