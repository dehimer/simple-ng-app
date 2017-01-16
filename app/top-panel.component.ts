import { Component } from '@angular/core';

import { ButtonComponent }   from './button.component';

@Component({
    selector: 'top-panel',
    template: `
      <button>
        <a routerLink="">
          Главная
        </a>
      </button>
      <button>
        <a routerLink="/library">
          Библиотека
        </a>
      </button>
      <button>
        <a routerLink="/about">
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
      `
    ]
})
export class TopPanelComponent {}