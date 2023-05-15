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

