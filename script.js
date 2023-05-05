// Define the Book class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

// Define the Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleRead(index) {
    this.books[index].toggleRead();
  }

  render() {
    const libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    this.books.forEach((book, index) => {
      const bookEl = document.createElement("div");
      bookEl.setAttribute("class", "book-card");
      bookEl.innerHTML = `
        <div class="card-header">
          <h3 class="title">${book.title}</h3>
          <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
          <p>${book.pages} pages</p>
          <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
          <button class="remove-btn" onclick="library.removeBook(${index}); library.render()">Remove</button>
          <button class="toggle-read-btn" onclick="library.toggleRead(${index}); library.render()">Toggle Read</button>
        </div>
      `;
      libraryEl.appendChild(bookEl);
    });
  }
}

// Create a new library object
const library = new Library();

// Add an event listener to the "New Book" button on the page that will display a form when clicked.
const newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
  const newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

// Add an event listener to the new book form's submit button
document.querySelector("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values and add book to library
  const title = document.querySelector("#title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  library.addBook(title, author, pages, read);

  // Render the updated library
  library.render();
});
