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

// Login falso

$(document).ready(function(){

    login.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event);
    });

    $("#login").on("submit", function(){

        let formName = $("#formName").val();
        localStorage.setItem("formName". formName);
    });
    
    let formName = localStorage.getItem("formName");

    if(formName != null && formName != "undefined"){
        let parrafo = $("#bienvenido p");

        parrafo.html("Bienvenido, "+formName);
        parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
});