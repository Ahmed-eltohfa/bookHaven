import { books } from "../main.js";

let inputsearch = document.getElementById("search");
let inputcategory = document.getElementById("category");
const container = document.querySelector(".book_search .book-section .book-grid");

// Function to render book cards
function renderBooks(bookArray) {
    container.innerHTML = ""; // Clear old content

    bookArray.forEach((book) => {
        const maindiv = document.createElement("div");
        maindiv.classList.add("book-card");

        // Image
        const imagediv = document.createElement("div");
        imagediv.classList.add("book-image");
        const image = document.createElement("img");
        image.src = book.cover;
        image.alt = `${book.name} cover`;
        imagediv.appendChild(image);
        maindiv.appendChild(imagediv);

        // Availability
        const avalibdiv = document.createElement("div");
        avalibdiv.classList.add("avliable");
        avalibdiv.innerHTML = book.isAvailable ? "Available" : "Not Available";
        maindiv.appendChild(avalibdiv);

        // Title
        const titlediv = document.createElement("h3");
        titlediv.innerHTML = book.name;
        maindiv.appendChild(titlediv);

        // Description
        const p1 = document.createElement("p");
        p1.innerHTML = book.description;
        maindiv.appendChild(p1);

        // Author
        const p2 = document.createElement("p");
        p2.innerHTML = `<strong>Author:</strong> ${book.author}`;
        maindiv.appendChild(p2);

        // Learn more link
        const link = document.createElement("a");
        link.classList.add("learn-more");
        link.href = "../pages/bookDetails.html";
        link.innerHTML = "Learn More";
        maindiv.appendChild(link);

        container.appendChild(maindiv);
    });
}


// Combined filtering function (name + category)
function filterBooks() {
    const nameValue = inputsearch.value.trim().toLowerCase();

    const filtered = books.filter((book) => {
        const matchesName = book.name.toLowerCase().includes(nameValue);
        return matchesName;
    });

    renderBooks(filtered);
}

// Combined filtering function (name + category)
function filterBooks2() {
    const categoryValue = inputcategory.value;

    const filtered = books.filter((book) => {
        const matchesCategory = book.genre.toLowerCase === categoryValue;
        return matchesCategory;
    });

    renderBooks(filtered);
}

// Show all books on first load
renderBooks(books);

// Filter on name input
inputsearch.addEventListener("input", filterBooks);

// Filter on category change
inputcategory.addEventListener("change", filterBooks2);
    









