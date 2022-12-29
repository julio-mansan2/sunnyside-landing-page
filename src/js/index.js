const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.getElementById('menu_box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
    }})