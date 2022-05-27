
let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.nav__menu--mobile');
let close = document.querySelector('.close');
burger.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.add('nav__menu--mobile--active');

    // menu.style.display = 'flex';
  });


  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.remove('nav__menu--mobile--active');

    // menu.style.display = 'flex';
  });
  



