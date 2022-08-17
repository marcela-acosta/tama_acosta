// Cambios para el campo NOMBRE
function cambiaColor(color){
    nameForm.style.background = color;
}

let nameForm = document.getElementById("nameForm");
nameForm.style.background = "orange";
nameForm.style.padding = "15px";
nameForm.style.color = "white";
nameForm.className = "claseNuevaNombre";
console.log(nameForm);

// Cambios para el campo EMAIL
let emailForm = document.querySelector("#emailForm");
emailForm.style.background = "yellow";
emailForm.style.padding = "15px";
emailForm.style.color = "blue";
emailForm.className = "claseNuevaEmail";
console.log(emailForm);

// Cambios para el campo TELÉFONO
let phoneForm = document.querySelector("#phoneForm");
phoneForm.style.background = "green";
phoneForm.style.padding = "20px";
phoneForm.style.color = "yellow";
phoneForm.className = "claseNuevaTel";
console.log(phoneForm);

// Cambios para el campo ASUNTO
let topicForm = document.getElementById("topicForm");
topicForm.style.background = "pink";
topicForm.style.padding = "20px";
topicForm.style.color = "gray";
topicForm.className = "claseNuevaAsunto";
console.log(topicForm);

// Ver elementos usando getElementsByTagName
let labelElements = document.getElementsByTagName('label');
console.log(labelElements);

// Ver el contenido de un texto usando arrays
let contentInText = labelElements[2].textContent;
console.log(contentInText);

// Cambios para el campo MENSAJE usando arrays
let changeText = labelElements[4];
changeText.style.background = "violet";
changeText.style.padding = "10px";
changeText.style.color = "brown";
console.log(changeText);

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
function changeColor(){
    let fondo = submit.style.background;
    if(fondo == "blue"){
        submit.style.background = "orange";
    }else{
        submit.style.background = "blue";
    }
    return true;
}

let botonSubmit = document.querySelector("#submit");

// Click
botonSubmit.addEventListener('click', function(){
    changeColor();
});

// Mouseover
botonSubmit.addEventListener('mouseover', function(){
    botonSubmit.style.background = "#f29e9c";
});

// Mouseout
botonSubmit.addEventListener('mouseout', function(){
    botonSubmit.style.background = "#ed494a";
});

// Focusin
botonSubmit.addEventListener('focusin', function(){
    botonSubmit.style.background = "#f29e9c";
});

// Focusout
botonSubmit.addEventListener('focusout', function(){
    botonSubmit.style.background = "#ed494a";
});




