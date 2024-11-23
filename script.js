const library = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    library.push(book);
    console.log(book);
    console.log(library);
}

document.querySelector("button").addEventListener("click", function() {
    addBookToLibrary(prompt('title'), prompt('author'));
});
