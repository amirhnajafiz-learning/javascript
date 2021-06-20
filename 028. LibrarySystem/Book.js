class Book
{
    constructor(title, author, publishDate, rate)
    {
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.rate = rate;
    }
    portableFormat()
    {
        return {'title': this.title, 'author': this.author, 'publishDate': this.publishDate, 'rate': this.rate};
    }
}