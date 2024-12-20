const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.products-section__carousel__pagination',
  },
  navigation: {
    nextEl: '.products-section__carousel__button.next',
    prevEl: '.products-section__carousel__button.prev',
  },
});
