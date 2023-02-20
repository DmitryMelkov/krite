import Swiper, { Navigation } from 'swiper';

export const productDaySwiper = () => {
  const swiper = new Swiper('.product-day__swiper', {
    modules: [Navigation],
    allowTouchMove: false,
    navigation: {
      nextEl: '.product-day__btn-next',
      prevEl: '.product-day__btn-prev',
    },
  });


};

export const productDaySwiperImg = () => {
  const swiper = new Swiper('.product-day__swiper-img', {
    modules: [Navigation],
    navigation: {
      nextEl: '.product-day__swiper-img-next',
      prevEl: '.product-day__swiper-img-prev',
    },
  });
};
