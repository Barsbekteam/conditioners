const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        '480': {
            slidesPerView: 1,
            spaceBetween: 40,},
    }
});

const btn = document.querySelector('.question--btn button')
btn.addEventListener('click', () => {
    document.querySelector('.question--modal').style.display = 'block'
})
const close = document.querySelector('.question--modal__bg--square__close')
close.addEventListener('click', () => {
    document.querySelector('.question--modal').style.display = 'none'
})

const nav = document.querySelector('nav')

document.querySelector('#burger').addEventListener('click',(e) => {
    e.currentTarget.classList.toggle("active")
    nav.classList.toggle('show')
})