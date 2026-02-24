import '../sass/main.scss'
console.log('Home JS loaded');



const linkFormaciones = document.querySelector('.link_formaciones > a');
const formacionesMaster = document.querySelector('.link_formaciones_submenu');



linkFormaciones.addEventListener('click', (evento) => {
       evento.preventDefault();

    // getComputedStyle:  Es una función del navegador que devuelve todos los estilos finales aplicados a un elemento después de css eterno o interno,
    //  clases etilos por defecto del navegador etc...
    const displayActual = getComputedStyle(formacionesMaster).display;

    formacionesMaster.style.display =
        displayActual === 'none' ? 'block' : 'none';
});


