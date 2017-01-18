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
/* tslint:disable */
var core_1 = require('@angular/core');
var socket_driver_1 = require('./socket.driver');
var Subject_1 = require('rxjs/Subject');
var lb_config_1 = require('../lb.config');
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web and NativeScript 2.
**/
var SocketConnection = (function () {
    /**
     * @method constructor
     * @param driver
     * @param zone
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new Subject_1.Subject(),
            onDisconnect: new Subject_1.Subject(),
            onAuthenticated: new Subject_1.Subject(),
            onUnAuthorized: new Subject_1.Subject()
        };
        this.sharedObservables = {};
        this.unauthenticated = true;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().share(),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().share(),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().share(),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().share()
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param url string
     * @param token AccessToken
     * @description
     * This method will return a socket socket connection
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', lb_config_1.LoopBackConfig.getPath());
            // Create new socket connection
            this.socket = this.driver.connect(lb_config_1.LoopBackConfig.getPath(), {
                log: false,
                secure: false,
                forceNew: true,
                forceWebsockets: true
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            this.socket.off();
            this.socket.destroy();
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     **/
    SocketConnection.prototype.emit = function (event, data) {
        this.socket.emit(event, data);
    };
    /**
     * @method removeListener
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        this.socket.off(event, handler);
    };
    /**
     * @method disconnect
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.socket && _this.socket.connected) {
                _this.socket.emit('lb-ping');
            }
            else {
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(socket_driver_1.SocketDriver)),
        __param(1, core_1.Inject(core_1.NgZone)), 
        __metadata('design:paramtypes', [socket_driver_1.SocketDriver, core_1.NgZone])
    ], SocketConnection);
    return SocketConnection;
}());
exports.SocketConnection = SocketConnection;
//# sourceMappingURL=socket.connections.js.map