// Login
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

const btnEyeLogin = document.querySelector('#seePass');
const btnIngresar = document.querySelector('#boton');

btnIngresar.addEventListener('click', ()=>{
    ingresar();
 });

btnEyeLogin.addEventListener('click', () => {
    let inputPassword = document.querySelector('#pass');
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text');
    }else{
        inputPassword.setAttribute('type', 'password');
    }
});

function ingresar(){  
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
        window.location.href = "pages/indexLogin.html";

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

// Eventos del mouse
// Mouseover
const olvidoContraseña = document.querySelector(".a-link");
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



