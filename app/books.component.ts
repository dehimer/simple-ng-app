import { Component} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Author } from './author';

@Component({
  selector: 'books',
  template: `
    <div class='leftbar'>
      <div *ngFor="let author of authors" class='author'>
        <a [routerLink]="[author?.id]">{{author?.name}}</a>
      </div>
    </div>
    <div class='rightbar'>
      <router-outlet></router-outlet>
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
        display: flex;
        flex-direction: column;
        overflow-y: auto;
      }

      .rightbar {
        flex: 3;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
      }

      .author {
        flex-basis: 20px;
        content-align: center;
        padding: 10px;
        background-color: #ccc;
        margin: 5px;
        border-radius: 5px;
      }
    `
  ],
  providers: [HttpService]
})
export class BooksComponent {
  authors: Author[] = [];
  constructor(private httpService: HttpService){}
  ngOnInit(){
    this.httpService.getData()
      .subscribe((resp: Response) => {
          let data = resp.json();
          this.authors = data.authors;
      });
  }
}