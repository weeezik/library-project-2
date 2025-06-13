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

// harryPotter = new Book("Harry Potter", "J.K. Rowling", 345, true)
// starWars = new Book("Star Wars", "George Lucas", 557, false)

addBookToLibrary("The Hobbit", "Tolkien", 783, true)
addBookToLibrary("Harry Potter", "J.K. Rowling", 345, true)

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

  // let titleDiv = document.querySelector(".title");
  // titleDiv.textContent = bookObj.title
}

displayBook(myLibrary[0]);