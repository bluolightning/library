const library = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.readStatus = false;
}

function addBookToLibrary(title, author) {
    const book = new Book(title, author);
    library.push(book);
}

document.querySelector(".addBook").addEventListener("click", function() {
    event.preventDefault();
    addBookToLibrary(document.querySelector("#title").value, document.querySelector("#author").value);
});

document.querySelector(".clearLibrary").addEventListener("click", function() {
    document.querySelector(".libraryDisplay").textContent = '';
});

// Creates or remakes library display
document.querySelector(".refreshLibrary").addEventListener("click", function() {
    const libraryDisplay = document.querySelector(".libraryDisplay");
    let orderNumber = 0;
    libraryDisplay.textContent = '';

    for (const book of library) {
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let button = document.createElement("button");
        let readLabel = document.createElement("label");
        let checkbox = document.createElement("input");
        let div = document.createElement("div");
        
        h1.textContent = book.title;
        h2.textContent = book.author;
        button.textContent = "Remove Book";
        readLabel.textContent = "Read: ";

        button.setAttribute("order", "order" + orderNumber);
        button.setAttribute("class", "removeBook");
        readLabel.setAttribute("for", "read");
        checkbox.setAttribute("type", "checkbox");


        libraryDisplay.appendChild(h1);
        libraryDisplay.appendChild(h2);
        libraryDisplay.appendChild(button);
        libraryDisplay.appendChild(div);
        div.appendChild(readLabel);
        div.appendChild(checkbox);

        // Remove books
        button.addEventListener("click", function() {
            let attribute = event.target.getAttribute("order")
            let orderNum = attribute.replace("order", "");
            library.splice(orderNum, 1);

            document.querySelector(".refreshLibrary").click();
        });

        orderNumber++;
    }
});

addBookToLibrary("Code of Honor", "Alan Gratz");
addBookToLibrary("One Piece", "Oda");
addBookToLibrary("Sam Woo is Not Afraid of Space", "");

document.querySelector(".refreshLibrary").click();