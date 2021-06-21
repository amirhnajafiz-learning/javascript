import Library from "./Library"
import Book from "./Book"

const faker = require('faker');
const lib = new Library(faker.name.findName(), faker.local)

let listOfBooks = [];

for(let i = 0; i < 100; i++)
{
    listOfBooks.push(new Book(faker.name.findName(), faker.name.findName(), new Date(), faker.number()));
}

lib.loadBooks(listOfBooks);

