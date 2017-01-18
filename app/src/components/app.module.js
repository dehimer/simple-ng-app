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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var index_1 = require('../shared/sdk/index');
var app_component_1 = require('./app/app.component');
var top_panel_component_1 = require('./top-panel/top-panel.component');
var content_component_1 = require('./content/content.component');
var router_1 = require('@angular/router');
var button_component_1 = require('./button/button.component');
var home_component_1 = require('./home/home.component');
var library_component_1 = require('./library/library.component');
var about_component_1 = require('./about/about.component');
var not_found_component_1 = require('./not-found/not-found.component');
var authors_component_1 = require('./authors/authors.component');
var rooms_component_1 = require('./rooms/rooms.component');
var books_component_1 = require('./books/books.component');
var booksRoutes = [
    { path: ':authorid', component: books_component_1.BooksComponent }
];
var libraryRoutes = [
    { path: 'books', component: authors_component_1.AuthorsComponent, children: booksRoutes },
    { path: 'rooms', component: rooms_component_1.RoomsComponent }
];
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'library', component: library_component_1.LibraryComponent, children: libraryRoutes },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, index_1.SDKBrowserModule.forRoot()],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, library_component_1.LibraryComponent, about_component_1.AboutComponent, not_found_component_1.NotFoundComponent, top_panel_component_1.TopPanelComponent, content_component_1.ContentComponent, button_component_1.ButtonComponent, authors_component_1.AuthorsComponent, rooms_component_1.RoomsComponent, books_component_1.BooksComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map