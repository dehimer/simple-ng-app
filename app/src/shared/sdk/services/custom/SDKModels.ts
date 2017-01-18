/* tslint:disable */
import { Injectable } from '@angular/core';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';

interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Author: Author,
    Book: Book,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
