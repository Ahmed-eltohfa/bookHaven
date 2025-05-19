import { user, books, storeBooks, fetchBooks } from "../main.js"

let form = document.querySelector(".form-container")

let nametext = document.querySelector("#bookname")
let authortext = document.querySelector("#authorname")
let categorytext = document.querySelector("#category")
let desc = document.querySelector("#desc")

const input = document.getElementById('coverInput');
const preview = document.getElementById('coverPreview');

const urlParams = new URLSearchParams(window.location.search);
let bookId = window.location.pathname.split('/')[2]; // Get the last part of the URL

const confirmBtn = document.querySelector(".submit-btn")
form.addEventListener("submit", function (evt) {
    evt.preventDefault()
    addBook()
})

input.addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader()

    reader.onload = function () {
        const base64 = reader.result

        preview.src = base64
    }
    if (file) {
        preview.style.display = "block";
        reader.readAsDataURL(file)
    }
});


if (bookId > 0) {
    bookId = parseInt(bookId);
    nametext.value = bookId;
    let book = books[bookId - 1];

    nametext.value = book.name;
    authortext.value = book.author;
    categorytext.value = book.genre;
    desc.value = book.description;


    preview.style.display = "block";
    preview.src = book.cover;
}
else {
    bookId = books.length + 1;
}


function addBook() {
    let book = {
        id: bookId,
        name: nametext.value,
        year: 1925,
        author: authortext.value,
        genre: categorytext.value,
        cover: preview.src,
        description: desc.value,
        rating: 0,
        reviews: 0,
        language: "English",
        releaseDate: "1925-04-10",
        isAvailable: true,
        history: {
        }
    }

    if (bookId == books.length + 1) {
        books.push(book);
        // const response = await fetch('/api/books/add',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(book)
        // });
    }
    else {
        books[bookId - 1] = book;
    }
    fetchBooks();
    // add_book(book);
    storeBooks();
    window.location.href = "../../listAdmin";
}

const authButtons = document.getElementById('auth-buttons');
if (user && authButtons) {
    authButtons.innerHTML = `<button class="logout-btn" id="logoutBtn">Logout</button>`;
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('user');
        authButtons ? authButtons.innerHTML = `
                    <a href="../../signup" class="signup-btn">Sign Up</a>
                    <a href="../../login" class="signin-btn">Sign In</a>
                `: null;
        window.location = "../../login.html";
    });
} else {
    authButtons ? authButtons.innerHTML = `
                <a href="../../signup" class="signup-btn">Sign Up</a>
                <a href="../../login" class="signin-btn">Sign In</a>
            `: null;
}