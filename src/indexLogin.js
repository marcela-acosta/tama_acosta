let userLogado = JSON.parse(localStorage.getItem('userLogado')); 

let logado = document.querySelector('#logado');
logado.innerHTML = `Hola ${userLogado.nombre}`;

if(localStorage.getItem('token') == null){
  alert('Precisas ingresar con tu usuario para acceder a esta página');
  window.location.href = '../pages/ingresar.html';
}

function salir(){
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href = '../pages/ingresar.html';
}

let btnSalir = document.querySelector('#btnSalir');

btnSalir.addEventListener('click', ()=>{
    salir();
});