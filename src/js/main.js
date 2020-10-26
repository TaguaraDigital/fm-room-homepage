/*=================== Slide image ===================*/
const header = document.getElementById('header');
const navLogo = document.getElementById('nav__logo');
const toggleMenu = document.getElementById('toggle-menu');
const mainNav = document.getElementById('main-nav');
const navItems = document.querySelectorAll('.nav__item');

let menuOpen = false;

toggleMenu.addEventListener('click', () =>{
   header.classList.toggle('header--show');
   navLogo.classList.toggle('nav__logo--hidden');
   mainNav.classList.toggle('main-nav--show');
   toggleMenu.classList.toggle('toggle-menu--open');
 
   if (menuOpen)     {
        toggleMenu.innerHTML = `<img src="./assets/images/icon-hamburger.svg" alt="">`
    } else{
        toggleMenu.innerHTML = `<img src="./assets/images/icon-close.svg" alt="">`
    }
    menuOpen = !menuOpen 

})

/*=================== Slide image ===================*/
const slide = document.getElementById('slides')
const prev = document.getElementById('prev')
const next = document.getElementById('next')


const amountSlide = slide.children.length
let activeSlide = 1;

const showSlide = () => {
    slide.style.transform = `translateX(${activeSlide *-1 * slide.clientWidth / amountSlide}px)`
    slide.style.transition = `transform .5s ease`
}

next.addEventListener('click',()=>{
    if (activeSlide >= amountSlide - 1) return;
    activeSlide += 1
    showSlide()
});

prev.addEventListener('click',()=>{
    if (activeSlide <= 0 ) return;
    activeSlide -= 1
    showSlide()
});
