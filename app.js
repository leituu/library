function Book(name, author, pages, read = false) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    return {"bookName": this.name
        , "bookAuthor": this.author
        , "bookPages": this.pages
        , "bookRead": this.read}
}

function UI() {
    this.renderBooks = function (library) {
        const bookContainer = document.querySelector('.book-container');
        bookContainer.innerHTML = '';
        let fragment = document.createDocumentFragment();
        library.forEach(function (book, idx) {
            let bookCard = document.createElement('div');
            bookCard.setAttribute('class', 'book-card d-flex flex-column');
            bookCard.setAttribute('data-index', idx);
            bookCard.innerHTML = `
                <div class="book-title pt-3 px-2 fw-bold text-center lh-sm fs-5">${book.bookName}</div>
                <div class="book-author pt-2 px-2 text-center">${book.bookAuthor}</div>
                <div class="book-pages pt-1 px-2 text-center fst-italic  text-muted">${book.bookPages} pages</div>
                <div class="book-options d-flex justify-content-between py-3">
                    <span class="material-icons-outlined ms-3 read-mark">
                        ${book.bookRead ? 'done' : 'remove_red_eye'}
                    </span>                    
                    <span class="material-icons-outlined me-3 delete">
                        delete
                    </span>
                </div>`;
            fragment.appendChild(bookCard);
        });
        bookContainer.appendChild(fragment);
    }

    

    this.addBook = function (book) {
        const bookContainer = document.querySelector('.book-container');
        const bookCard = document.createElement('div');
            bookCard.setAttribute('class', 'book-card d-flex flex-column');
            bookCard.setAttribute('data-index', library.books.length)
            bookCard.innerHTML = `
                <div class="book-title pt-3 px-2 fw-bold text-center lh-sm fs-5">${book.bookName}</div>
                <div class="book-author pt-2 px-2 text-center">${book.bookAuthor}</div>
                <div class="book-pages pt-1 px-2 text-center fst-italic  text-muted">${book.bookPages} pages</div>
                <div class="book-options d-flex justify-content-between py-3">
                    <span class="material-icons-outlined ms-3 read-mark">
                        ${book.bookRead ? 'done' : 'remove_red_eye'}
                    </span>                    
                    <span class="material-icons-outlined me-3 delete">
                        delete
                    </span>
                </div>`;
        bookContainer.appendChild(bookCard);
    }

    this.removeBook = function (book) {
        const bookContainer = document.querySelector('.book-container');
        bookContainer.removeChild(book);
        updateIdx();
    }

    this.updateBook = function (status) {
        if (status.innerText == 'remove_red_eye') {
            status.innerText = 'done';
            return;
        } else {
            status.innerText = 'remove_red_eye';
            return} ;
    }   

    this.showForm = function () {
        const form = document.querySelector('.form-container');
        form.classList.toggle('d-none');
    }

    updateIdx = function () {
        const bookContainer = document.querySelector('.book-container');
        const bookCards = bookContainer.querySelectorAll('.book-card');
        bookCards.forEach(function (bookCard, idx) {
            bookCard.setAttribute('data-index', idx);
        });     
    }
    
    return {
        renderBooks: this.renderBooks
        , removeBook: this.removeBook
        , addBook: this.addBook
        , updateBook: this.updateBook
        , showForm: this.showForm
    }
}



function Library() {
    this.books = [{bookName: 'El se;or de los anillos: las dos torres', bookAuthor: 'J.R.R Tolkien', bookPages: '1234', bookRead: false},
    {bookName: 'El se;or de los anillos: el retorno del rey', bookAuthor: 'J.R.R Tolkien', bookPages: '1234', bookRead: true},
    {bookName: 'Harry Potter y la camara Secreta', bookAuthor: 'J.R.R Tolkien', bookPages: '1234', bookRead: true},
    {bookName: 'Harry Potter y las reliquias de la muerte', bookAuthor: 'J.R.R Tolkien', bookPages: '1234', bookRead: false}]
    
    this.addBook = function (book) {
        this.books.push(book);
    }

    this.removeBook = function (idx) {
        this.books.splice(idx, 1);
    }

    this.updateBook = function (idx) {
        if (this.books[idx].bookRead) {
            this.books[idx].bookRead = false;
        } else {
            this.books[idx].bookRead = true;
        };   
        }

    return {
        books: this.books,
        addBook: this.addBook,
        removeBook: this.removeBook,
        updateBook: this.updateBook
    }
}

let library = new Library();
let libraryUI = new UI();

// button add new book
const addBookBtn = document.querySelector('#openForm');
const addBookFormBtn = document.querySelector('#addBook');
const closeFormBtn = document.querySelector('.close-btn')

document.addEventListener("DOMContentLoaded", () => {
    libraryUI.renderBooks(library.books);
}

)

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

    libraryUI.addBook(book);
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