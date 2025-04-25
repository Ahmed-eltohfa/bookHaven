import {user , books, storeBooks} from "../main.js"

let form = document.querySelector(".form-container")

let nametext = document.querySelector("#bookname")
let authortext = document.querySelector("#authorname")
let categorytext = document.querySelector("#category")
let desc = document.querySelector("#desc")

const input = document.getElementById('coverInput');
const preview = document.getElementById('coverPreview');

const urlParams = new URLSearchParams(window.location.search);
let bookId = urlParams.get("id")

const confirmBtn = document.querySelector(".submit-btn")
form.addEventListener("submit", function(evt) {
	evt.preventDefault()
	addBook()
})

input.addEventListener('change', function () {
    const file = this.files[0];
	const reader = new FileReader()

	reader.onload = function() { 
		const base64 = reader.result

		preview.src = base64
	}
    if (file) {
        preview.style.display = "block";
		reader.readAsDataURL(file)
    }
});


if(bookId){
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
else{
	bookId = books.length + 1;
}


function addBook(){
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

	if(bookId == books.length + 1){
		books.push(book)
	}	
	else{
		books[bookId - 1] = book
	}
	storeBooks()
	window.location.href = "./listAdmin.html"
}
// const signupbtn = document.querySelector('a.signup-btn');
// const signinbtn = document.querySelector('a.signin-btn');
// signinbtn.href = "../pages/login.html";
// signupbtn.href = "../pages/signup.html";
const authButtons = document.getElementById('auth-buttons');
    console.log(authButtons);
    if (user && authButtons) {
        authButtons.innerHTML = `<button class="logout-btn" id="logoutBtn">Logout</button>`;
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            localStorage.removeItem('user');
            authButtons ? authButtons.innerHTML = `
                    <a href="../pages/signup.html" class="signup-btn">Sign Up</a>
                    <a href="../pages/login.html" class="signin-btn">Sign In</a>
                `: null;
            window.location= "./login.html";
        });
    } else {
        authButtons ? authButtons.innerHTML = `
                <a href="../pages/signup.html" class="signup-btn">Sign Up</a>
                <a href="../pages/login.html" class="signin-btn">Sign In</a>
            `: null;
    }