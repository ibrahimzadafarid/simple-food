$(function () {
  $('.reviews__inner').slick({
    dots: true,
    arrows: true,
    fade: true,
    appendDots: $('.slick-dots'),
    prevArrow: $('.reviews__arrow--prev'),
    nextArrow: $('.reviews__arrow--next'),
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const filterBtn = document.querySelectorAll('.popular__filter-btn');
  const menuLinks = document.querySelectorAll('.menu__link');

  filterBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtn.forEach((button) => button.classList.remove('popular__filter-btn--active'));
      btn.classList.add('popular__filter-btn--active');
    });
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      menuLinks.forEach((menuLink) => menuLink.classList.remove('menu__link--active'));
      link.classList.add('menu__link--active');
    });
  });
});

var mixer = mixitup('.popular__content');
