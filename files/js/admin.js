import {books, user} from "../main.js"

const input = document.getElementById('coverInput');
const preview = document.getElementById('coverPreview');

let inputsearch = document.getElementById("search")

const container = document.querySelector(".library-table tbody")


// input.addEventListener('change', function () {
//     const file = this.files[0];
//     if (file) {
//         preview.style.display = "block";
//         preview.src = URL.createObjectURL(file);
//     }
// });


function addBook(bookDetails) {
	const row = document.createElement("tr");

	// Helper to create a td with optional class and content
	function createCell(label, content, className = "") {
		const cell = document.createElement("td");
		cell.setAttribute("data-label", label);
		if (className) cell.classList.add(className);

		if (typeof content === "string" || typeof content === "number") {
			cell.textContent = content;
		} else if (content instanceof HTMLElement) {
			cell.appendChild(content);
		}

		return cell;
	}

	// Create image elements
	const coverImg = document.createElement("img");
	coverImg.src = bookDetails.cover;
	coverImg.classList.add("cover-img");

	const avatarImg = document.createElement("img");
	avatarImg.src = "../images/profile.png";
	avatarImg.classList.add("user-avatar");

	// Create actions cell with buttons
	const actionsCell = document.createElement("td");
	actionsCell.setAttribute("data-label", "Actions");

	const editLink = document.createElement("a");
	editLink.href = "./addBook.html";

	const editBtn = document.createElement("button");
	editBtn.className = "btn blue";
	editBtn.textContent = "Edit";

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "btn blue";
	deleteBtn.textContent = "Delete";

	editLink.appendChild(editBtn);
	actionsCell.appendChild(editLink);
	actionsCell.appendChild(deleteBtn);

	// Append all cells to the row
	row.appendChild(createCell("Book ID", bookDetails.id));
	row.appendChild(createCell("Title", bookDetails.name));
	row.appendChild(createCell("Author", bookDetails.author));
	row.appendChild(createCell("Rating", calcStars(bookDetails.rating), "stars"));
	row.appendChild(createCell("Cover Image", coverImg));
	row.appendChild(createCell("Added By", avatarImg));
	row.appendChild(actionsCell);

	// Append the row to the table body
	const table = document.querySelector('.library-table');
	const tbody = table.tBodies[0];
	tbody.appendChild(row);
}

function calcStars(rating){
	rating = Math.floor(rating * 2) / 2
	let str = ""

	str += "★".repeat(Math.floor(rating))

	if(Math.floor(rating) != rating){
		str += "⯨"
	}

	return str

}

function renderBooks(bookslist) {
	container.innerHTML = ""

	bookslist.forEach(element => {
		addBook(element)
	});
	
}

function fitlerBooks(){
	const name = inputsearch.value.trim().toLowerCase()

	let filtered = books.filter((book) => {
		return book.name.toLocaleLowerCase().includes(name)
	})

	renderBooks(filtered)
}

renderBooks(books);

inputsearch.addEventListener("input",fitlerBooks)