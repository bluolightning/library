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

document.querySelector(".refreshLibrary").addEventListener("click", function() {
    const libraryDisplay = document.querySelector(".libraryDisplay");

    for (const book of library) {
        console.log(book.title);
        console.log(book.author);
        console.log("");
    }
});

addBookToLibrary("This is a book", "This is another one");
addBookToLibrary("One Piece", "Oda");
addBookToLibrary("Your Bud", "John James");

