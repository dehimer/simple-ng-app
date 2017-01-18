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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_service_1 = require('./http.service');
var BookComponent = (function () {
    function BookComponent(httpService, activateRoute) {
        var _this = this;
        this.httpService = httpService;
        this.activateRoute = activateRoute;
        this.books = [];
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.authorid = params['authorid'];
            _this.updateList();
        });
    }
    BookComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BookComponent.prototype.updateList = function () {
        var _this = this;
        this.httpService.getData()
            .subscribe(function (resp) {
            var data = resp.json();
            _this.books = data.books.filter(function (book) {
                return +book.author === +_this.authorid;
            });
        });
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book',
            template: "\n    <div *ngFor=\"let book of books\" class='book'>\n      {{book?.name}}\n    </div>\n  ",
            styles: [
                "\n      :host {\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        overflow-y: auto;\n      }\n\n      .book {\n        flex: auto;\n        background-color: #ccc;\n        border-radius: 5px;\n        padding: 10px;\n        margin: 5px;\n      }\n\n    "
            ],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.ActivatedRoute])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map