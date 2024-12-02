const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);

  myLibrary.push(newBook);
}

function displayLibrary() {
  const libraryContainer = document.querySelector('.library-container');
  for(let book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('card');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const isReadP = document.createElement('p');

    titleP.textContent = book.title;
    authorP.textContent = book.author;
    pagesP.textContent = book.pages;
    isReadP.textContent = book.isRead ? 'Read' : 'Not yet read';
    card.appendChild(titleP);
    card.appendChild(authorP);
    card.appendChild(pagesP);
    card.appendChild(isReadP);

    libraryContainer.appendChild(card);
  }
}

// For demonstration purposes only
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);

displayLibrary();