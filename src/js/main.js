const toggleMenu = document.getElementById('toggle-menu');
const mainNav = document.getElementById('main-nav');
const navItems = document.querySelectorAll('.nav__item');

let menuOpen = false;

toggleMenu.addEventListener('click', () =>{
   mainNav.classList.toggle('main-nav--show');
   toggleMenu.classList.toggle('toggle-menu--open');
 
   if (menuOpen)     {
        toggleMenu.innerHTML = `<img src="./assets/images/icon-hamburger.svg" alt="">`
    } else{
        toggleMenu.innerHTML = `<img src="./assets/images/icon-close.svg" alt="">`
    }
    menuOpen = !menuOpen 

})