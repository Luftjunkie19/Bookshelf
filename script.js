import Book from './scripts/Book.js';

export const bookShelf = document.querySelector(".bookshelf");
const formOpenBtn = document.querySelector(".btn.add-book-btn");
const formCloseBtn = document.querySelector(".btn.close-btn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readPagesInput = document.querySelector("#read-pages");
const coverFileInput = document.querySelector("#cover");
const selectStatusState = document.querySelector(".status-state");
const submitBtn = document.querySelector(".btn.btn-submit");
const formContainer = document.querySelector(".form-container");
const coverPreviewHolder = document.querySelector(".book-cover-preview");
const form = document.querySelector(".form");
const formHeader = document.querySelector(".form-header");
const currentBooksHolder = document.querySelector(".current-books");
const infoTag = document.querySelector(".info-tag");
const currentStatusTag = document.querySelector(".status-current");
const bookshelfedInfo = document.querySelector(".bookshelf-info");

let myShelf = [];
let currentBooks = [];

function showCurrentArrayState() {
  if (currentBooks.length === 0) {
    currentStatusTag.innerText = `Oh 😥, you don't read anything. Maybe you will start?`;
  } else {
    currentStatusTag.innerText = `Nice 😎, you read currently ${
      currentBooks.length
    } ${currentBooks.length < 2 ? "Book" : "Books"}. Keep it up!`;
  }
}

function showBookshelfedInfo() {
  if (myShelf.length === 0) {
    bookshelfedInfo.innerText = `Your bookshelf is empty 😥, will you fill it anywhen?`;
  } else {
    bookshelfedInfo.innerText = `Nice 😎, your bookshelf has already ${
      myShelf.length
    } ${myShelf.length < 2 ? "Book" : "Books"}. Keep it up!`;
  }
}

function showShelfedBooks() {
  let input = "";
  myShelf.forEach((book, index) => {
    input += `${Book.addBookToDOM(book, index)}`;
  });
  bookShelf.innerHTML = input;
}

function setShelfedLocalStorage() {
  localStorage.setItem("bookshelfed", JSON.stringify(myShelf));
}

function loadShelfedLocalStorage() {
  if (localStorage.getItem("bookshelfed") === null) {
    myShelf = [];
  } else {
    myShelf = JSON.parse(localStorage.getItem("bookshelfed"));

    showShelfedBooks();
  }
}

function setCurrentLocalStorage() {
  localStorage.setItem("current", JSON.stringify(currentBooks));
}

function getCurrentLocalStorage() {
  if (localStorage.getItem("current") === null) {
    currentBooks = [];
  } else {
    currentBooks = JSON.parse(localStorage.getItem("current"));
    showCurrentBooks();
  }
}

loadShelfedLocalStorage();
getCurrentLocalStorage();

function updateBookIndexes() {
  const savedBooks = document.querySelectorAll(".saved-book");

  savedBooks.forEach((book, index) => {
    book.setAttribute("data-index", index);
  });
}

function updateCurrentBookIndexes() {
  const currentBooks = document.querySelectorAll(".current-book");

  currentBooks.forEach((book, i) => {
    book.setAttribute("data-index", i);
  });
}

function showCurrentBooks() {
  let input = "";

  currentBooks.forEach((book, index) => {
    input += Book.addToCurrentBook(book, index);
  });
  currentBooksHolder.innerHTML = input;
}

function openModalForm() {
  formContainer.style.display = "flex";
}

function closeModalForm() {
  clearFields();
  formContainer.style.display = "none";
}

function clearFields() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = 1;
  readPagesInput.value = 0;
  coverPreviewHolder.innerHTML = "";
  selectStatusState.value = "untouched";
}

function checkIfValid() {
  if (
    (+pagesInput.value < +readPagesInput.value && titleInput.value === "") ||
    authorInput.value === ""
  ) {
    alert("You missed something 😉");
    return;
  }
}

function addNewBook(e) {
  if (e.target.classList.contains("btn-submit")) {
    checkIfValid();

    const newShelfedBook = new Book(
      titleInput.value,
      authorInput.value,
      +pagesInput.value,
      +readPagesInput.value,
      selectStatusState.value,
      coverPreviewHolder.children[0]?.src,
      `${
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate()
      }.${
        new Date().getMonth() + 1 < 10
          ? `0${new Date().getMonth() + 1}`
          : new Date().getMonth() + 1
      }.${new Date().getFullYear()}`
    );

    myShelf.push(newShelfedBook);
    setShelfedLocalStorage();
    showShelfedBooks();

    closeModalForm();

    showBookshelfedInfo();
    showCurrentBooks();
  }
}

function deleteOrEdit(e) {
  if (e.target.classList.contains("edit")) {
    const index = +form.getAttribute("changed-index");
    console.log(index);

    checkIfValid();
    const editedBook = new Book(
      titleInput.value,
      authorInput.value,
      +pagesInput.value,
      +readPagesInput.value,
      selectStatusState.value,
      coverPreviewHolder.children[0]?.src,
      currentBooks[index].date
    );

    currentBooks.splice(index, 1, editedBook);
    showCurrentBooks();
    updateColor(index);
    setCurrentLocalStorage();

    closeModalForm();

    submitBtn.classList.remove("edit");
    submitBtn.classList.add("btn-submit");
    submitBtn.innerText = "Submit";
    form.removeAttribute("data-index");
    formHeader.innerText = "Missclicked? No worries you can edit it😉";
    infoTag.innerText = `Add New Book to your shelf!`;

    showCurrentArrayState();
    showBookshelfedInfo();
  }

  if (e.target.classList.contains("close-book-btn")) {
    const index = +e.target.parentElement.getAttribute("data-index");

    const currentBookEl = e.target.parentElement;

    currentBookEl.remove();

    currentBooks.splice(index, 1);

    console.log(currentBooks);

    updateCurrentBookIndexes();
    setCurrentLocalStorage();

    showCurrentArrayState();
    showBookshelfedInfo();
  }
}

function updateColor(index) {
  const currentBooksEl = document.querySelectorAll(".current-book");

  if (currentBooks[index].state === "untouched") {
    currentBooksEl[index].classList.add("untouched");
  } else if (currentBooks[index].state === "reading") {
    currentBooksEl[index].classList.remove("untouched");
    currentBooksEl[index].classList.add("reading");
  } else {
    currentBooksEl[index].classList.remove("reading");
    currentBooksEl[index].classList.add("finished");
  }
}

function editCurrentBook(e) {
  if (e.target.classList.contains("edit-book")) {
    const index = +e.target.parentElement.getAttribute("data-index");
    const src = currentBooks[index].img;

    console.log(currentBooks[index]);

    titleInput.value = currentBooks[index].title;
    authorInput.value = currentBooks[index].author;
    pagesInput.value = currentBooks[index].pages;
    coverPreviewHolder.innerHTML = `<img src=${src}/>`;
    readPagesInput.value = currentBooks[index].read;
    selectStatusState.value = currentBooks[index].state;
    formHeader.innerText = "Missclicked? No worries you can edit it😉";
    infoTag.innerText = `I apoligize😥, the project is not over, upload again the file please.`;

    submitBtn.classList.remove("btn-submit");
    submitBtn.classList.add("edit");
    submitBtn.innerText = "Edit";
    form.setAttribute("changed-index", index);

    openModalForm();
  }
}

function handleFiles(file, holder) {
  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();

    img.src = reader.result;

    holder.append(img);
  };

  reader.readAsDataURL(file.files[0]);
}

function addBookToCurrent(e) {
  if (e.target.classList.contains("add-reading")) {
    let index = +e.target.parentElement.getAttribute("data-index");
    console.log(index);

    currentBooks.push(myShelf[index]);
    setCurrentLocalStorage();
    showCurrentBooks();

    myShelf.splice(index, 1);
    setShelfedLocalStorage();
    updateBookIndexes();

    console.log(myShelf);
    console.log(currentBooks);

    showShelfedBooks();
    showCurrentArrayState();
    showBookshelfedInfo();
  }
}

bookShelf.addEventListener("click", addBookToCurrent);
coverFileInput.addEventListener("change", () => {
  coverPreviewHolder.innerHTML = "";
  handleFiles(coverFileInput, coverPreviewHolder);
});
currentBooksHolder.addEventListener("click", editCurrentBook);
form.addEventListener("click", addNewBook);
formOpenBtn.addEventListener("click", openModalForm);
formCloseBtn.addEventListener("click", closeModalForm);
document.body.addEventListener("click", deleteOrEdit);

showBookshelfedInfo();
showCurrentArrayState();
