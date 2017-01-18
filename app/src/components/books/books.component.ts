import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../../shared/sdk/models';
import { BookApi } from '../../shared/sdk/services/index';

@Component({
  moduleId: module.id,
  selector: 'books',
  styleUrls: [ './books.component.css' ],
  templateUrl: './books.component.html'
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