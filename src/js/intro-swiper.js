import Swiper, { Navigation, Pagination } from 'swiper';

export const introSwiper = () => {
  const swiper = new Swiper('.intro__swiper', {
    modules: [Pagination, Navigation],
    navigation: {
      nextEl: '.intro__btn-next',
      prevEl: '.intro__btn-prev',
    },
    pagination: {
      el: '.intro__swiper-pagination',
      clickable: true,
    },
  });
};
