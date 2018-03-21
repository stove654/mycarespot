webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    function LoginPage(navCtrl, http, _ngZone, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this._ngZone = _ngZone;
        this.loadingCtrl = loadingCtrl;
        this.doctors = [];
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', "X-Developer-Id": "ddfe7623e35a427f9d5de7d4d274ce5f",
            "X-Api-Key": "6aac2f923eec5d721f58111c3a9ce3336a0ba4a5" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = 'https://mycarespot.sandbox.connectedcare.md/api/v2/account/token';
        this.http.post(url, {
            "userTypeId": 2,
            "hospitalId": 149,
            "email": "snapmcgrath+149@gmail.com",
            "password": "Password@123"
        }, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', "X-Developer-Id": "ddfe7623e35a427f9d5de7d4d274ce5f",
                "X-Api-Key": "6aac2f923eec5d721f58111c3a9ce3336a0ba4a5", "Authorization": "Bearer " + response.data[0].access_token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var url = 'https://mycarespot.sandbox.connectedcare.md/api/v2/physicians';
            _this.http.get(url, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.doctors = response.data[0];
                console.log(_this.doctors);
                loader.dismiss();
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    }
    LoginPage.prototype.selectUser = function (item) {
        var _this = this;
        console.log(item);
        var doctor = {
            id: item.userId,
            mycarespot: {
                Id: item.userId,
                Name: item.fullName,
                Image: item.profileImage,
                Speciality: item.medicalSpeciality
            },
            mycarespotRole: 'doctor'
        };
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.user, doctor)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            localStorage.setItem('user', JSON.stringify(response));
            loader.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
        // let user;
        // if (index == 1) {
        //   user = Doctors[0];
        // } else if (index == 2) {
        //   user = Patients[0]
        // }
        // user.type = index;
        // localStorage.setItem('user', JSON.stringify(user));
        // this.navCtrl.push(HomePage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/login/login.html"*/'<ion-content>\n  <h1 class="text-center">Doctors</h1>\n  <ion-list>\n    <ion-item *ngFor="let item of doctors; let i = index; trackBy: index" (click)="selectUser(item)">\n      <ion-thumbnail item-start>\n        <img src="{{item.profileImage}}">\n      </ion-thumbnail>\n      <h2>{{item.fullName}}</h2>\n      <p>{{item.medicalSpeciality}} • {{item.dob | date}}</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_util__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_socket_io_client__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_socket_io_client__);
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
var socket;
var prompt;
var HomePage = (function () {
    function HomePage(navCtrl, http, loadingCtrl, events, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.users = [];
        this.user = {
            type: null,
            _id: null,
            name: null
        };
        this.tabActive = 1;
        this.channels = [];
        this.isLoading = false;
        socket = __WEBPACK_IMPORTED_MODULE_9_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].url, {
            path: '/socket.io-client'
        });
        self = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
        this.isLoading = true;
        setTimeout(function () {
            console.log(socket);
            _this.http.put(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].api.user + _this.user._id, {
                online: true,
                socketId: socket.id
            }).map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
            });
        }, 3000);
        this.http.get(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].api.channel, {
            params: {
                userId: this.user._id
            }
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.isLoading = false;
            console.log(response);
            response.map(function (channel) {
                channel = __WEBPACK_IMPORTED_MODULE_4__app_util__["a" /* default */].formatChannel(channel, _this.user);
                return channel;
            });
            _this.channels = response;
            console.log(_this.channels);
            socket.on('channel:save', function (channel) {
                var isChannel = false;
                for (var i = 0; i < channel.users.length; i++) {
                    if (channel.users[i].userId == _this.user._id) {
                        isChannel = true;
                        break;
                    }
                }
                if (isChannel) {
                    _this.http.get(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].api.channel + channel._id).map(function (res) { return res.json(); })
                        .subscribe(function (response) {
                        var channel = response;
                        channel = __WEBPACK_IMPORTED_MODULE_4__app_util__["a" /* default */].formatChannel(channel, _this.user);
                        var isCheck = false;
                        for (var i = 0; i < _this.channels.length; i++) {
                            if (_this.channels[i]._id == channel._id) {
                                _this.channels[i] = channel;
                                _this.events.publish('channel', channel);
                                isCheck = true;
                                break;
                            }
                        }
                    });
                }
            });
        }, function (error) { return console.log(error); });
        events.subscribe('open-noti', function (channel) {
            setTimeout(function () {
                if (self.navCtrl.getActive().component.name != 'ChatPage') {
                    self.openChat(channel);
                }
            }, 500);
        });
        socket.on('webrtc:save', function (message) {
            var view = _this.navCtrl.getActive().name;
            console.log(message, view);
            if (message.status == 1 && self.user._id == message.to._id) {
                if (!self.isCalling && view != 'ChatPage') {
                    self.isCalling = true;
                    prompt = self.alertCtrl.create({
                        title: 'Video Call',
                        message: message.from.mycarespot.Name + " Calling you...",
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                    self.isCalling = false;
                                    self.http.post(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].api.webrtc, {
                                        to: message.from,
                                        status: 3,
                                        from: self.user
                                    }).subscribe(function (res) {
                                        console.log('res', res);
                                    });
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function (data) {
                                    self.isCalling = false;
                                    for (var i = 0; i < self.channels.length; i++) {
                                        for (var j = 0; j < self.channels[i].users.length; j++) {
                                            if (self.channels[i].users[j].userId._id == message.from._id) {
                                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
                                                    channel: self.channels[i],
                                                    isStartCall: message.from
                                                });
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    });
                    prompt.present();
                }
            }
        });
        document.addEventListener("deviceready", function () {
            window.plugins.OneSignal.getIds(function (ids) {
                var token = ids.pushToken;
                var userPush = ids.userId;
                if (userPush != self.user.userPush) {
                    self.user.userPush = userPush;
                }
                self.user.userPush = userPush;
                localStorage.setItem('user', JSON.stringify(self.user));
                console.log('notification', userPush, token);
            });
        });
    }
    HomePage.prototype.switchTab = function (index) {
        this.tabActive = index;
    };
    HomePage.prototype.getBadge = function () {
        var _this = this;
        this.read = 0;
        __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.each(this.channels, function (channel) {
            _this.read += channel.userShow.read;
        });
    };
    HomePage.prototype.openChat = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
            channel: item
        });
    };
    HomePage.prototype.logOut = function () {
        self.http.put(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].api.user + self.user._id, {
            userPush: null
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
        });
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ngOnDestroy = function () {
        socket.removeAllListeners('webrtc:save');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n    </ion-buttons>\n    <ion-title>\n      <div class="horizontal layout center user-info">\n        <div class="home-user flex horizontal layout center">\n          <img src="{{user.mycarespot.profileImage}}" alt="" width="30" height="30" class="user-image">\n          <div class="user-name">{{user.mycarespot.fullName}}</div>\n        </div>\n      </div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear style="padding: 0 5px" (click)="logOut()">\n        <ion-icon name="ios-power" style="font-size: 1.8em;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div style="padding: 10px 0">\n    <div padding class="text-center" *ngIf="isLoading">\n      <ion-spinner></ion-spinner>\n    </div>\n\n    <div class="text-center" padding *ngIf="!this.channels.length && !isLoading">\n      Your don\'t have message!!!\n    </div>\n    <ion-list>\n      <ion-item *ngFor="let item of channels; let i = index; trackBy: index" (click)="openChat(item)" class="item-channel" [ngClass]="{\'active\': item.userShow.read}">\n        <ion-avatar item-start class="image-thumbnail">\n          <img src="{{item.userShow.mycarespot.Image}}">\n          <div class="online-status" *ngIf="i == 0"></div>\n        </ion-avatar>\n        <ion-note item-end class="time-ago">{{item.lastMessageTime | amTimeAgo}}</ion-note>\n        <ion-badge color="danger" class="channel-badge" *ngIf="item.userShow.read">{{item.userShow.read}}</ion-badge>\n\n        <h3>{{item.userShow.mycarespot.Name}}</h3>\n        <p>{{item.lastMessage}}</p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_modal__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(237);
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
        this.doctor = {};
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
        self.user = JSON.parse(localStorage.getItem('user'));
        var channelId = navParams.get('channel')._id;
        self.receiveUser = navParams.get('channel').userShow;
        console.log(navParams.get('channel'));
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.channel + channelId).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.channel = response;
            console.log(_this.channel);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.message, {
                params: {
                    channel: _this.channel._id
                }
            }).map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.isLoading = false;
                _this.messages = response.reverse();
                socket.on('message:save', function (message) {
                    if (message.from._id != self.user._id) {
                        self.messages.push(message);
                        self._ngZone.run(function () {
                            console.log('Outside Done!');
                        });
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
            if (message.status == 2 && self.user._id == message.to._id) {
                self.gotMessageFromServer(message);
            }
            if (message.status == 3 && self.user._id == message.to._id) {
                self.closeCallUser(true);
                self.events.publish('dismiss');
                //self.viewCtrl.dismiss();
            }
            if (message.status == 1 && self.user._id == message.to._id) {
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
            if (message.status == 4 && self.user._id == message.to._id) {
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
        var isCallOpen = navParams.get('isStartCall');
        if (isCallOpen) {
            self.startCallUser(isCallOpen, true);
        }
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
        loader.present();
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
        var loading = this.loadingCtrl.create({
            content: 'Uploading...'
        });
        loading.present();
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
                loading.dismiss();
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
            from: this.user,
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
            fromId: this.user._id
        };
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
        console.log(this.channel);
        var check = false;
        for (var i = 0; i < this.channel.users.length; i++) {
            if (this.channel.users[i].userId._id == this.user._id && this.channel.users[i].read) {
                check = true;
                break;
            }
        }
        if (check) {
            this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.channel + this.channel._id, {
                read: 0,
                user: this.user._id
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
        if (self.platform.is('ios')) {
            self._callVideo({ video: true, audio: true }, isConnecting, self.receiveUser);
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
            // $video.volume = 0;
            // $video.muted = 0;
            // $video.play()
            self._ngZone.run(function () {
                console.log('Outside Done!');
            });
            self.events.publish('stream', {
                localStream: self.localStream,
                user: self.receiveUser
            });
            if (!isConnecting) {
                self.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].url + __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.webrtc, {
                    to: self.receiveUser,
                    status: 1,
                    from: self.user,
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
        if (self.platform.is('ios')) {
            setTimeout(function () {
                cordova.plugins.audioroute.overrideOutput('speaker', function (success) {
                    console.log('success', success);
                    // Success
                }, function (error) {
                    console.log('error', error);
                    // Error
                });
            }, 1000);
        }
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
                from: self.user
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
            selector: 'page-chat',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/'<ion-header id="chat-header">\n  <ion-navbar>\n    <ion-title>\n      <div class="horizontal layout center header-chat">\n        <img src="{{receiveUser.mycarespot.Image}}" alt="">\n        <div class="flex">\n          <div class="user-name">{{receiveUser.mycarespot.Name}}</div>\n          <div class="user-status horizontal layout center"><span class="online-status"></span> Online</div>\n        </div>\n      </div>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="startCallUser(receiveUser, false)">\n        <ion-icon name="ios-videocam" style="font-size: 2.2em;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="chat-content">\n  <div padding class="text-center" *ngIf="isLoading">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div class="messages" (click)="readMessage()" id="messages">\n    <ul class="chat">\n      <li class="chat__bubble" *ngFor="let item of messages; let i = index; trackBy: index" [ngClass]="{\'chat__bubble--rcvd\': item.from._id != user._id, \'chat__bubble--sent\': item.from._id == user._id, \'chat__bubble--stop\': (i == messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from._id, \'no-bg\': item.image || item.pdf || item.video || item.audio || item.voiceMessage}">\n        <div *ngIf="item.from._id != user._id">\n          <img src="{{item.from.avatar}}" alt="" *ngIf="i == (messages.length - 1) || i < messages.length && item.from.userId != messages[i + 1].from.userId" class="message-user-avatar">\n        </div>\n        <div *ngIf="item.text" class="message-text">{{item.text}}</div>\n        <div *ngIf="item.image" class="message-image">\n          <img src="{{item.image}}" alt="" imageViewer>\n        </div>\n\n        <div *ngIf="item.pdf" class="message-pdf">\n          <div class="file-pdf" (click)="openFile(item.pdf)">\n            Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>\n          </div>\n          <!--<a href="{{item.pdf}}" class="file-pdf" target="_blank">Click Open File PDF <ion-icon name="ios-document-outline"></ion-icon>-->\n          <!--</a>-->\n        </div>\n\n        <div *ngIf="item.audio" class="message-audio">\n          <audio controls [src]="item.audio | safe:\'url\'"></audio>\n        </div>\n\n        <div *ngIf="item.video" class="message-video">\n          <video controls [src]="item.video | safe:\'url\'"></video>\n        </div>\n        <!--<div style="width: 100%; min-width: 230px" ng-if="item.audio">-->\n\n        <!--<audio ng-src="{{item.audio | trustUrl}}" controls ></audio>-->\n        <!--</div>-->\n\n        <!--<img ng-src="{{item.sticker}}" alt="" class="img-responsive" ng-if="item.sticker">-->\n\n        <!--<div class="message-time" ng-show="item.showTime || $index == data.messages.length - 1">{{item.createdAt |-->\n        <!--date:\'short\'}}-->\n        <!--</div>-->\n\n      </li>\n\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">What are you up to?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Not much.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">Just writing some CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent">I just LOVE writing CSS.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;sent chat__bubble&#45;&#45;stop">Do you?</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">Yeah!</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd">It\'s super fun.</li>-->\n      <!--<li class="chat__bubble chat__bubble&#45;&#45;rcvd chat__bubble&#45;&#45;stop">... SUPER fun.</li>-->\n    </ul>\n  </div>\n\n</ion-content>\n<ion-footer class="horizontal layout center chat-footer">\n  <input type="file" accept="*" #file\n         style="visibility: hidden; position: fixed; z-index: -99999" (change)="uploadFile($event)">\n  <button clear icon-start ion-button (click)="file.click()" class="first-child">\n    <ion-icon name="ios-add-circle"></ion-icon>\n  </button>\n\n  <button clear icon-start ion-button (click)="presentActionSheet()" class="first-child" *ngIf="platformName == \'ios\'">\n    <ion-icon name="ios-camera"></ion-icon>\n  </button>\n  <input type="text" placeholder="Text message..." class="flex" [(ngModel)]="text">\n  <button clear icon-start ion-button (click)="sendMessage()">\n    <ion-icon name="ios-send"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/chat/chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 403:
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
        var _this = this;
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
            setTimeout(function () {
                _this.videoplayer.nativeElement.volume = 0;
                _this.videoplayer.nativeElement.muted = 0;
                _this.videoplayer.nativeElement.play();
            }, 2000);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoPlayer'),
        __metadata("design:type", Object)
    ], VideoPage.prototype, "videoplayer", void 0);
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Video Call\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button clear item-end style="padding-right: 0" (click)="closeCall()">\n        <ion-icon name="ios-close-circle-outline" style="font-size: 3.2em; color: #fff"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style="overflow: hidden" class="horizontal layout center center-justified">\n  <div *ngIf="!remoteStream && user">\n    Calling {{user.name}}...\n  </div>\n  <div *ngIf="remoteStream"  style="width: 100%; height: 100%">\n    <video [src]="remoteStream.src | safe:\'url\'" autoplay style="width: 100%; height: 100%; object-fit: cover"></video>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="horizontal layout">\n    <div class="flex"></div>\n    <video [src]="localStream.src | safe:\'url\'" muted style="height: 80px; width: auto; margin-bottom: 5px; margin-right: 5px" *ngIf="localStream" id="local-stream" #videoPlayer></video>\n\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/loihoang/workspace/jobs/mycarespot/mycarespot/src/pages/video/modal.html"*/
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(414);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipe__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_video_modal__ = __webpack_require__(403);
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
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
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

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 239,
	"./af.js": 239,
	"./ar": 240,
	"./ar-dz": 241,
	"./ar-dz.js": 241,
	"./ar-kw": 242,
	"./ar-kw.js": 242,
	"./ar-ly": 243,
	"./ar-ly.js": 243,
	"./ar-ma": 244,
	"./ar-ma.js": 244,
	"./ar-sa": 245,
	"./ar-sa.js": 245,
	"./ar-tn": 246,
	"./ar-tn.js": 246,
	"./ar.js": 240,
	"./az": 247,
	"./az.js": 247,
	"./be": 248,
	"./be.js": 248,
	"./bg": 249,
	"./bg.js": 249,
	"./bm": 250,
	"./bm.js": 250,
	"./bn": 251,
	"./bn.js": 251,
	"./bo": 252,
	"./bo.js": 252,
	"./br": 253,
	"./br.js": 253,
	"./bs": 254,
	"./bs.js": 254,
	"./ca": 255,
	"./ca.js": 255,
	"./cs": 256,
	"./cs.js": 256,
	"./cv": 257,
	"./cv.js": 257,
	"./cy": 258,
	"./cy.js": 258,
	"./da": 259,
	"./da.js": 259,
	"./de": 260,
	"./de-at": 261,
	"./de-at.js": 261,
	"./de-ch": 262,
	"./de-ch.js": 262,
	"./de.js": 260,
	"./dv": 263,
	"./dv.js": 263,
	"./el": 264,
	"./el.js": 264,
	"./en-au": 265,
	"./en-au.js": 265,
	"./en-ca": 266,
	"./en-ca.js": 266,
	"./en-gb": 267,
	"./en-gb.js": 267,
	"./en-ie": 268,
	"./en-ie.js": 268,
	"./en-nz": 269,
	"./en-nz.js": 269,
	"./eo": 270,
	"./eo.js": 270,
	"./es": 271,
	"./es-do": 272,
	"./es-do.js": 272,
	"./es-us": 273,
	"./es-us.js": 273,
	"./es.js": 271,
	"./et": 274,
	"./et.js": 274,
	"./eu": 275,
	"./eu.js": 275,
	"./fa": 276,
	"./fa.js": 276,
	"./fi": 277,
	"./fi.js": 277,
	"./fo": 278,
	"./fo.js": 278,
	"./fr": 279,
	"./fr-ca": 280,
	"./fr-ca.js": 280,
	"./fr-ch": 281,
	"./fr-ch.js": 281,
	"./fr.js": 279,
	"./fy": 282,
	"./fy.js": 282,
	"./gd": 283,
	"./gd.js": 283,
	"./gl": 284,
	"./gl.js": 284,
	"./gom-latn": 285,
	"./gom-latn.js": 285,
	"./gu": 286,
	"./gu.js": 286,
	"./he": 287,
	"./he.js": 287,
	"./hi": 288,
	"./hi.js": 288,
	"./hr": 289,
	"./hr.js": 289,
	"./hu": 290,
	"./hu.js": 290,
	"./hy-am": 291,
	"./hy-am.js": 291,
	"./id": 292,
	"./id.js": 292,
	"./is": 293,
	"./is.js": 293,
	"./it": 294,
	"./it.js": 294,
	"./ja": 295,
	"./ja.js": 295,
	"./jv": 296,
	"./jv.js": 296,
	"./ka": 297,
	"./ka.js": 297,
	"./kk": 298,
	"./kk.js": 298,
	"./km": 299,
	"./km.js": 299,
	"./kn": 300,
	"./kn.js": 300,
	"./ko": 301,
	"./ko.js": 301,
	"./ky": 302,
	"./ky.js": 302,
	"./lb": 303,
	"./lb.js": 303,
	"./lo": 304,
	"./lo.js": 304,
	"./lt": 305,
	"./lt.js": 305,
	"./lv": 306,
	"./lv.js": 306,
	"./me": 307,
	"./me.js": 307,
	"./mi": 308,
	"./mi.js": 308,
	"./mk": 309,
	"./mk.js": 309,
	"./ml": 310,
	"./ml.js": 310,
	"./mr": 311,
	"./mr.js": 311,
	"./ms": 312,
	"./ms-my": 313,
	"./ms-my.js": 313,
	"./ms.js": 312,
	"./my": 314,
	"./my.js": 314,
	"./nb": 315,
	"./nb.js": 315,
	"./ne": 316,
	"./ne.js": 316,
	"./nl": 317,
	"./nl-be": 318,
	"./nl-be.js": 318,
	"./nl.js": 317,
	"./nn": 319,
	"./nn.js": 319,
	"./pa-in": 320,
	"./pa-in.js": 320,
	"./pl": 321,
	"./pl.js": 321,
	"./pt": 322,
	"./pt-br": 323,
	"./pt-br.js": 323,
	"./pt.js": 322,
	"./ro": 324,
	"./ro.js": 324,
	"./ru": 325,
	"./ru.js": 325,
	"./sd": 326,
	"./sd.js": 326,
	"./se": 327,
	"./se.js": 327,
	"./si": 328,
	"./si.js": 328,
	"./sk": 329,
	"./sk.js": 329,
	"./sl": 330,
	"./sl.js": 330,
	"./sq": 331,
	"./sq.js": 331,
	"./sr": 332,
	"./sr-cyrl": 333,
	"./sr-cyrl.js": 333,
	"./sr.js": 332,
	"./ss": 334,
	"./ss.js": 334,
	"./sv": 335,
	"./sv.js": 335,
	"./sw": 336,
	"./sw.js": 336,
	"./ta": 337,
	"./ta.js": 337,
	"./te": 338,
	"./te.js": 338,
	"./tet": 339,
	"./tet.js": 339,
	"./th": 340,
	"./th.js": 340,
	"./tl-ph": 341,
	"./tl-ph.js": 341,
	"./tlh": 342,
	"./tlh.js": 342,
	"./tr": 343,
	"./tr.js": 343,
	"./tzl": 344,
	"./tzl.js": 344,
	"./tzm": 345,
	"./tzm-latn": 346,
	"./tzm-latn.js": 346,
	"./tzm.js": 345,
	"./uk": 347,
	"./uk.js": 347,
	"./ur": 348,
	"./ur.js": 348,
	"./uz": 349,
	"./uz-latn": 350,
	"./uz-latn.js": 350,
	"./uz.js": 349,
	"./vi": 351,
	"./vi.js": 351,
	"./x-pseudo": 352,
	"./x-pseudo.js": 352,
	"./yo": 353,
	"./yo.js": 353,
	"./zh-cn": 354,
	"./zh-cn.js": 354,
	"./zh-hk": 355,
	"./zh-hk.js": 355,
	"./zh-tw": 356,
	"./zh-tw.js": 356
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
webpackContext.id = 461;

/***/ }),

/***/ 569:
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

/***/ 587:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function formatChannel(channel, user) {
    console.log('channel', channel);
    var read = 0;
    for (var i = 0; i < channel.users.length; i++) {
        if (channel.users[i].userId._id != user._id) {
            channel.userShow = channel.users[i].userId;
        }
        else {
            read = channel.users[i].read;
        }
    }
    channel.userShow.read = read;
    return channel;
}
/* harmony default export */ __webpack_exports__["a"] = ({
    formatChannel: formatChannel
});
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(136);
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
        //this.rootPage = ChatPage;
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

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    url: 'http://52.224.110.147:3000',
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

/***/ })

},[404]);
//# sourceMappingURL=main.js.map