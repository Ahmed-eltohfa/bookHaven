import { books } from "../main.js";

// Get the query string from the current URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Find the book
const book = books.find(b => b.id === parseInt(id));

// Get container
const container = document.querySelector(".book-cardo");

if (book && container) {
    // Book image section
    const imageDiv = document.createElement("div");
    imageDiv.className = "book-imageo";

    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = "Book Cover";

    imageDiv.appendChild(img);

    // Book info section
    const infoDiv = document.createElement("div");
    infoDiv.className = "book-info";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = book.name;

    const author = document.createElement("p");
    author.className = "author";
    author.textContent = `by ${book.author}`;

    const genre = document.createElement("p");
    genre.className = "genre";
    genre.textContent = `Genre: ${book.genre}`;

    const language = document.createElement("p");
    language.className = "language";
    language.textContent = `Language: ${book.language}`;

    const release = document.createElement("p");
    release.className = "release_date";
    release.textContent = `Release date: ${formatDate(book.releaseDate)}`;

    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = book.description;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const borrowBtn = document.createElement("button");
    borrowBtn.className = "btn primary";
    borrowBtn.textContent = "Borrow";
    if (!book.isAvailable) {
        borrowBtn.disabled = true;
    }

    const wishlistBtn = document.createElement("button");
    wishlistBtn.className = "btn secondary";
    wishlistBtn.textContent = "Add to Wishlist";

    buttonsDiv.appendChild(borrowBtn);
    buttonsDiv.appendChild(wishlistBtn);

    // Append all info
    infoDiv.appendChild(title);
    infoDiv.appendChild(author);
    infoDiv.appendChild(genre);
    infoDiv.appendChild(language);
    infoDiv.appendChild(release);
    infoDiv.appendChild(desc);
    infoDiv.appendChild(buttonsDiv);

    // Append to container
    container.appendChild(imageDiv);
    container.appendChild(infoDiv);
} else {
    container.textContent = "Book not found.";
}

// Helper: Format Date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth()+1).toString().padStart(2, "0")}/${date.getFullYear()}`;
}
