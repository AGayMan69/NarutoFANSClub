const hamburger_btn = document.querySelector('.hamburger-toggle');
const logo = document.querySelector('.logo');
const nav_links = document.querySelector('.nav__links');

hamburger_btn.addEventListener(('click'), () => {
    nav_links.classList.toggle('active');
    hamburger_btn.classList.toggle('active');
    logo.classList.toggle('active')
});