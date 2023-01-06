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

  static addBookToDOM(book, index) {
    let div = `<div class="saved-book" data-index=${index} data-src=${book.img} data-state=${book.state}>
    <button class="btn add-reading">
            <i class="fas fa-plus"></i>
          </button>

          <div class="book-infos">
<small class="date">${book.date}</small>

            <div class="book-field">
              <h4 class="title">${book.title}</h4>
            </div>
            <div class="book-field">
              <h5 class="author">${book.author}</h5>
            </div>
            <p class="pages">${book.pages} pages</p>
          </div>
    </div>`;

    return div;
  }

  static addToCurrentBook(book, index) {
    const div = `<div class="current-book" data-index=${index} data-src=${
      book.img
    }>

<button class="btn edit-book">Edit <i class="fas fa-pen"></i></button>

          <button class="btn close-book-btn">
            Remove <i class="fas fa-remove"></i>
          </button>

          <div class="book-infos">
            <div class="book-field">
              <div class="book-cover">
                <img src="${
                  book.img === undefined ? "./assets/2232688.png" : book.img
                }" alt="" />
              </div>
            </div>

            <div class="book-field">
              <h4 class="title">${book.title}</h4>
            </div>
            <div class="book-field">
              <h5 class="author">${book.author}</h5>
            </div>
            <div class="book-field">
              <p class="pages">${book.pages} pages</p>
            </div>

            <div class="book-field">
              <p class="read-pages">Already read: ${book.read}/${book.pages}</p>
            </div>

            <h5 class="status">Status: ${book.state},  ${
      new Date().getMonth() + 1 < 10
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1
    }.${
      new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate()
    }.${new Date().getFullYear()}</h5>
          </div>
        </div>
</div>`;

    return div;
  }
}
