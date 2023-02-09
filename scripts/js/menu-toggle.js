const menuToggle = document.querySelector('.menu-toggle')
const dropContainer = document.querySelector('.dp-menu')

// ativa o menu dropdown
menuToggle.addEventListener('click', (e) => {
    dropContainer.classList.toggle('dp-menu__actived')
})
