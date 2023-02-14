const menuToggle = document.querySelector('.menu-toggle')
const dropContainer = document.querySelector('.dp-menu')

const menusArrow = document.querySelectorAll('.arrowButton');
const sliderCarrousel = document.querySelector('.slider-carrousel')

const toast = document.querySelector('.toast');

const newsLetter = document.querySelector('.section__newsletter_form');
const cardCart = document.querySelector('.card-cart');
const count = 0;

let activeToast = false;



const closeToast = (e) => {
  toast.classList.remove('toast__actived');
}

menuToggle.addEventListener('click', (e) => {
  dropContainer.classList.toggle('dp-menu__actived')
})

menusArrow.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    if(e.currentTarget.getAttribute('aria-details') === 'left-arrow') {
      e.preventDefault();
      sliderCarrousel.scrollLeft -= sliderCarrousel.offsetWidth;
    } else {
      e.preventDefault();
      sliderCarrousel.scrollLeft += sliderCarrousel.offsetWidth;
    }
  })
})

newsLetter.addEventListener('submit', (e) => {
  e.preventDefault();
  handleActiveToast('*****👏 PARABÉNS DEV!!! 👏***** Agora você receberá em seu e-mail nossas ofertas, descontos e promoções!!!');
})

const handleActiveToast = (text) => {
  toast.classList.toggle('toast__actived');

  toast.innerText = `${text}`;

  setTimeout(() => {
    toast.classList.remove('toast__actived')
   }, 2000);
}