import { books } from "../main.js";

const booksToDisplay = books.filter((book) => book.history.borrowed + book.history.wishlisted > 500);
const recommendedBooks = books.filter((book) => book.history.borrowed + book.history.wishlisted > 500);


booksToDisplay.forEach((book) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('book-card');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('book-image');
    const image = document.createElement('img');
    image.src = book.cover;
    image.alt = `${book.name} cover image`;
    imageDiv.appendChild(image);
    const title = document.createElement('h3');
    title.innerHTML = book.name;
    const description = document.createElement('p');
    description.innerHTML = book.description;
    const author = document.createElement('p');
    author.innerHTML = `<strong>Author:</strong> ${book.author}`;
    const link = document.createElement('a');
    link.href = `./files/pages/bookDetails.html?id=${book.id}`;
    link.classList.add('learn-more');
    link.innerHTML = 'Learn More';

    // Avliable
    const avalibdiv = document.createElement(`div`);
    avalibdiv.classList.add(`avliable`);
    if (book.isAvailable === true) {
        avalibdiv.innerHTML = `Avaliable`;
        avalibdiv.classList.remove(`not-avliable`);
    } else {
        avalibdiv.innerHTML = `Not Avaliable`;
        avalibdiv.classList.add(`not-avliable`);
    }
    mainDiv.appendChild(imageDiv);
    mainDiv.appendChild(avalibdiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(description);
    mainDiv.appendChild(author);
    mainDiv.appendChild(link);
    const container = document.querySelector('.trending .book-grid');
    container.appendChild(mainDiv);
});

recommendedBooks.forEach((book) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('book-card');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('book-image');
    const image = document.createElement('img');
    image.src = book.cover;
    image.alt = `${book.name} cover image`;
    imageDiv.appendChild(image);
    const title = document.createElement('h3');
    title.innerHTML = book.name;
    const description = document.createElement('p');
    description.innerHTML = book.description;
    const author = document.createElement('p');
    author.innerHTML = `<strong>Author:</strong> ${book.author}`;
    const link = document.createElement('a');
    link.href = `./files/pages/bookDetails.html?id=${book.id}`;
    link.classList.add('learn-more');
    link.innerHTML = 'Learn More';

    // Avliable
    const avalibdiv = document.createElement(`div`);
    avalibdiv.classList.add(`avliable`);
    if (book.isAvailable === true) {
        avalibdiv.innerHTML = `Avaliable`;
        avalibdiv.classList.remove(`not-avliable`);
    } else {
        avalibdiv.innerHTML = `Not Avaliable`;
        avalibdiv.classList.add(`not-avliable`);
    }

    mainDiv.appendChild(imageDiv);
    mainDiv.appendChild(avalibdiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(description);
    mainDiv.appendChild(author);
    mainDiv.appendChild(link);

    const container = document.querySelector('.recommended .book-grid');

    container.appendChild(mainDiv);
});


const authButtons = document.getElementById('auth-buttons');
console.log(authButtons);

const signupbtn = document.querySelector('.signup-btn');
const signinbtn = document.querySelector('.signin-btn');
signinbtn.href = "./files/pages/login.html";
signupbtn.href = "./files/pages/signup.html";
