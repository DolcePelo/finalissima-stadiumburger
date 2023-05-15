
var imagenes = [
                "./assets/img/group-friends-watching-sport-together-bar.jpg",
                "./assets/img/two-happy-female-friends-toasting-glass-cocktail.jpg",
                "./assets/img/sport-fans-cheering-bar-pub-drinking-beer-while-watching-sport-competition.jpg"
                ];

document.Imagen.src = imagenes[0];

var SliderDerecha = document.querySelector(".slider-derecho");
var SliderIzquierda = document.querySelector(".slider-izquierdo");
var Contador = 0;



function moverDerecha()
    {
        Contador++;
        if(Contador > imagenes.length -1)
        {
            Contador =  0;
        }
        document.Imagen.src = imagenes[Contador];
    }
    var Intervalo = setInterval(moverDerecha, 3000);
SliderDerecha.addEventListener('click', function(){
    clearInterval(Intervalo);
    moverDerecha();
    Intervalo = setInterval(moverDerecha, 2500);
})

function moverIzquierda()
    {
        Contador--;
        if(Contador < 0){
            Contador = imagenes.length -1
        }
        document.Imagen.src = imagenes[Contador];
    }

SliderIzquierda.addEventListener('click', function(){
    clearInterval(Intervalo);
    moverIzquierda();
    Intervalo = setInterval(moverDerecha, 3000);
})


// --------------------------------MENU---------------------------------------------//

// let botonComida = document.getElementById('boton__comida');
// let botonBebida = document.getElementById('boton__bebida');

// let menuComida = document.getElementById('menu__comida');
// let menuBebida = document.getElementById('menu__bebida');

// botonComida.addEventListener('click', mostrarComida);
// botonBebida.addEventListener('click', mostrarBebida);

// function mostrarComida (){
//     menuComida.style.display = 'block';
//     menuBebida.style.display = 'none';
// }

// function mostrarBebida (){
//     menuComida.style.display = 'none';
//     menuBebida.style.display = 'block';
// }

// --------------------------------Header Navbar-------------------------//

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

