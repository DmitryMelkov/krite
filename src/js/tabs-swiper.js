import Swiper, { Navigation, Pagination } from 'swiper';

export const tabsSwiper = () => {
  const swiper = new Swiper('.tabs__swiper', {
    modules: [ Navigation],
    allowTouchMove: false,
    navigation: {
      nextEl: '.sale__btn-next',
      prevEl: '.sale__btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      628: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  });
};


export const saleSwiper = () => {
  const swiper = new Swiper('.sale__swiper', {
    modules: [Pagination],

    pagination: {
      el: '.sale__swiper-pagination',
      clickable: true,
    },
  });
};