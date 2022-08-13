// Cambios para el campo NOMBRE
function cambiaColor(color){
    nameForm.style.background = color;
}

let nameForm = document.getElementById("nameForm");
nameForm.innerHTML = "Soy el primer cambio";
nameForm.style.background = "orange";
nameForm.style.padding = "15px";
nameForm.style.color = "white";
nameForm.className = "claseNuevaNombre";
console.log(nameForm);

// Cambios para el campo EMAIL
let emailForm = document.querySelector("#emailForm");
emailForm.innerHTML = "Soy el segundo cambio";
emailForm.style.background = "yellow";
emailForm.style.padding = "15px";
emailForm.style.color = "blue";
emailForm.className = "claseNuevaEmail";
console.log(emailForm);

// Cambios para el campo TELÉFONO
let phoneForm = document.querySelector(".phoneForm");
phoneForm.innerHTML = "Soy el tercer cambio";
phoneForm.style.background = "green";
phoneForm.style.padding = "20px";
phoneForm.style.color = "yellow";
phoneForm.className = "claseNuevaTel";
console.log(phoneForm);

// Cambios para el campo ASUNTO
let topicForm = document.getElementById("topicForm");
topicForm.innerHTML = "Soy el cuarto cambio";
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
changeText.innerHTML = "Soy el quinto y último cambio";
changeText.style.background = "violet";
changeText.style.padding = "10px";
changeText.style.color = "brown";
console.log(changeText);



