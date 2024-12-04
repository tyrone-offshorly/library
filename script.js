const myLibrary = [];

class Book {

  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
  

  toggleIsRead = () => {
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);

  myLibrary.push(newBook);
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function toggleRead(index) {
  myLibrary[index].toggleIsRead();
  displayLibrary();
}



function displayLibrary() {
  const libraryContainer = document.querySelector('.library-container');
  libraryContainer.textContent='';
  myLibrary.forEach((book, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("data-index", index);
    
    const detailWrapper = document.createElement('div');
    detailWrapper.classList.add('detail-wrapper');

    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const isReadP = document.createElement('p');
    const toggleButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    toggleButton.classList.add('toggle-button');
    deleteButton.classList.add('delete-button');
    
    deleteButton.addEventListener('click',() => deleteBook(index));
    toggleButton.addEventListener('click', () => toggleRead(index));
    titleP.textContent = book.title;
    authorP.textContent = book.author;
    pagesP.textContent = book.pages + " pages";
    isReadP.textContent = book.isRead ? 'Read' : 'Not yet read';
    toggleButton.textContent = "Toggle read";
    deleteButton.textContent = "Delete"

    detailWrapper.appendChild(titleP);
    detailWrapper.appendChild(authorP);
    detailWrapper.appendChild(pagesP);
    detailWrapper.appendChild(isReadP);

    card.append(detailWrapper);
    card.appendChild(toggleButton);
    card.appendChild(deleteButton);

    libraryContainer.appendChild(card);
  })
}

// For demonstration purposes only
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);

displayLibrary();

const dialogForm = document.querySelector('#dialogForm');
const bookForm = document.querySelector(".form");
const dialogWrapper = document.querySelector('.dialog-wrapper');
// Button functionalities here
const newBookBtn = document.querySelector('#newBookBtn');
const submitBtn = document.querySelector('#submitBtn');
newBookBtn.addEventListener('click', () => {
  dialogForm.showModal();
})
dialogForm.addEventListener('click', (e) => {
  if(!dialogWrapper.contains(e.target)) {
    dialogForm.close();
    bookForm.reset();
  }
})
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get all the data from the form
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const page = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked;
  if(title && author && page) {
    addBookToLibrary(title, author, page, isRead);
    displayLibrary();
    dialogForm.close();
    bookForm.reset();
  }
})

