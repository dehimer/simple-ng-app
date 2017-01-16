import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TopPanelComponent }   from './top-panel.component';
import { ContentComponent }   from './content.component';

import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent }   from './button.component';

import { HomeComponent }   from './home.component';
import { LibraryComponent }   from './library.component';
import { AboutComponent }   from './about.component';
import { NotFoundComponent }   from './not-found.component';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'library', component: LibraryComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HomeComponent, LibraryComponent, AboutComponent, NotFoundComponent, TopPanelComponent, ContentComponent, ButtonComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }