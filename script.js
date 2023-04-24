// Create an empty array to store the books in.
let myLibrary = [];

// Create a constructor function to create new book objects. This function should take in four parameters: title, author, pages, and read.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Add a prototype method to the Book constructor that will toggle the "read" status of a book.
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

//Create a function called "toggleRead" that will toggle the "read" status of a book in the myLibrary array based on its index. This function should call the "toggleRead" prototype method of the Book object.
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}

// Create a function called "render" that will display all of the books in the myLibrary array on the page. This function should create a new div element for each book, set the appropriate attributes and innerHTML, and append it to the #library element on the page.
function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
      </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}

//Create a function called "removeBook" that will remove a book from the myLibrary array based on its index. This function should call the "splice" method of the myLibrary array and then call the "render" function to update the display.
function removeBook(index) {
  myLibrary.splice(index, 1);
  render()
}

//Create a function called "addBookToLibrary" that will take user input from a form and use it to create a new Book object, which is then added to the myLibrary array. This function should call the "render" function to update the display.
function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

//Add an event listener to the "New Book" button on the page that will display a form when clicked.
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
   let newBookForm = document.querySelector("#new-book-form");
   newBookForm.style.display = "block";
})

// Add an event listener to the new book form's submit button
document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission behavior
    addBookToLibrary(); // Call the addBookToLibrary function to add the book to the library
  })