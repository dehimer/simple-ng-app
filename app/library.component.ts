import { Component} from '@angular/core';
import { ButtonComponent }   from './button.component';

@Component({
    selector: 'library-app',
    template: `
    	<div class='panel'>
	    	<button>
	        <a routerLink="rooms">
	          Комнаты
	        </a>
	      </button>
	      <button>
	        <a routerLink="books">
	          Книги
	        </a>
	      </button>
	    </div>
	    <div class='content'>
      	<router-outlet></router-outlet>
	    </div>
    `,
    styles: [
      `
      :host {
        display: flex;
        align-items: stretch;
        flex-direction: column;
      }

      .panel {
      	display: flex;
        justify-content: flex-end;
        align-items: stretch;
        height: 40px;
        width: 100vw;
        background-color: #aaa;
      }

      .content {
      	flex: auto;
      	display: flex;
      	width: 100vw;
      }
      `
    ]
})
export class LibraryComponent { }