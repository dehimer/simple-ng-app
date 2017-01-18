"use strict";
var Book = (function () {
    function Book(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Book`.
     */
    Book.getModelName = function () {
        return "Book";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Book for dynamic purposes.
    **/
    Book.factory = function (data) {
        return new Book(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Book.getModelDefinition = function () {
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
        };
    };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=Book.js.map