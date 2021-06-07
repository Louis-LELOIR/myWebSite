const Icon = document.querySelector('.header__iconHumburgerMenu');
const navBar = document.querySelector('.header__humburgerMenuList');

Icon.addEventListener ('click', () => {
    navBar.classList.toggle('change');
    Icon.classList.toggle('change');
});