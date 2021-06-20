class Library {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.books = [];
    }
    addABook(book) {
        this.books.add({"book": book, isBorrowed: false});
    }
    removeBook(book) {
        this.books.forEach(element => {
            if(element.book.equal(book))
            {
                this.books.remove(element);
                return;
            }
        })
    }
    borrowBook(book) {
        this.books.forEach(element => {
            if(element.book.equal(book))
            {
                if(!element.isBorrowed)
                {
                    element.isBorrowed = true;
                    return element.book;
                }
            }
        })
    }
    giveBackBook(book) {
        this.books.forEach(element => {
            if(element.book.equal(book))
            {
                element.isBorrowed = false;
            }
        })
    }
    loadBooks(books) {
        books.forEach(element => {
            this.books.addABook(element);
        })
    }
    getAllBooks() {
        let temp = [];
        this.books.forEach(element => {
            temp.push(element.book);
        })
        return temp;
    }
}