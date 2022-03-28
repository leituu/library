function Book(name, author, pages, read = false) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    return {bookName: this.name, bookAuthor: this.author, bookPages: this.pages, bookRead: this.read}
}

export { Book };