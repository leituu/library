class Book {
  constructor(name, author, pages, read = false) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read;
  }
}

export { Book };
