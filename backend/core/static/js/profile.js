import { user, books as allBooks } from "../main.js";

if (user) {
    // Profile Rendering
    const profileHeader = document.querySelector('.profile-header');

    const profilePic = document.createElement('img');
    profilePic.src = "/static/images/profile.png";
    profilePic.alt = 'Profile Picture';
    profilePic.classList.add('profile-pic');

    const profileInfo = document.createElement('div');
    profileInfo.classList.add('profile-info');

    const userName = document.createElement('h2');
    userName.textContent = `${user.firstName} ${user.lastName}`;

    const userEmail = document.createElement('p');
    userEmail.textContent = user.email;

    const joinedSince = new Date(user.joinedSince);
    const formattedDate = joinedSince.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    const userMemberSince = document.createElement('p');
    userMemberSince.textContent = `Member since ${formattedDate}`;

    profileInfo.append(userName, userEmail, userMemberSince);
    profileHeader.append(profilePic, profileInfo);

    // Book Rendering
    const userBooksContainer = document.querySelector('.book-grid');
    const filterSelect = document.querySelector('#filter');
    const searchInput = document.querySelector('.search-input');

    // Helper: Render Books
    function renderBooks(booksData) {
        userBooksContainer.innerHTML = ''; // clear previous cards

        booksData.forEach(({ bookId, returnDate, status }) => {
            const book = allBooks.find(b => b.id === bookId);
            if (!book) return;

            const card = document.createElement('div');
            card.className = 'book-card';

            card.innerHTML = `
            <div class="book-image">
            <img src="${book.cover}" alt="${book.name} cover image">
            </div>
            <h3>${book.name}</h3>
            <p>Due: ${returnDate}</p>
            <p>Status: ${status}</p>
            <a class="learn-more" href="../bookDetails/${book.id}">
            ${status === 'pending' ? 'Renew' : status === 'overdue' ? 'Pay Fine' : 'Details'}
            </a>
            `;

            userBooksContainer.appendChild(card);
        });
    }

    // Filtering Logic
    function filterBooks() {
        const filterValue = filterSelect.value;
        const searchValue = searchInput.value.toLowerCase();

        const filtered = user.userBooks.filter(({ bookId, status }) => {
            const book = allBooks.find(b => b.id === bookId);
            if (!book) return false;

            const matchesStatus = filterValue === 'all' || status === filterValue;
            const matchesSearch = book.name.toLowerCase().includes(searchValue);
            return matchesStatus && matchesSearch;
        });

        renderBooks(filtered);
    }

    // Initial Render
    renderBooks(user.userBooks);

    // Event Listeners
    filterSelect.addEventListener('change', filterBooks);
    searchInput.addEventListener('input', filterBooks);

    // const signupbtn = document.querySelector('a.signup-btn');
    // const signinbtn = document.querySelector('a.signin-btn');
    // console.log(signinbtn);
    // console.log(signupbtn);
    // signinbtn.href = "../pages/login.html";
    // signupbtn.href = "../pages/signup.html";

    const authButtons = document.getElementById('auth-buttons');
    // console.log(authButtons);
    if (user && authButtons) {
        authButtons.innerHTML = `<button class="logout-btn" id="logoutBtn">Logout</button>`;
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            localStorage.removeItem('user');
            authButtons ? authButtons.innerHTML = `
                    <a href="../signup" class="signup-btn">Sign Up</a>
                    <a href="../login" class="signin-btn">Sign In</a>
                `: null;
            window.location = "./login.html";
        });
    } else {
        authButtons ? authButtons.innerHTML = `
                <a href="../signup" class="signup-btn">Sign Up</a>
                <a href="../login" class="signin-btn">Sign In</a>
            `: null;
    }
} else {
    alert("not logged in");
    window.location = '../';
}


