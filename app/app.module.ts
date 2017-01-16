import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TopPanelComponent }   from './top-panel.component';
import { ContentComponent }   from './content.component';

import { ButtonComponent }   from './button.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, TopPanelComponent, ContentComponent, ButtonComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }