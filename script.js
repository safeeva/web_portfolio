let mainMenu = document.querySelector('.menu');
let mainHamburger = document.querySelector('.hamburger');
let mainModalButton = document.querySelector('.footer__button')


mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle("menu--active");
})
mainHamburger.addEventListener('click', () => {
    mainHamburger.classList.toggle("hamburger--active");
})

