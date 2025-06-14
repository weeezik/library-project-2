const myLibrary = []
const container = document.querySelector(".container")

function convertToBoolean (checkboxInput) {
  if (typeof checkboxInput == "string") {
    if (checkboxInput === 'true') {
    return true
  } else if (checkboxInput === 'false') {
    return false
  } else {
    alert("Error with convertToBoolean function.")
  }
  } else {
    return checkboxInput
  }
  
}

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.id = crypto.randomUUID();
  this.changeReadStatus = function() {
    let readStatus = convertToBoolean(this.read);
    if (readStatus == true) {
      this.read = false;
    } else if (readStatus == false) {
      this.read = true;
    } else {
      alert(`Error with the changeReadStatus prototype function! Read value: ${this.read}`)
    }
    displayEveryBook(myLibrary);
  }
}

function addBookToLibrary(title, author, pages, read){
  myLibrary.push(new Book(title, author, pages, read))
}

function removeBook (bookID, library) {
  for (const book of library) {
    if (bookID === book.id) {
      let bookIndex = library.indexOf(book);
      library.splice(bookIndex, 1);
      displayEveryBook(library);
    }
  }
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

  let readButton = document.createElement("button");
  readButton.classList.add("readstatus");
  readButton.setAttribute("data-id", bookObj.id)
  readButton.textContent = "Toggle read status"
  readButton.addEventListener("click", (e) => {
    for (const book of myLibrary) {
      if (book.id === e.target.dataset.id) {
        book.changeReadStatus();
      }
    }
  });
  bookCard.appendChild(readButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("del");
  deleteButton.setAttribute("data-id", bookObj.id);
  deleteButton.textContent = "Delete this book"
  deleteButton.addEventListener("click", (e) => {
    removeBook(e.target.dataset.id, myLibrary);
  })
  bookCard.appendChild(deleteButton);
}

function displayEveryBook(library) {
  container.innerHTML = "";
  for (const book of library){
  displayBook(book)
  }
}

//Modal Logic
const dialog = document.querySelector("#modal");
const showModalButton = document.querySelector(".showModalButton");
const submitButton = document.querySelector("#submitButton");
const form = document.getElementById("frm");

showModalButton.addEventListener("click", () => {
  form.reset();
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
  displayEveryBook(myLibrary);
  

})

addBookToLibrary("The Hobbit", "Tolkien", 783, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary("Star Wars", "George Lucas", 557, false);

displayEveryBook(myLibrary);