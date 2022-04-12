/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Book\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\n  constructor(name, author, pages, read = false) {\n    this.bookName = name;\n    this.bookAuthor = author;\n    this.bookPages = pages;\n    this.bookRead = read;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://librarywebpack/./src/Book.js?");

/***/ }),

/***/ "./src/Library.js":
/*!************************!*\
  !*** ./src/Library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Library\": () => (/* binding */ Library)\n/* harmony export */ });\nclass Library {\n  constructor() {\n    if (localStorage.getItem(\"library\") === null) {\n      this.books = [];\n      localStorage.setItem(\"library\", JSON.stringify(this.books));\n    } else {\n      this.books = JSON.parse(localStorage.getItem(\"library\"));\n    }\n  }\n\n  addBook(book) {\n    this.books.push(book);\n    localStorage.setItem(\"library\", JSON.stringify(this.books));\n  }\n\n  removeBook(idx) {\n    this.books.splice(idx, 1);\n    localStorage.setItem(\"library\", JSON.stringify(this.books));\n  }\n\n  updateBook(idx) {\n    if (this.books[idx].bookRead) {\n      this.books[idx].bookRead = false;\n    } else {\n      this.books[idx].bookRead = true;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://librarywebpack/./src/Library.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n  static renderBooks(library) {\n    const bookContainer = document.querySelector(\".book-container\");\n    bookContainer.innerHTML = \"\";\n    let fragment = document.createDocumentFragment();\n    library.forEach(function (book, idx) {\n      let bookCard = document.createElement(\"div\");\n      bookCard.setAttribute(\"class\", \"book-card d-flex flex-column\");\n      bookCard.setAttribute(\"data-index\", idx);\n      bookCard.innerHTML = `\n                <div class=\"book-title pt-3 px-2 fw-bold text-center lh-sm fs-5\">${\n                  book.bookName\n                }</div>\n                <div class=\"book-author pt-2 px-2 text-center\">${\n                  book.bookAuthor\n                }</div>\n                <div class=\"book-pages pt-1 px-2 text-center fst-italic  text-muted\">${\n                  book.bookPages\n                } pages</div>\n                <div class=\"book-options d-flex justify-content-between py-3\">\n                    <span class=\"material-icons-outlined ms-3 read-mark\">\n                        ${book.bookRead ? \"done\" : \"remove_red_eye\"}\n                    </span>                    \n                    <span class=\"material-icons-outlined me-3 delete\">\n                        delete\n                    </span>\n                </div>`;\n      fragment.appendChild(bookCard);\n    });\n    bookContainer.appendChild(fragment);\n  }\n\n  static addBook(book, library) {\n    const bookContainer = document.querySelector(\".book-container\");\n    const bookCard = document.createElement(\"div\");\n    bookCard.setAttribute(\"class\", \"book-card d-flex flex-column\");\n    if (library.books.length === 0) {\n      bookCard.setAttribute(\"data-index\", 0);\n    }\n    bookCard.setAttribute(\"data-index\", library.books.length);\n    bookCard.innerHTML = `\n                <div class=\"book-title pt-3 px-2 fw-bold text-center lh-sm fs-5\">${\n                  book.bookName\n                }</div>\n                <div class=\"book-author pt-2 px-2 text-center\">${\n                  book.bookAuthor\n                }</div>\n                <div class=\"book-pages pt-1 px-2 text-center fst-italic  text-muted\">${\n                  book.bookPages\n                } pages</div>\n                <div class=\"book-options d-flex justify-content-between py-3\">\n                    <span class=\"material-icons-outlined ms-3 read-mark\">\n                        ${book.bookRead ? \"done\" : \"remove_red_eye\"}\n                    </span>                    \n                    <span class=\"material-icons-outlined me-3 delete\">\n                        delete\n                    </span>\n                </div>`;\n    bookContainer.appendChild(bookCard);\n  }\n\n  static removeBook(book) {\n    const bookContainer = document.querySelector(\".book-container\");\n    bookContainer.removeChild(book);\n    UI.updateIdx();\n  }\n\n  static updateBook(status) {\n    if (status.innerText == \"remove_red_eye\") {\n      status.innerText = \"done\";\n      return;\n    } else {\n      status.innerText = \"remove_red_eye\";\n      return;\n    }\n  }\n\n  static showForm() {\n    const form = document.querySelector(\".form-container\");\n    form.classList.toggle(\"d-none\");\n  }\n\n  static updateIdx() {\n    const bookContainer = document.querySelector(\".book-container\");\n    const bookCards = bookContainer.querySelectorAll(\".book-card\");\n    bookCards.forEach(function (bookCard, idx) {\n      bookCard.setAttribute(\"data-index\", idx);\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://librarywebpack/./src/UI.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _Library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Library.js */ \"./src/Library.js\");\n/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book.js */ \"./src/Book.js\");\n\n\n\n\nlet library = new _Library_js__WEBPACK_IMPORTED_MODULE_1__.Library();\n// let UI = new UI();\n\n// button add new book\nconst addBookBtn = document.querySelector(\"#openForm\");\nconst addBookFormBtn = document.querySelector(\"#addBook\");\nconst closeFormBtn = document.querySelector(\".close-btn\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // when we load the page, we want to show all the books (from the localStorage, if there are any)\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.renderBooks(library.books);\n});\n\naddBookBtn.addEventListener(\"click\", function () {\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.showForm();\n});\n\ncloseFormBtn.addEventListener(\"click\", () => {\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.showForm();\n});\n\naddBookFormBtn.addEventListener(\"click\", function () {\n  let bookName = document.querySelector(\"#bookName\").value;\n  let bookAuthor = document.querySelector(\"#bookAuthor\").value;\n  let bookPages = document.querySelector(\"#bookPages\").value;\n  let bookRead = document.querySelector(\"#bookRead\").checked;\n  let book = new _Book_js__WEBPACK_IMPORTED_MODULE_2__.Book(bookName, bookAuthor, bookPages, bookRead);\n\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.addBook(book, library);\n  library.addBook(book);\n  _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.showForm();\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"delete\")) {\n    let book = e.target.parentElement.parentElement;\n    _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.removeBook(book);\n    library.removeBook(book.getAttribute(\"data-index\"));\n  }\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"read-mark\")) {\n    let book = e.target.parentElement.parentElement;\n    let status = e.target;\n    _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.updateBook(status);\n    library.updateBook(book.getAttribute(\"data-index\"));\n  }\n});\n\n// export { library };\n\n\n//# sourceURL=webpack://librarywebpack/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;