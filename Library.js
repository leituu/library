class Library {
  constructor() {
    if (localStorage.getItem("library") === null) {
      this.books = [];
      localStorage.setItem("library", JSON.stringify(this.books));
    } else {
      this.books = JSON.parse(localStorage.getItem("library"));
    }
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem("library", JSON.stringify(this.books));
  }

  removeBook(idx) {
    this.books.splice(idx, 1);
    localStorage.setItem("library", JSON.stringify(this.books));
  }

  updateBook(idx) {
    if (this.books[idx].bookRead) {
      this.books[idx].bookRead = false;
    } else {
      this.books[idx].bookRead = true;
    }
  }
}

export { Library };
