function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
  bookObjectName = title.replaceAll(" ", "").toLowerCase(); //remove spaces and make lowercase
  console.log(bookObjectName);
  bookObjectName = new Book(title, author, pages, read);
}

// harryPotter = new Book("Harry Potter", "J.K. Rowling", 345, true)
// starWars = new Book("Star Wars", "George Lucas", 557, false)

addBookToLibrary("The Hobbit", "Tolkien", 783, true)