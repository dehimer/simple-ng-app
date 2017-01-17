import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Book } from './book';

@Component({
  selector: 'book',
  template: `
    <div *ngFor="let book of books" class='book'>
      {{book?.name}}
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        overflow-y: auto;
      }

      .book {
        flex: auto;
        background-color: #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
      }

    `
  ],
  providers: [HttpService]
})
export class BookComponent {
  books: Book[] = [];
  private authorid: number;
  private subscription: Subscription;
  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute){
      this.subscription = activateRoute.params.subscribe(params=>{
        this.authorid=params['authorid'];
        this.updateList();
      });
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
  updateList(){
    this.httpService.getData()
      .subscribe((resp: Response) => {
          let data = resp.json();
          this.books = data.books.filter(book => {
            return +book.author === +this.authorid;
          });
      });
  }
}