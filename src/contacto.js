// Evento submit
window.addEventListener('load', function(){
    let formularioContacto = document.querySelector("#formularioContacto");
    formularioContacto.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event);
    });

    let cajaLateral = document.querySelector(".cajaLateral");
    cajaLateral.style.display = "none";

    formularioContacto.addEventListener('submit', function(){
        let nombre = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = parseInt(document.querySelector("#phone").value);
        let topic = document.querySelector("#topic").value;
        let instructions = document.querySelector("#textarea").value;

        cajaLateral.style.display = "block";

        let pName = document.querySelector("#pName span");
        let pEmail = document.querySelector("#pEmail span");
        let pPhone = document.querySelector("#pPhone span");
        let pTopic = document.querySelector("#pTopic span");
        let pInstructions = document.querySelector("#pInstructions span");

        pName.innerHTML = nombre;
        pEmail.innerHTML = email;
        pPhone.innerHTML = phone;
        pTopic.innerHTML = topic;
        pInstructions.innerHTML = instructions;
    });
});

// Eventos del mouse
let botonSubmit = document.querySelector("#submit");

// Click
botonSubmit.addEventListener('click', function(){
    changeColor();
});

// Mouseover
botonSubmit.addEventListener('mouseover', function(){
    this.style.background = "#f29e9c";
});

// Mouseout
botonSubmit.addEventListener('mouseout', function(){
    this.style.background = "#ed494a";
});

// Focusin
botonSubmit.addEventListener('focusin', function(){
    this.style.background = "#f29e9c";
});

// Focusout
botonSubmit.addEventListener('focusout', function(){
    this.style.background = "#ed494a";
});

//Evento submit para TIENDA
window.addEventListener('load', function(){
    let formularioContacto = document.querySelector("#formularioContacto");
    formularioContacto.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event);
    });

    let cajaLateral = document.querySelector(".cajaLateral");
    cajaLateral.style.display = "none";

    formularioContacto.addEventListener('submit', function(){
        let nombre = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = parseInt(document.querySelector("#phone").value);
        let topic = document.querySelector("#topic").value;
        let instructions = document.querySelector("#textarea").value;

        cajaLateral.style.display = "block";

        let pName = document.querySelector("#pName span");
        let pEmail = document.querySelector("#pEmail span");
        let pPhone = document.querySelector("#pPhone span");
        let pTopic = document.querySelector("#pTopic span");
        let pInstructions = document.querySelector("#pInstructions span");

        pName.innerHTML = nombre;
        pEmail.innerHTML = email;
        pPhone.innerHTML = phone;
        pTopic.innerHTML = topic;
        pInstructions.innerHTML = instructions;
    });
});


