import { books } from "../main.js";

const booksToDisplay = books;

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
    mainDiv.appendChild(imageDiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(description);
    mainDiv.appendChild(author);
    mainDiv.appendChild(link);
    const container = document.querySelector('.trending .book-grid');
    container.appendChild(mainDiv);
});