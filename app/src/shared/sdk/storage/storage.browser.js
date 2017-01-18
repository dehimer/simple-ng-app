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
/* tslint:disable */
var core_1 = require('@angular/core');
/**
* @module StorageBrowser
* @author Jonathan Casarrubias
* @license MIT
* @description
* Stand-alone cookie service for browsers
**/
var StorageBrowser = (function () {
    function StorageBrowser() {
    }
    StorageBrowser.prototype.set = function (key, value) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.isJSON(data) ? JSON.parse(data) : data;
    };
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    StorageBrowser.prototype.isJSON = function (data) {
        try {
            JSON.parse(data);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    StorageBrowser = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StorageBrowser);
    return StorageBrowser;
}());
exports.StorageBrowser = StorageBrowser;
//# sourceMappingURL=storage.browser.js.map