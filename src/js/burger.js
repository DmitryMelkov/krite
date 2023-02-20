export const burger = () => {
  const burgerOpen = document.querySelector('.header__burger-btn-open');
  const burgerClose = document.querySelector('.header__burger-btn-close');
  const menu = document.querySelector('.header__list');


  burgerOpen.addEventListener('click', () => {
    burgerOpen.classList.add('active');
    burgerClose.classList.add('active');
    menu.classList.add('active');
  });
  burgerClose.addEventListener('click', () => {
    burgerOpen.classList.remove('active');
    burgerClose.classList.remove('active');
    menu.classList.remove('active');
  });
};
