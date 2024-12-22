const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnCloseElements = document.querySelectorAll('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', () => {
  toggleMenu();
  disableScroll();
});

menuBtnCloseElements.forEach(element =>
  element.addEventListener('click', () => {
    toggleMenu();
    disableScroll();
  }),
);
