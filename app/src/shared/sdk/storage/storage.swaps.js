"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var Storage = (function () {
    function Storage() {
    }
    Storage.prototype.get = function (key) { };
    Storage.prototype.set = function (key, value) { };
    Storage.prototype.remove = function (key) { };
    return Storage;
}());
exports.Storage = Storage;
/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        _super.apply(this, arguments);
    }
    return InternalStorage;
}(Storage));
exports.InternalStorage = InternalStorage;
/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        _super.apply(this, arguments);
    }
    return SDKStorage;
}(Storage));
exports.SDKStorage = SDKStorage;
//# sourceMappingURL=storage.swaps.js.map