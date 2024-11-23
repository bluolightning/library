const library = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    library.push(book);
}

document.querySelector(".addBook").addEventListener("click", function() {
    addBookToLibrary(prompt('title'), prompt('author'));
});

document.querySelector(".clearLibrary").addEventListener("click", function() {
    document.querySelector(".libraryDisplay").textContent = '';
});

document.querySelector(".refreshLibrary").addEventListener("click", function() {
    const libraryDisplay = document.querySelector(".libraryDisplay");

    for (const book of library) {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        
        h1.textContent = book.title;
        h2.textContent = book.author;

        libraryDisplay.appendChild(h1);
        libraryDisplay.appendChild(h2);
    }
});

addBookToLibrary("Code of Honor", "Alan Gratz");
addBookToLibrary("One Piece", "Oda");
addBookToLibrary("Sam Woo is Not Afraid of Space", "");

