$(function () {});

document.addEventListener('DOMContentLoaded', () => {
  const filterBtn = document.querySelectorAll('.popular__filter-btn');

  filterBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtn.forEach((button) => button.classList.remove('popular__filter-btn--active'));
      btn.classList.add('popular__filter-btn--active');
    });
  });
});

var mixer = mixitup('.popular__content');
