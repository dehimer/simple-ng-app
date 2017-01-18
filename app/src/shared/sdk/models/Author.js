"use strict";
var Author = (function () {
    function Author(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Author`.
     */
    Author.getModelName = function () {
        return "Author";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Author for dynamic purposes.
    **/
    Author.factory = function (data) {
        return new Author(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Author.getModelDefinition = function () {
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
        };
    };
    return Author;
}());
exports.Author = Author;
//# sourceMappingURL=Author.js.map