import { UI } from './UI.js';
import { Library } from './Library.js';
import { Book } from './Book.js';

let library = new Library();
let libraryUI = new UI();

// button add new book
const addBookBtn = document.querySelector('#openForm');
const addBookFormBtn = document.querySelector('#addBook');
const closeFormBtn = document.querySelector('.close-btn')

document.addEventListener("DOMContentLoaded", () => {
    libraryUI.renderBooks(library.books);
})

addBookBtn.addEventListener('click', function () {
    libraryUI.showForm();
});

closeFormBtn.addEventListener('click', ()=> {
    libraryUI.showForm();
})

addBookFormBtn.addEventListener('click', function () {
    let bookName = document.querySelector('#bookName').value;
    let bookAuthor = document.querySelector('#bookAuthor').value;
    let bookPages = document.querySelector('#bookPages').value;
    let bookRead = document.querySelector('#bookRead').checked;
    let book = new Book(bookName, bookAuthor, bookPages, bookRead);

    libraryUI.addBook(book, library);
    library.addBook(book);
    libraryUI.showForm();
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        let book = e.target.parentElement.parentElement;
        libraryUI.removeBook(book);
        library.removeBook(book.getAttribute('data-index'));
    }

})  

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-mark')) {
        let book = e.target.parentElement.parentElement;
        let status = e.target;
        libraryUI.updateBook(status);
        library.updateBook(book.getAttribute('data-index'));
    }
})

export { library }