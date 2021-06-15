const Icon = document.querySelector('.menuNavigation__iconHumburgerMenu');
const navBar = document.querySelector('.humburgerMenuList');

Icon.addEventListener ('click', () => {
    navBar.classList.toggle('change');
    Icon.classList.toggle('change');
});