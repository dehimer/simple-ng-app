import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { SDKBrowserModule } from '../shared/sdk/index'; 

import { AppComponent }   from './app/app.component';
import { TopPanelComponent }   from './top-panel/top-panel.component';
import { ContentComponent }   from './content/content.component';

import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent }   from './button/button.component';

import { HomeComponent }   from './home/home.component';
import { LibraryComponent }   from './library/library.component';
import { AboutComponent }   from './about/about.component';
import { NotFoundComponent }   from './not-found/not-found.component';

import { AuthorsComponent }   from './authors/authors.component';
import { RoomsComponent }   from './rooms/rooms.component';

import { BooksComponent }   from './books/books.component';

const booksRoutes: Routes =[
	{ path: ':authorid', component: BooksComponent}
];

const libraryRoutes: Routes =[
	{ path: 'books', component: AuthorsComponent, children: booksRoutes},
  { path: 'rooms', component: RoomsComponent}
];

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'library', component: LibraryComponent, children: libraryRoutes},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, SDKBrowserModule.forRoot() ],
    declarations: [ AppComponent, HomeComponent, LibraryComponent, AboutComponent, NotFoundComponent, TopPanelComponent, ContentComponent, ButtonComponent, AuthorsComponent, RoomsComponent, BooksComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }