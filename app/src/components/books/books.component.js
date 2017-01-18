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
var index_1 = require('../../shared/sdk/services/index');
var BooksComponent = (function () {
    function BooksComponent(bookApi, activateRoute) {
        var _this = this;
        this.bookApi = bookApi;
        this.activateRoute = activateRoute;
        this.books = [];
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.authorid = params['authorid'];
            _this.updateList();
        });
    }
    BooksComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BooksComponent.prototype.updateList = function () {
        var _this = this;
        this.bookApi.find()
            .subscribe(function (books) {
            _this.books = books;
        });
    };
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books',
            template: "\n    <div *ngFor=\"let book of books\" class='book'>\n      {{book?.name}}\n    </div>\n  ",
            styles: [
                "\n      :host {\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        overflow-y: auto;\n      }\n\n      .book {\n        flex: auto;\n        background-color: #ccc;\n        border-radius: 5px;\n        padding: 10px;\n        margin: 5px;\n      }\n\n    "
            ]
        }), 
        __metadata('design:paramtypes', [index_1.BookApi, router_1.ActivatedRoute])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map