// Define variables
const bookInput = document.querySelector("#bookInput");
const authorInput = document.querySelector("#authorInput");
const addBtn = document.querySelector("#addBtn");
const msg = document.querySelector("#msg");
const statsDiv = document.querySelector("#statsDiv");
const bookList = document.querySelector("#bookList");
const filterSelect = document.querySelector("#filterSelect");
const filterBtn = document.querySelector("#filterBtn");
const clearBtn = document.querySelector("#clearBtn");
let bookFilter = "All";

// Define state
const state = {
    books: loadBooks()
}

function loadBooks() {
    // Function for loading saved books
    const savedBooks = localStorage.getItem("books");
    if (!savedBooks) return [];
    try {
        return JSON.parse(savedBooks);
    } catch {
        return [];
    }
}

function saveBooks() {
    // Function for saving books
    localStorage.setItem("books", JSON.stringify(state.books));
}

function filterBooks() {
    // Function for filtering books
    return state.books.filter(book => {
        const matchesFilter = 
        bookFilter === "All" ||
        (bookFilter === "Reading" && book.status === "Reading") ||
        (bookFilter === "Read" && book.status === "Read");

        return matchesFilter;
    });
}

function renderBooks() {
    // Function for rendering book list
    bookList.innerHTML = "";

    // Filter books
    const filteredBooks = filterBooks();

    // Render each book
    filteredBooks.forEach(book => {
        // Create each li element for each book
        const bookDiv = document.createElement("div");
        bookDiv.textContent = `${book.title} by ${book.author} | ${book.status}`;
        bookDiv.classList.add("bookListItem");

        // Create a div to keep the buttons together on the right of the li
        const bookBtns = document.createElement("div");

        // Create a button to mark the book as read
        const markAsRead = document.createElement("button");
        markAsRead.textContent = "Mark as read";
        markAsRead.classList.add("btn");
        markAsRead.addEventListener("click", () => {
            book.status = "Read";
            saveBooks();
            renderBooks();
            renderStats();
        });

        // Hide the mark as read button if book has been read
        if (book.status === "Read") {
            markAsRead.classList.add("hidden");
        }

        // Create a button to delete a book
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("btn");
        delBtn.addEventListener("click", () => {
            state.books = state.books.filter(filteredBook => filteredBook.id !== book.id);
            saveBooks();
            renderBooks();
            renderStats();
        });

        // Append new items to their parents
        bookDiv.appendChild(bookBtns);
        bookBtns.appendChild(markAsRead);
        bookBtns.appendChild(delBtn);
        bookList.appendChild(bookDiv);
    });
}

function renderStats() {
    // Function for rendering stats
    const totalBooks = state.books.length;
    const booksNotRead = state.books.filter(book => book.status === "Reading").length;
    const booksRead = state.books.filter(book => book.status === "Read").length;

    statsDiv.innerHTML = `
        <p>Total books: ${totalBooks}</p>
        <p>Books not read: ${booksNotRead}</p>
        <p>Books read: ${booksRead}</p>`;
}

function renderMsg(message, color) {
    // Function for rendering messages
    msg.classList.remove("hidden");
    msg.textContent = message;
    msg.style.color = color;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("btn");
    closeBtn.id = "closeBtn";
    closeBtn.addEventListener("click", () => {
        msg.classList.add("hidden");
    });

    msg.appendChild(closeBtn);
}

function addBook() {
    // Function for adding a book
    const bookTitle = bookInput.value.trim();
    const bookAuthor = authorInput.value.trim();

    // Return if there is not a title
    if (!bookTitle) {
        renderMsg("Please enter a title.", "red");
        return;
    }

    // Return if there is not an author
    if (!bookAuthor) {
        renderMsg("Please enter an author.", "red");
        return;
    }

    // Return if the book already exists
    const bookExists = state.books.filter(book => book.title === bookTitle);

    if (bookExists.length > 0) {
        renderMsg(`${bookTitle} already exists.`, "red");
        return;
    }

    // Create the new book object
    const newBook = {
        id: Date.now(),
        title: bookTitle,
        author: bookAuthor,
        status: "Reading"
    }

    // Add the new book to list, save, and render
    state.books.push(newBook);
    bookInput.value = "";
    authorInput.value = "";
    saveBooks();
    renderBooks();
    renderStats();
    renderMsg(`${bookTitle} added.`, "green");
}

// Add event listeners to buttons
addBtn.addEventListener("click", addBook);

filterBtn.addEventListener("click", () => {
    bookFilter = filterSelect.value;
    renderBooks();
});

clearBtn.addEventListener("click", () => {
    state.books = [];
    saveBooks();
    renderBooks();
    renderStats();
});

renderBooks();
renderStats();