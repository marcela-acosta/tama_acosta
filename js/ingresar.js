// Estilos con JS
let boton = document.querySelector("#boton");
boton.style.background = "#ed494a";
boton.style.color = "white";

let botonRegistro = document.querySelector("#botonRegistro");
botonRegistro.style.background = "white";
botonRegistro.style.color = "#ed494a";

// Eventos del mouse
function changeColor(){
    let fondo = boton.style.background;
    if(fondo == "blue"){
        boton.style.background = "orange";
    }else{
        boton.style.background = "blue";
    }
    return true;
}

// Click
boton.addEventListener('click', function(){
    changeColor();
});

// Mouseover
let olvidoContraseña = document.querySelector(".a-link");
olvidoContraseña.addEventListener('mouseover', function(){
    olvidoContraseña.style.color = "#37bcf9";
})

boton.addEventListener('mouseover', function(){
    boton.style.background = "#f29e9c";
});

botonRegistro.addEventListener('mouseover', function(){
    botonRegistro.style.background = "#f29e9c";
});

// Mouseout
olvidoContraseña.addEventListener('mouseout', function(){
    olvidoContraseña.style.color = "#0d6efd";
})

boton.addEventListener('mouseout', function(){
    boton.style.background = "#ed494a";
});

botonRegistro.addEventListener('mouseout', function(){
    botonRegistro.style.background = "white";
});

// Focusin
boton.addEventListener('focusin', function(){
    boton.style.background = "#f29e9c";
});

botonRegistro.addEventListener('focusin', function(){
    botonRegistro.style.background = "#f29e9c";
});

// Focusout
boton.addEventListener('focusout', function(){
    boton.style.background = "#ed494a";
});

botonRegistro.addEventListener('focusout', function(){
    botonRegistro.style.background = "white";
});

