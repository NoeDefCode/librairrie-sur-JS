function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.getInfo = function () {
    return `Titre : ${this.title}, auteur : ${this.author}, pages : ${this.pages}, lu : ${this.isRead}, id : ${this.id}`;
  };
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

let list = document.getElementById("userlist");

function displayBook() {
  myLibrary.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.getInfo();
    list.appendChild(li);
  });
}

addBookToLibrary("harry", "rowling", 750, true);
displayBook();
