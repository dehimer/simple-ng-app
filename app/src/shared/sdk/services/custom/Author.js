"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var SDKModels_1 = require('./SDKModels');
var base_service_1 = require('../core/base.service');
var lb_config_1 = require('../../lb.config');
var auth_service_1 = require('../core/auth.service');
var search_params_1 = require('../core/search.params');
var error_service_1 = require('../core/error.service');
var socket_connections_1 = require('../../sockets/socket.connections');
/**
 * Api services for the `Author` model.
 */
var AuthorApi = (function (_super) {
    __extends(AuthorApi, _super);
    function AuthorApi(http, connection, models, auth, searchParams, errorHandler) {
        _super.call(this, http, connection, models, auth, searchParams, errorHandler);
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
    }
    /**
     * Find a related item by id for books.
     *
     * @param any id Author id
     *
     * @param object options1
     *
     * @param any fk Foreign key for books
     *
     * @param object options
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.findByIdBooks = function (id, options1, fk, options) {
        if (options1 === void 0) { options1 = {}; }
        if (options === void 0) { options = {}; }
        var _method = "GET";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Delete a related item by id for books.
     *
     * @param any id Author id
     *
     * @param object options1
     *
     * @param any fk Foreign key for books
     *
     * @param object options
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    AuthorApi.prototype.destroyByIdBooks = function (id, options1, fk, options) {
        if (options1 === void 0) { options1 = {}; }
        if (options === void 0) { options = {}; }
        var _method = "DELETE";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Update a related item by id for books.
     *
     * @param any id Author id
     *
     * @param any fk Foreign key for books
     *
     * @param object data Request data.
     *
     *  - `options1` – `{object}` -
     *
     *  - `data` – `{object}` -
     *
     *  - `options` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.updateByIdBooks = function (id, options1, fk, data, options) {
        if (options1 === void 0) { options1 = {}; }
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = {}; }
        var _method = "PUT";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Queries books of Author.
     *
     * @param any id Author id
     *
     * @param object options1
     *
     * @param object filter
     *
     * @param object options
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.getBooks = function (id, options1, filter, options) {
        if (options1 === void 0) { options1 = {}; }
        if (filter === void 0) { filter = {}; }
        if (options === void 0) { options = {}; }
        var _method = "GET";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Creates a new instance in books of this model.
     *
     * @param any id Author id
     *
     * @param object data Request data.
     *
     *  - `options1` – `{object}` -
     *
     *  - `data` – `{object}` -
     *
     *  - `options` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.createBooks = function (id, options1, data, options) {
        if (options1 === void 0) { options1 = {}; }
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = {}; }
        var _method = "POST";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Deletes all books of this model.
     *
     * @param any id Author id
     *
     * @param object options1
     *
     * @param object where
     *
     * @param object options
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    AuthorApi.prototype.deleteBooks = function (id, options1, where, options) {
        if (options1 === void 0) { options1 = {}; }
        if (where === void 0) { where = {}; }
        if (options === void 0) { options = {}; }
        var _method = "DELETE";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Counts books of Author.
     *
     * @param any id Author id
     *
     * @param object options1
     *
     * @param object where Criteria to match model instances
     *
     * @param object options
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    AuthorApi.prototype.countBooks = function (id, options1, where, options) {
        if (options1 === void 0) { options1 = {}; }
        if (where === void 0) { where = {}; }
        if (options === void 0) { options = {}; }
        var _method = "GET";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param object data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     *  - `options` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.patchOrCreate = function (data, options) {
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = {}; }
        var _method = "PATCH";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param any id Author id
     *
     * @param object data Request data.
     *
     *  - `options1` – `{object}` -
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     *  - `options` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.patchAttributes = function (id, options1, data, options) {
        if (options1 === void 0) { options1 = {}; }
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = {}; }
        var _method = "PATCH";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * Creates a new instance in books of this model.
     *
     * @param any id Author id
     *
     * @param object data Request data.
     *
     *  - `options1` – `{object}` -
     *
     *  - `data` – `{object}` -
     *
     *  - `options` – `{object}` -
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Author` object.)
     * </em>
     */
    AuthorApi.prototype.createManyBooks = function (id, options1, data, options) {
        if (options1 === void 0) { options1 = {}; }
        if (data === void 0) { data = []; }
        if (options === void 0) { options = {}; }
        var _method = "POST";
        var _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/authors/:id/books";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Author`.
     */
    AuthorApi.prototype.getModelName = function () {
        return "Author";
    };
    AuthorApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(socket_connections_1.SocketConnection)),
        __param(2, core_1.Inject(SDKModels_1.SDKModels)),
        __param(3, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(4, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(5, core_1.Optional()),
        __param(5, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, socket_connections_1.SocketConnection, SDKModels_1.SDKModels, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], AuthorApi);
    return AuthorApi;
}(base_service_1.BaseLoopBackApi));
exports.AuthorApi = AuthorApi;
//# sourceMappingURL=Author.js.map