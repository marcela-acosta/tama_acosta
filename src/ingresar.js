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
    this.style.color = "#37bcf9";
})

boton.addEventListener('mouseover', function(){
    this.style.background = "#f29e9c";
});

botonRegistro.addEventListener('mouseover', function(){
    this.style.background = "#f29e9c";
});

// Mouseout
olvidoContraseña.addEventListener('mouseout', function(){
    this.style.color = "#0d6efd";
})

boton.addEventListener('mouseout', function(){
    this.style.background = "#ed494a";
});

botonRegistro.addEventListener('mouseout', function(){
    this.style.background = "white";
});

// Focusin
boton.addEventListener('focusin', function(){
    this.style.background = "#f29e9c";
});

botonRegistro.addEventListener('focusin', function(){
    this.style.background = "#f29e9c";
});

// Focusout
boton.addEventListener('focusout', function(){
    this.style.background = "#ed494a";
});

botonRegistro.addEventListener('focusout', function(){
    this.style.background = "white";
});

