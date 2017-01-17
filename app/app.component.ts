import { Component } from '@angular/core';

import { TopPanelComponent }   from './top-panel.component';
import { ContentComponent }   from './content.component';

@Component({
    selector: 'simple-app',
    template: `
      <top-panel></top-panel>
      <div class='divider'></div>
      <content>
        <router-outlet></router-outlet>
      </content>
      `,
    styles: [
      `
      :host {
        display: flex;
        flex-direction: column; 
        align-items: stretch;
        height: 100vh;
        width: 100vw;
      }

      top-panel {
        height: 50px;
      }

      content {
        flex: auto;
        display: flex;
        align-items: stretch;
      }

      .divider {
        height: 2px;
        width: 100wv;
        background-color: #333;
      }
      `
    ]
})
export class AppComponent {}