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
var LibraryComponent = (function () {
    function LibraryComponent() {
    }
    LibraryComponent = __decorate([
        core_1.Component({
            selector: 'library-app',
            template: "\n    \t<div class='panel'>\n\t    \t<button>\n\t        <a routerLink=\"rooms\" routerLinkActive=\"active\">\n\t          \u041A\u043E\u043C\u043D\u0430\u0442\u044B\n\t        </a>\n\t      </button>\n\t      <button>\n\t        <a routerLink=\"books\" routerLinkActive=\"active\">\n\t          \u041A\u043D\u0438\u0433\u0438\n\t        </a>\n\t      </button>\n\t    </div>\n\t    <div class='content'>\n      \t<router-outlet></router-outlet>\n\t    </div>\n    ",
            styles: [
                "\n      :host {\n        display: flex;\n        align-items: stretch;\n        flex-direction: column;\n      }\n\n      .panel {\n      \tdisplay: flex;\n        justify-content: flex-end;\n        align-items: stretch;\n        height: 40px;\n        width: 100vw;\n        background-color: #aaa;\n      }\n\n      .content {\n      \tflex: auto;\n      \tdisplay: flex;\n      \twidth: 100vw;\n      }\n\n      a {\n        color: white;\n        text-decoration: none;\n      }\n\n      a.active {\n        color: red;\n      }\n      "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=library.component.js.map