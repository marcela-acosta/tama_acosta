// Eventos del mouse
// Mouseover
botonRegistro.addEventListener('mouseover', function(){
    this.style.background = "#f29e9c";
});

// Mouseout
botonRegistro.addEventListener('mouseout', function(){
    this.style.background = "#ed494a";
});

// Focusin
botonRegistro.addEventListener('focusin', function(){
    this.style.background = "#f29e9c";
});

// Focusout
botonRegistro.addEventListener('focusout', function(){
    this.style.background = "#ed494a";
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

// Registrarse
let btnEye = document.querySelector('#seePassword');
let btnConfirm = document.querySelector('#seeConfirmPassword');
let btnRegistrarse = document.querySelector('#botonRegistro');

let formName = document.querySelector('#formName');
let labelName = document.querySelector('#labelName');
let validName = false;

let formEmail = document.querySelector('#formEmail');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let password = document.querySelector('#password');
let labelPassword = document.querySelector('#labelPassword');
let validPassword = false;

let confirmPassword = document.querySelector('#confirmPassword');
let labelConfirmPassword = document.querySelector('#labelConfirmPassword');
let validConfirmPassword = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

formName.addEventListener('keyup', ()=>{
    if(formName.value.length <= 2){
        labelName.setAttribute('style', 'color: red');
        labelName.innerHTML = 'Nombre *Ingrese al menos 3 caracteres';
        formName.setAttribute('style', 'border-color: red');
        validName = false;
    }else{
        labelName.setAttribute('style', 'color: green');
        labelName.innerHTML = 'Nombre';
        formName.setAttribute('style', 'border-color: green');
        validName = true;
    }
});

formEmail.addEventListener('keyup', ()=>{
    if(formEmail.value.length <= 4){
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Email *Ingrese al menos 5 caracteres';
        formEmail.setAttribute('style', 'border-color: red');
        validEmail = false;
    }else{
        labelEmail.setAttribute('style', 'color: green');
        labelEmail.innerHTML = 'Email';
        formEmail.setAttribute('style', 'border-color: green');
        validEmail = true;
    }
});

password.addEventListener('keyup', ()=>{
    if(password.value.length <= 5){
        labelPassword.setAttribute('style', 'color: red');
        labelPassword.innerHTML = 'Contraseña *Ingrese al menos 6 caracteres';
        password.setAttribute('style', 'border-color: red');
        validPassword = false;
        
    }else{
        labelPassword.setAttribute('style', 'color: green');
        labelPassword.innerHTML = 'Contraseña';
        password.setAttribute('style', 'border-color: green');
        validPassword = true;
    }
});

confirmPassword.addEventListener('keyup', ()=>{
    if(password.value != confirmPassword.value){
        labelConfirmPassword.setAttribute('style', 'color: red');
        labelConfirmPassword.innerHTML = 'Confirmar contraseña *Las contraseñas no coinciden';
        confirmPassword.setAttribute('style', 'border-color: red');
        validConfirmPassword = false;
    }else{
        labelConfirmPassword.setAttribute('style', 'color: green');
        labelConfirmPassword.innerHTML = 'Confirmar contraseña';
        confirmPassword.setAttribute('style', 'border-color: green');
        validConfirmPassword = true;
    }
});

function registrarse(){
    if(validName && validEmail && validPassword && validConfirmPassword){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nameRegistered: formName.value,
                userRegistered: formEmail.value,
                passwordRegistered: password.value
            }
        );

        localStorage.setItem('listaUser', JSON.stringify(listaUser));
       
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Registrando usuario</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3000);        

    }else{
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Llene todos los campos correctamente</strong>';
        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = '';
    }
}

btnRegistrarse.addEventListener('click', ()=>{
   registrarse();
});

btnEye.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password');
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text');
    }else{
        inputPassword.setAttribute('type', 'password');
    }
});

btnConfirm.addEventListener('click', () => {
    let inputConfirmPassword = document.querySelector('#confirmPassword');
    if(inputConfirmPassword.getAttribute('type') == 'password'){
        inputConfirmPassword.setAttribute('type', 'text');
    }else{
        inputConfirmPassword.setAttribute('type', 'password');
    }
});


