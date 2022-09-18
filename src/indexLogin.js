// Ingreso con datos del usuario
let userLogado = JSON.parse(localStorage.getItem('userLogado')); 

let logado = document.querySelector('#logado');
logado.innerHTML = `Hola ${userLogado.nombre}`;

if(localStorage.getItem('token') == null){
  alert('Precisas ingresar con tu usuario para acceder a esta página');
  window.location.href = '../index.html';
}

// Salir del Login
function salir(){
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href = '../index.html';
}

let btnSalir = document.querySelector('#btnSalir');

btnSalir.addEventListener('click', ()=>{
    salir();
});

// Fetch usando API con datos ficticios
let divBienvenido = document.querySelector("#bienvenido");
let divLindsay = document.querySelector("#lindsay");

    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
        })
        .then(data => {
            return getLindsay();
        })
        .then(data => data.json())
        .then(user => {
            mostrarLindsay(user.data);
        })
        .catch(error => {
            alert("Error en las peticiones")
        });

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2');
}

function getLindsay(){
    return fetch('https://reqres.in/api/users/8');
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('p');
        nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;
        divBienvenido.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarLindsay(user){    
    let nombre = document.createElement('p');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    divLindsay.appendChild(nombre);
    divLindsay.appendChild(avatar);
    document.querySelector("#lindsay .loading").style.display = 'none';
}

// Cambios para el botón SALIR
function cambiaColor(color){
  btnSalir.style.background = color;
}

let btnSalirColor = document.getElementById("btnSalir");
btnSalir.style.background = "#2196f3";

// Eventos del mouse 
// Mouseover
btnSalir.addEventListener('mouseover', function(){
  this.style.background = "#81c9fa";
});

// Mouseout
btnSalir.addEventListener('mouseout', function(){
  this.style.background = "#2196f3";
});

// Focusin
btnSalir.addEventListener('focusin', function(){
  this.style.background = "#81c9fa";
});

// Focusout
btnSalir.addEventListener('focusout', function(){
  this.style.background = "#2196f3";
});
