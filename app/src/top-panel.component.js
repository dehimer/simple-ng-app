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
var TopPanelComponent = (function () {
    function TopPanelComponent() {
    }
    TopPanelComponent = __decorate([
        core_1.Component({
            selector: 'top-panel',
            template: "\n      <button>\n        <a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          \u0413\u043B\u0430\u0432\u043D\u0430\u044F\n        </a>\n      </button>\n      <button>\n        <a routerLink=\"/library\" routerLinkActive=\"active\">\n          \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\n        </a>\n      </button>\n      <button>\n        <a routerLink=\"/about\" routerLinkActive=\"active\">\n          \u041E \u0441\u0430\u0439\u0442\u0435\n        </a>\n      </button>\n    ",
            styles: [
                "\n      :host {\n        display: flex;\n        justify-content: flex-end;\n        align-items: stretch;\n        height: 40px;\n        width: 100vw;\n        background-color: #555;\n      }\n\n      a {\n        color: white;\n        text-decoration: none;\n      }\n\n      a.active {\n        color: red;\n      }\n      "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TopPanelComponent);
    return TopPanelComponent;
}());
exports.TopPanelComponent = TopPanelComponent;
//# sourceMappingURL=top-panel.component.js.map