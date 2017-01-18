/* tslint:disable */
import {
  Book
} from '../index';

declare var Object: any;
export interface AuthorInterface {
  name: string;
  id?: number;
  books?: Array<Book>;
}

export class Author implements AuthorInterface {
  name: string;
  id: number;
  books: Array<Book>;
  constructor(data?: AuthorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Author`.
   */
  public static getModelName() {
    return "Author";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Author for dynamic purposes.
  **/
  public static factory(data: AuthorInterface): Author{
    return new Author(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Author',
      plural: 'authors',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        books: {
          name: 'books',
          type: 'Array<Book>',
          model: 'Book'
        },
      }
    }
  }
}
