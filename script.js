export const bookShelf = document.querySelector(".bookshelf");
const formOpenBtn = document.querySelector(".btn.add-book-btn");
const editBtn = document.querySelector(".btn.edit-book");
const removeBookBtn = document.querySelector(".btn.close-book-btn");
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
const chooseBookContainer = document.querySelector(".choose-the-book");
const bookContainer = document.querySelector(".book-container");
const form = document.querySelector(".form");
const currentBooksHolder = document.querySelector(".current-books");
const drawBtn = document.querySelector(".btn.draw");
const stopBtn = document.querySelector(".btn-stop");
const editTitle = document.querySelector(".form-header");

function removeBook(e) {
  if (e.target.classList.contains("close-btn")) {
    const currentBookElement = e.target.parentElement;

    currentBookElement.remove();
  }
}

function clearFields() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = 0;
  readPagesInput.value = 0;
  selectStatusState.value = "";
}

function checkIfValid() {
  if (+pagesInput.value < +readPagesInput.value) {
    return;
  }
}

function openModalForm() {
  formContainer.style.display = "flex";
}

function closeModalForm() {
  clearFields();
  formContainer.style.display = "none";
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

/* 
    div.innerHTML = `
    <button class="btn edit-book">Edit <i class="fas fa-pen"></i></button>

          <button class="btn close-book-btn">
            Remove <i class="fas fa-remove"></i>
          </button>

          <div class="book-infos">
            <div class="book-field">
              <div class="book-cover">
                <img src="${
                  chosenElement.img === undefined
                    ? "./assets/2232688.png"
                    : chosenElement.img
                }" alt="" />
              </div>
            </div>

            <div class="book-field">
              <h4 class="title">${chosenElement.title}</h4>
            </div>
            <div class="book-field">
              <h5 class="author">${chosenElement.author}</h5>
            </div>
            <div class="book-field">
              <p class="pages">${chosenElement.pages} pages</p>
            </div>

            <div class="book-field">
              <p class="read-pages">Already read: ${chosenElement.read}/${
      chosenElement.pages
    }</p>
            </div>

            <h5 class="status">Status: ${
              chosenElement.status
            }, ${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}</h5>
          </div>
        </div>`;
        */
