const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

});
console.log("bitch");