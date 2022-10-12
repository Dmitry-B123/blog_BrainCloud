const burger = document.querySelector('.burger');
const sideBar = document.querySelector('.sidebar');

burger.addEventListener('click', function () {
   document.body.classList.toggle('show-sidebar');
});