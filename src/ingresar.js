// Eventos del mouse
// Mouseover
let olvidoContraseña = document.querySelector(".a-link");
olvidoContraseña.addEventListener('mouseover', function(){
    this.style.color = "#37bcf9";
});

boton.addEventListener('mouseover', function(){
    this.style.background = "#f29e9c";
});

botonRegistro.addEventListener('mouseover', function(){
    this.style.background = "#f29e9c";
});

// Mouseout
olvidoContraseña.addEventListener('mouseout', function(){
    this.style.color = "#0d6efd";
});

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

// Fetch
let divBienvenido = document.querySelector("#bienvenido");
let divLindsay = document.querySelector("#lindsay");
let divProfesor = document.querySelector("#profesor");

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

// Login
let btnEyeLogin = document.querySelector('#seePass');
let btnIngresar = document.querySelector('#boton');

btnEyeLogin.addEventListener('click', () => {
    let inputPassword = document.querySelector('#pass');
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text');
    }else{
        inputPassword.setAttribute('type', 'password');
    }
});

function ingresar(){
    let formEmail = document.querySelector('#formEmail');
    let userLabel = document.querySelector('#userLabel');

    let pass = document.querySelector('#pass');
    let passLabel = document.querySelector('#passLabel');

    let msgError = document.querySelector('#msgError');
    let listaUser = [];

    let userValid = {
        nombre: '',
        email: '',
        pass: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    
    listaUser.forEach((item) =>{
        if(formEmail.value == item.userRegistered && pass.value == item.passwordRegistered){
            userValid = {
                nombre: item.nameRegistered,
                email: item.userRegistered,
                pass: item.passwordRegistered
            }
        }
    });

    if(formEmail.value == userValid.email && pass.value == userValid.pass){
        window.location.href = "../pages/indexLogin.html";

        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
    }else{
        userLabel.setAttribute('style', 'color: red');
        formEmail.setAttribute('style', 'border-color: red');
        passLabel.setAttribute('style', 'color: red');
        pass.setAttribute('style', 'border-color: red');
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email o contraseña incorrectos';
        formEmail.focus();
    }
}

btnIngresar.addEventListener('click', ()=>{
    ingresar();
 });