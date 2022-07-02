/* eslint-disable linebreak-style */
const humburger = document.querySelector('.humburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.querySelector('.close-button');
humburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
