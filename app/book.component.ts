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
export class BookComponent {
  books: Book[] = [];
  private authorid: number;
  private subscription: Subscription;
  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute){
      this.subscription = activateRoute.params.subscribe(params=>this.authorid=params['authorid']);
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
  updateList(){
    this.httpService.getData()
      .subscribe((resp: Response) => {
          let data = resp.json();
          console.log(data)
          this.books = data.books.filter(book => {
            console.log(book.authorid+':'+this.authorid);
            return +book.author === +this.authorid;
          });
      });
  }
  ngOnInit(){
    this.updateList();
  }
  ngDoCheck(){
    this.updateList();
  }
}