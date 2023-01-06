import { bookShelf } from '../script';

export default class Book {
  constructor(title, author, pages, read, state, img, date) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.state = state;
    this.img = img;
    this.date = date;
  }

  static addBookToDOM(book) {
    const div = document.createElement("div");
    div.classList.add("saved-book");
    div.innerHTML = `<button class="btn add-reading">
            <i class="fas fa-plus"></i>
          </button>

          <div class="book-infos">
<small>${book.date}</small>

            <div class="book-field">
              <h4 class="title">${book.title}</h4>
            </div>
            <div class="book-field">
              <h5 class="author">${book.author}</h5>
            </div>
          </div>`;

    bookShelf.append(div);
  }
}
