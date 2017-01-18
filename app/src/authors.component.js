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
var http_service_1 = require('./http.service');
var AuthorsComponent = (function () {
    function AuthorsComponent(httpService) {
        this.httpService = httpService;
        this.authors = [];
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData()
            .subscribe(function (resp) {
            var data = resp.json();
            _this.authors = data.authors;
        });
    };
    AuthorsComponent = __decorate([
        core_1.Component({
            selector: 'authors',
            template: "\n    <div class='leftbar'>\n      <div *ngFor=\"let author of authors\" class='author'>\n        <a [routerLink]=\"[author?.id]\" routerLinkActive=\"active\">\n          {{author?.name}}\n        </a>\n      </div>\n    </div>\n    <div class='rightbar'>\n      <router-outlet></router-outlet>\n    </div>  \n  ",
            styles: [
                "\n      :host {\n        display: flex;\n        align-items: stretch;\n        width: 100vw;\n      }\n\n      .leftbar {\n        flex: auto;\n        display: flex;\n        flex-direction: column;\n        overflow-y: auto;\n      }\n\n      .rightbar {\n        flex: 3;\n        display: flex;\n        flex-direction: column;\n        overflow-y: auto;\n      }\n\n      .author {\n        flex-basis: 20px;\n        content-align: center;\n        padding: 10px;\n        background-color: #ccc;\n        margin: 5px;\n        border-radius: 5px;\n      }\n\n      a {\n        color: white;\n        text-decoration: none;\n      }\n\n      a.active {\n        color: red;\n      }\n    "
            ],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authors.component.js.map