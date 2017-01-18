import { Component} from '@angular/core';
import { Author } from '../../shared/sdk/models';
import { AuthorApi } from '../../shared/sdk/services/index';

@Component({
  moduleId: module.id,
  selector: 'authors',
  styleUrls: [ './authors.component.css' ],
  templateUrl: './authors.component.html'
})
export class AuthorsComponent {
  authors: Author[] = [];
  constructor(private authorApi: AuthorApi){}
  ngOnInit(){
    this.authorApi.find()
      .subscribe((authors: Author[]) => {
        this.authors = authors;
      });
  }
}