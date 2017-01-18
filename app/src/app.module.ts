import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { AppComponent }   from './app.component';
import { TopPanelComponent }   from './top-panel.component';
import { ContentComponent }   from './content.component';

import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent }   from './button.component';

import { HomeComponent }   from './home.component';
import { LibraryComponent }   from './library.component';
import { AboutComponent }   from './about.component';
import { NotFoundComponent }   from './not-found.component';

import { AuthorsComponent }   from './authors.component';
import { RoomsComponent }   from './rooms.component';

import { BookComponent }   from './book.component';

const bookRoutes: Routes =[
	{ path: ':authorid', component: BookComponent}
];

const libraryRoutes: Routes =[
	{ path: 'books', component: AuthorsComponent, children: bookRoutes},
  { path: 'rooms', component: RoomsComponent}
];

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'library', component: LibraryComponent, children: libraryRoutes},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule ],
    declarations: [ AppComponent, HomeComponent, LibraryComponent, AboutComponent, NotFoundComponent, TopPanelComponent, ContentComponent, ButtonComponent, AuthorsComponent, RoomsComponent, BookComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }