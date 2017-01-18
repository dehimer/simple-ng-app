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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'simple-app',
            template: "\n      <top-panel></top-panel>\n      <div class='divider'></div>\n      <content>\n        <router-outlet></router-outlet>\n      </content>\n      ",
            styles: [
                "\n      :host {\n        display: flex;\n        flex-direction: column; \n        align-items: stretch;\n        height: 100vh;\n        width: 100vw;\n      }\n\n      top-panel {\n        height: 50px;\n      }\n\n      content {\n        flex: auto;\n        display: flex;\n        align-items: stretch;\n      }\n\n      .divider {\n        height: 2px;\n        width: 100wv;\n        background-color: #333;\n      }\n      "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map