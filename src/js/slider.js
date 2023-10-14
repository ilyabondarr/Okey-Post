
let sliderContainer = document.querySelector('.slider-container');
let sliderWrapper = document.querySelector('.slider-wrapper');
let slider = document.querySelectorAll('.slider');
if (window.innerWidth <= 1100) {
    sliderContainer.className = 'swiper-container';
    sliderWrapper.className = 'swiper-wrapper';
    slider.forEach(item => item.className = 'swiper-slide');

    new Swiper('.swiper-container', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1700,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        breakpoints: {
            1100: {
                slidesPerView: 3
            },
            460: {
                slidesPerView: 2
            }
        }
    });
}