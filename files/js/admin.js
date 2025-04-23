import {books, user} from "../main.js"


let inputsearch = document.getElementById("search")

const container = document.querySelector(".library-table tbody")


function deleteBook(index){
	books.splice(index - 1,1)
	renderBooks(books)
}

let currentConfirmation = null; // To track currently open confirmation

function createActionButtons(bookDetails) {
    const actionsTd = document.createElement("td");
    actionsTd.setAttribute("data-label", "Actions");

    // Create edit link and button
    const editLink = document.createElement("a");
    editLink.href = `./addBook.html?id=${bookDetails.id}`;

    const editBtn = document.createElement("button");
    editBtn.className = "btn blue";
    editBtn.textContent = "Edit";

    editLink.appendChild(editBtn);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn blue";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        // If there's an existing confirmation open, reset it
        if (currentConfirmation && currentConfirmation !== actionsTd) {
            resetActionButtons(currentConfirmation,bookDetails);
        }

        // Replace with confirmation buttons
        actionsTd.innerHTML = "";

        const yesBtn = document.createElement("button");
        yesBtn.className = "btn red";
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", function () {
            deleteBook(bookDetails.id);
        });

        const noBtn = document.createElement("button");
        noBtn.className = "btn green";
        noBtn.textContent = "No";
        noBtn.addEventListener("click", function () {
            resetActionButtons(actionsTd,bookDetails);
        });

        actionsTd.appendChild(yesBtn);
        actionsTd.appendChild(noBtn);

        // Update the currently open confirmation
        currentConfirmation = actionsTd;
    });

    // Append original buttons
    actionsTd.appendChild(editLink);
    actionsTd.appendChild(deleteBtn);

    return actionsTd;
}

// Helper function to restore buttons
function resetActionButtons(tdElement, bookDetails) {
    tdElement.innerHTML = "";

    const editLink = document.createElement("a");
    editLink.href = `./addBook.html?id=${bookDetails.id}`;

    const editBtn = document.createElement("button");
    editBtn.className = "btn blue";
    editBtn.textContent = "Edit";
    editLink.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn blue";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        if (currentConfirmation && currentConfirmation !== tdElement) {
            resetActionButtons(currentConfirmation, currentConfirmation.bookDetails);
        }

        tdElement.innerHTML = "";

        const yesBtn = document.createElement("button");
        yesBtn.className = "btn red";
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", function () {
            deleteBook(bookDetails.id);
        });

        const noBtn = document.createElement("button");
        noBtn.className = "btn gray";
        noBtn.textContent = "No";
        noBtn.addEventListener("click", function () {
            resetActionButtons(tdElement, bookDetails);
        });

        tdElement.appendChild(yesBtn);
        tdElement.appendChild(noBtn);

        currentConfirmation = tdElement;
        currentConfirmation.bookDetails = bookDetails; // Store bookDetails on the element
    });

    tdElement.appendChild(editLink);
    tdElement.appendChild(deleteBtn);

    if (currentConfirmation === tdElement) {
        currentConfirmation = null;
    }
}


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

	
	// Append all cells to the row
	row.appendChild(createCell("Book ID", bookDetails.id));
	row.appendChild(createCell("Title", bookDetails.name));
	row.appendChild(createCell("Author", bookDetails.author));
	row.appendChild(createCell("Rating", calcStars(bookDetails.rating), "stars"));
	row.appendChild(createCell("Cover Image", coverImg));
	row.appendChild(createCell("Added By", avatarImg));
	row.appendChild(createActionButtons(bookDetails))
	// row.appendChild(actionsCell);

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
		str += "⯪"
	}

	str += "☆".repeat(5 - str.length)
	return str

}

function renderBooks(bookslist) {
	container.innerHTML = ""

	let id = 1
	bookslist.forEach(element => {
		element.id = id
		id += 1
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