/* tslint:disable */
import {
  Author
} from '../index';

declare var Object: any;
export interface BookInterface {
  name: string;
  id?: number;
  authorId?: number;
  author?: Author;
}

export class Book implements BookInterface {
  name: string;
  id: number;
  authorId: number;
  author: Author;
  constructor(data?: BookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Book`.
   */
  public static getModelName() {
    return "Book";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Book for dynamic purposes.
  **/
  public static factory(data: BookInterface): Book{
    return new Book(data);
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
      name: 'Book',
      plural: 'books',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        authorId: {
          name: 'authorId',
          type: 'number'
        },
      },
      relations: {
        author: {
          name: 'author',
          type: 'Author',
          model: 'Author'
        },
      }
    }
  }
}
