const myLibrary = []
const container = document.querySelector(".container")

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.id = crypto.randomUUID();
}

// harryPotter = new Book("Harry Potter", "J.K. Rowling", 345, true)
// starWars = new Book("Star Wars", "George Lucas", 557, false)

function addBookToLibrary(title, author, pages, read){
  myLibrary.push(new Book(title, author, pages, read))
}

addBookToLibrary("The Hobbit", "Tolkien", 783, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary("Star Wars", "George Lucas", 557, false);

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
}

function displayEveryBook(library) {
  for (const book of library){
  displayBook(book)
  }
}

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
  let inputTitle = dialog.querySelector("#title").value;
  let inputAuthor = dialog.querySelector("#author").value;
  let inputPages = dialog.querySelector("#pages").value;  
  let inputRead = document.querySelector('input[name="read"]:checked').value;
  addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);
  displayBook(myLibrary.at(-1));
})


