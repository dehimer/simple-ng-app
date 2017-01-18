"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var io_service_1 = require('./io.service');
var search_params_1 = require('./search.params');
var auth_service_1 = require('./auth.service');
var FireLoop_1 = require('../../models/FireLoop');
var socket_connections_1 = require('../../sockets/socket.connections');
var SDKModels_1 = require('../custom/SDKModels');
var Subject_1 = require('rxjs/Subject');
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = (function () {
    function RealTime(connection, models, auth, searchParams) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.connecting = false;
        this.onReadySubject = new Subject_1.Subject();
        this.sharedOnReady = this.onReadySubject.asObservable().share();
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @description
    * Will trigger when Real-Time Service is not authorized from server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @description
    * Will trigger when Real-Time Service is not authorized from server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        if (this.connection.isConnected()) {
            // Send back to the event loop so it executes after subscription
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next();
                clearTimeout(to_1);
            });
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next();
                    clearInterval(ti_1);
                }
            }, 500);
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new io_service_1.IO(this.connection);
            this.FireLoop = new FireLoop_1.FireLoop(this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(socket_connections_1.SocketConnection)),
        __param(1, core_1.Inject(SDKModels_1.SDKModels)),
        __param(2, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(3, core_1.Inject(search_params_1.JSONSearchParams)), 
        __metadata('design:paramtypes', [socket_connections_1.SocketConnection, SDKModels_1.SDKModels, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams])
    ], RealTime);
    return RealTime;
}());
exports.RealTime = RealTime;
//# sourceMappingURL=real.time.js.map