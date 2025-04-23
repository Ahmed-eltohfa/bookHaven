import {books, storeBooks} from "../main.js"

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
	nametext.value=bookId
	let book = books[bookId - 1]

	nametext.value = book.name
	authortext.value = book.author
	categorytext.value = book.genre
	desc.value = book.description

	
	preview.style.display = "block";
	preview.src = book.cover;
}
else{
	bookId = books.length + 1
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