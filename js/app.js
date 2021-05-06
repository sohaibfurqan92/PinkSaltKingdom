const navBtn = document.getElementById('mobile-nav');
const mobileMenu = document.getElementById('mobile-menu');

const toggleMenu = function (e) {
  if (mobileMenu.classList.contains('showNav')) {
    mobileMenu.classList.remove('showNav');
  } else {
    mobileMenu.classList.add('showNav');
  }
  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', function () {
  if (mobileMenu.classList.contains('showNav')) {
    mobileMenu.classList.remove('showNav');
  }
});

navBtn.addEventListener('click', toggleMenu);
