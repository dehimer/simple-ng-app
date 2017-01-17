import { Component} from '@angular/core';

@Component({
  selector: 'books',
  template: `
    <div class='leftbar'>
      Authors
    </div>
    <div class='rightbar'>
      Books
    </div>  
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: stretch;
        width: 100vw;
      }

      .leftbar {
        flex: auto;
        background-color: red;
      }

      .rightbar {
        flex: 3;
        background-color: blue;
      }
    `
  ]
})
export class BooksComponent { }