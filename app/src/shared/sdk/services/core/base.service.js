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
var http_1 = require('@angular/http');
var search_params_1 = require('./search.params');
var error_service_1 = require('./error.service');
var auth_service_1 = require('./auth.service');
var lb_config_1 = require('../../lb.config');
var SDKModels_1 = require('../custom/SDKModels');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var socket_connections_1 = require('../../sockets/socket.connections');
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = (function () {
    function BaseLoopBackApi(http, connection, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * Process request
     * @param string  method      Request method (GET, POST, PUT)
     * @param string  url         Request url (my-host/my-url/:id)
     * @param any     routeParams Values of url parameters
     * @param any     urlParams   Parameters for building url (filter and other)
     * @param any     postBody    Request postBody
     * @param boolean isio        Request socket connection (When IO is enabled)
     */
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        // Headers to be sent
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // Authenticate request
        this.authenticate(url, headers);
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        // Body fix for built in remote methods using "data", "options" or "credentials
        // that are the actual body, Custom remote method properties are different and need
        // to be wrapped into a body object
        var body;
        var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
        if (postBodyKeys.length === 1) {
            body = postBody[postBodyKeys[0]];
        }
        else {
            body = postBody;
        }
        // Separate filter object from url params and add to search query
        if (urlParams.filter) {
            headers.append('filter', JSON.stringify(urlParams.filter));
            delete urlParams.filter;
        }
        this.searchParams.setJSON(urlParams);
        var request = new http_1.Request({
            headers: headers,
            method: method,
            url: url,
            search: Object.keys(urlParams).length > 0
                ? this.searchParams.getURLSearchParams() : null,
            body: body ? JSON.stringify(body) : undefined
        });
        return this.http.request(request)
            .map(function (res) { return (res.text() != "" ? res.json() : {}); })
            .catch(function (e) { return _this.errorHandler.handleError(e); });
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', lb_config_1.LoopBackConfig.getAuthPrefix() + this.auth.getAccessTokenId());
        }
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.createMany = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, undefined, { data: data })
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, { filter: filter }, undefined)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id) {
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'update'
        ].join('/'), undefined, _urlParams, { data: data })
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id: id }, undefined, undefined).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'count'
        ].join('/'), undefined, _urlParams, undefined);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('PUT', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new Subject_1.Subject();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                lb_config_1.LoopBackConfig.getPath(),
                lb_config_1.LoopBackConfig.getApiVersion(),
                this.model.getModelDefinition().plural,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(socket_connections_1.SocketConnection)),
        __param(2, core_1.Inject(SDKModels_1.SDKModels)),
        __param(3, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(4, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(5, core_1.Optional()),
        __param(5, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, socket_connections_1.SocketConnection, SDKModels_1.SDKModels, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());
exports.BaseLoopBackApi = BaseLoopBackApi;
//# sourceMappingURL=base.service.js.map