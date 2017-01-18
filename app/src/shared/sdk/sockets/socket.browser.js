"use strict";
/* tslint:disable */
var io = require('socket.io-client');
var SocketBrowser = (function () {
    function SocketBrowser() {
    }
    SocketBrowser.prototype.connect = function (url, options) {
        return io(url, options);
    };
    return SocketBrowser;
}());
exports.SocketBrowser = SocketBrowser;
//# sourceMappingURL=socket.browser.js.map