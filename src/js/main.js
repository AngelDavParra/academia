import '../sass/main.scss'
console.log('Home JS loaded');


const botonFormaciones = document.querySelector('.btn_formaciones');
const submenu = document.querySelector('#submenu-formaciones');

botonFormaciones.addEventListener('click', function (e) {
  e.stopPropagation();
  const abierto = submenu.classList.toggle('activo');
  botonFormaciones.setAttribute('aria-expanded', abierto);
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.link_formaciones')) {
    submenu.classList.remove('activo');
    botonFormaciones.setAttribute('aria-expanded', false);
  }
});

