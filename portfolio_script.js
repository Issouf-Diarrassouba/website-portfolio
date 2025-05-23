const projectSwiper = new Swiper('.project-carousel', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  slidesPerView: 1.2,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
