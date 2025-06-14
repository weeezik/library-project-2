const myLibrary = []
const container = document.querySelector(".container")

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
  myLibrary.push(new Book(title, author, pages, read))
}

function displayBook(bookObj) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  container.appendChild(bookCard);

  let bookTitle = document.createElement("div");
  bookTitle.classList.add("title");
  bookTitle.textContent = bookObj.title;
  bookCard.appendChild(bookTitle);

  let bookAuthor = document.createElement("div");
  bookAuthor.classList.add("author");
  bookAuthor.textContent = bookObj.author;
  bookCard.appendChild(bookAuthor);

  let bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  bookPages.textContent = bookObj.pages;
  bookCard.appendChild(bookPages);

  let bookRead = document.createElement("div");
  bookRead.classList.add("read");
  bookRead.textContent = bookObj.read;
  bookCard.appendChild(bookRead);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("del");
  deleteButton.setAttribute("data-id", bookObj.id);
  deleteButton.textContent = "Delete this book"
  bookCard.appendChild(deleteButton);
}

function displayEveryBook(library) {
  // Remove all cards currently on the page
  // const allPreviousBookCards = document.querySelectorAll("div.card");
  // allPreviousBookCards.remove();
  // Add cards for every book in the library
  for (const book of library){
  displayBook(book)
  }
}

addBookToLibrary("The Hobbit", "Tolkien", 783, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary("Star Wars", "George Lucas", 557, false);

displayEveryBook(myLibrary);

const dialog = document.querySelector("#modal");
const showModalButton = document.querySelector(".showModalButton");
const submitButton = document.querySelector("#submitButton");

showModalButton.addEventListener("click", () => {
  modal.showModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.close();
  const inputTitle = dialog.querySelector("#title").value;
  const inputAuthor = dialog.querySelector("#author").value;
  const inputPages = dialog.querySelector("#pages").value;  
  const inputRead = document.querySelector('input[name="read"]:checked').value;
  addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);
  displayBook(myLibrary.at(-1));
})


const delButtons = document.querySelectorAll("button.del");
const delButtonsArray = Array.from(delButtons);
  for (const delButton of delButtonsArray) {
  delButton.addEventListener("click", ()=> {
    const delBookId = delButton.dataset.id
      for (let book of myLibrary) {
        if (book.id === delBookId) {
          let bookIndex = myLibrary.indexOf(book);
          myLibrary.splice(bookIndex, 1);
        }
      }
    displayEveryBook(myLibrary);
  })
}

