const navbar = document.querySelector('#navbar');
const hamburguesa = document.querySelector('#hamburguesa');
const cerrar = document.querySelector('#cerrar');

hamburguesa.addEventListener("click", () => {
    navbar.style.display = 'block';
    hamburguesa.style.display = 'none';
})

cerrar.addEventListener("click", () => {
    navbar.style.display = 'none';
    hamburguesa.style.display = 'block';
})

// --------------------------------MENU---------------------------------------------//

let botonComida = document.querySelector('#boton__comida');
let botonBebida = document.querySelector('#boton__bebida');

let menuComida = document.querySelector('#menu__comida');
let menuBebida = document.querySelector('#menu__bebida');

botonComida.addEventListener('click', mostrarComida);
botonBebida.addEventListener('click', mostrarBebida);

function mostrarComida (){
    menuComida.style.display = 'flex';
    menuBebida.style.display = 'none';
}

function mostrarBebida (){
    menuComida.style.display = 'none';
    menuBebida.style.display = 'flex';
}

