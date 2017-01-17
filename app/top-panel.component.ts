import { Component } from '@angular/core';

import { ButtonComponent }   from './button.component';

@Component({
    selector: 'top-panel',
    template: `
      <button>
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
          Главная
        </a>
      </button>
      <button>
        <a routerLink="/library" routerLinkActive="active">
          Библиотека
        </a>
      </button>
      <button>
        <a routerLink="/about" routerLinkActive="active">
          О сайте
        </a>
      </button>
    `,
    styles: [
      `
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
        height: 40px;
        width: 100vw;
        background-color: #555;
      }

      a {
        color: white;
        text-decoration: none;
      }

      a.active {
        color: red;
      }
      `
    ]
})
export class TopPanelComponent {}