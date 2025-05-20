import { books, loadUser, storeBooks, user } from "../main.js";

const inputSearch = document.getElementById("search");
const container = document.querySelector(".library-table tbody");

let currentConfirmation = null;

// function deleteBook(bookId) {
//     loadUser();
//     if (!user || !user.isAdmin) {
//         alert("Not an Admin");
//         window.location = '../../';
//         return;
//     }
//     const index = books.findIndex(b => b.id === bookId);
//     if (index !== -1) {
//         books.splice(index, 1);
//         let id = 1;
//         books.forEach(book => {
//             book.id = id;
//             id += 1;
//         });

//         storeBooks();
//         renderBooks(books);
//     }

// }
async function deleteBook(bookId) {
    try {
        const response = await fetch(`/api/books/${bookId}/`, {
            method: "DELETE"
        });


        const data = await response.json();
        if (response.ok && data.status === 'success') {
            await fetchBooks();
            storeBooks();
            window.location.reload();
        } else {
            alert('Error: ' + (data.message || 'Unknown error'));
        }
    }
    catch (error) {
        console.error("Error deleting book:", error);
        // alert("An error occurred while deleting the book.");
        return;
    }

}

function createActionButtons(bookDetails) {
    const actionsTd = document.createElement("td");
    actionsTd.setAttribute("data-label", "Actions");

    const renderDefaultButtons = () => {
        actionsTd.innerHTML = "";

        const editLink = document.createElement("a");
        editLink.href = `addBook/${bookDetails.id}`;
        const editBtn = document.createElement("button");
        editBtn.className = "btn blue";
        editBtn.textContent = "Edit";
        editLink.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn blue";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            if (currentConfirmation && currentConfirmation !== actionsTd) {
                currentConfirmation.reset();
            }

            actionsTd.innerHTML = "";

            const yesBtn = document.createElement("button");
            yesBtn.className = "btn red";
            yesBtn.textContent = "Yes";
            yesBtn.addEventListener("click", () => deleteBook(bookDetails.id));

            const noBtn = document.createElement("button");
            noBtn.className = "btn green";
            noBtn.textContent = "No";
            noBtn.addEventListener("click", renderDefaultButtons);

            actionsTd.appendChild(yesBtn);
            actionsTd.appendChild(noBtn);

            currentConfirmation = actionsTd;
            currentConfirmation.reset = renderDefaultButtons;
        });

        actionsTd.appendChild(editLink);
        actionsTd.appendChild(deleteBtn);
    };

    renderDefaultButtons();
    return actionsTd;
}

function addBook(bookDetails) {
    loadUser();
    if (!user || !user.isAdmin) {
        alert("Not an Admin");
        window.location = '../../';
        return;
    }
    const row = document.createElement("tr");

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

    const coverImg = document.createElement("img");
    coverImg.src = bookDetails.cover;
    coverImg.classList.add("cover-img");

    const avatarImg = document.createElement("img");
    avatarImg.src = "/static/images/profile.png";
    avatarImg.classList.add("user-avatar");

    row.appendChild(createCell("Book ID", bookDetails.id));
    row.appendChild(createCell("Title", bookDetails.name));
    row.appendChild(createCell("Author", bookDetails.author));
    row.appendChild(createCell("Rating", calcStars(bookDetails.rating), "stars"));
    row.appendChild(createCell("Cover Image", coverImg));
    row.appendChild(createCell("Added By", avatarImg));
    row.appendChild(createActionButtons(bookDetails));

    container.appendChild(row);
}

function calcStars(rating) {
    rating = Math.floor(rating * 2) / 2;
    let str = "★".repeat(Math.floor(rating));
    if (rating % 1 !== 0) str += "½";
    str += "☆".repeat(5 - str.length);
    return str;
}

function renderBooks(bookList) {
    container.innerHTML = "";
    let fbooks = filterBooks(bookList)
    fbooks.forEach(book => {
        addBook(book);
    });

}

function filterBooks(list) {
    const name = inputSearch.value.trim().toLowerCase();
    let filtered = list.filter(book => book.name.toLowerCase().includes(name));
    return filtered
}

if (!user || !user.isAdmin) {
    alert("Not an Admin");
    window.location = '../../';
} else {
    renderBooks(books);
}
inputSearch.addEventListener("input", function () { renderBooks(books) });


const authButtons = document.getElementById('auth-buttons');
if (user && authButtons) {
    authButtons.innerHTML = `<button class="logout-btn" id="logoutBtn">Logout</button>`;
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('user');
        authButtons ? authButtons.innerHTML = `
                    <a href="../../signup" class="signup-btn">Sign Up</a>
                    <a href="../../login" class="signin-btn">Sign In</a>
                `: null;
        window.location = "../../login";
    });
} else {
    authButtons ? authButtons.innerHTML = `
                <a href="../../signup" class="signup-btn">Sign Up</a>
                <a href="../../login" class="signin-btn">Sign In</a>
            `: null;
}