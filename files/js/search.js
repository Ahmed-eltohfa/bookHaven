import { books } from "../main.js";











books.forEach( (book) => {
    const maindiv = document.createElement(`div`);
    maindiv.classList.add(`book-card`);
    // image
    const imagediv = document.createElement(`div`);
    imagediv.classList.add(`book-image`);
    const image = document.createElement(`img`);
    image.src=book.cover;
    imagediv.appendChild(image);
    maindiv.appendChild(imagediv);
    // Avliable
    const avalibdiv = document.createElement(`div`);
    avalibdiv.classList.add(`avliable`);
    if(book.isAvailable === true){
        avalibdiv.innerHTML = `Avaliable`;
    }else{
        avalibdiv.innerHTML = `Not Avaliable`;
    }
    maindiv.appendChild(avalibdiv);
    // title
    const titlediv = document.createElement(`h3`);
    titlediv.innerHTML=book.name;
    maindiv.appendChild(titlediv);
    //description
    const p1 = document.createElement(`p`);
    p1.innerHTML=book.description;
    maindiv.appendChild(p1);
    //author
    const p2 = document.createElement(`p`);
    p2.innerHTML=`<strong>Author:</strong> ${book.author}`;
    maindiv.appendChild(p2);
    // learn more link
    const link = document.createElement(`a`);
    link.classList.add(`learn-more`);
    link.href="../pages/bookDetails.html";
    link.innerHTML="Learn More";
    maindiv.appendChild(link);

    // append to container
    const container = document.querySelector(`.book_search .book-section .book-grid`);
    container.appendChild(maindiv);
});




