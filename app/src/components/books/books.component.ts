import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../../shared/sdk/models';
import { BookApi } from '../../shared/sdk/services/index';

@Component({
  selector: 'books',
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
  ]
})
export class BooksComponent {
  books: Book[] = [];
  private authorid: number;
  private subscription: Subscription;
  constructor(private bookApi: BookApi, private activateRoute: ActivatedRoute){
      this.subscription = activateRoute.params.subscribe(params=>{
        this.authorid=params['authorid'];
        this.updateList();
      });
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
  updateList(){
    this.bookApi.find()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }
}