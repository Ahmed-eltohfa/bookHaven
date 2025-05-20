import { user, books, storeBooks, fetchBooks, loadBooks } from "../main.js"

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


async function addBook() {
    // Create book object with consistent field names
    let book = {
        name: nametext.value,
        author: authortext.value,
        year: 1925,
        genre: categorytext.value,
        cover: preview.src,
        description: desc.value,
        rating: 0,
        reviews: 0,
        language: "English",
        release_date: "1925-04-10",  // Changed to match backend
        is_available: true,          // Changed to match backend
        history: {}
    }

    // Validation (using correct variable name)
    if (!book.name || !book.author || !book.genre || !book.description) {
        alert('Please fill in all required fields');
        return;
    }

    try {
        const response = await fetch('/api/books/add/', {  // Added trailing slash
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(book)
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to save book');
        }
        

        if (data.status === 'success') {
            
            await fetchBooks();

            storeBooks();

            window.location.href = "/listAdmin";
        }else {
            alert('Error adding book: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the book: ' + error.message);
    }
}

// CSRF token helper function
function getCookie(name) {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];
    return cookieValue ? decodeURIComponent(cookieValue) : null;
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