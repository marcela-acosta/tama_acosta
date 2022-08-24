// DATOS DEL CARRITO AL LOCALSTORAGE
// let formulario = document.querySelector("#formTransportador");
// formulario.addEventListener('submit', function(){
// 	let titulo = document.querySelector('#addTransportador').value;
// 	if(titulo.length >= 1){
// 		localStorage.setItem(titulo, titulo);
// 	}	
// });
 
// let ul = document.querySelector('#transportador-list');
// for(let i in localStorage){
// 	if(typeof localStorage[i] == 'string'){
// 		let li = document.createElement("li");
// 		li.append(localStorage[i]);	
// 		ul.append(li);
// 	}
// }
 
// let formulariob = document.querySelector("#formBorrarTransportador");
// formulariob.addEventListener('submit', function(){
// 	let titulo = document.querySelector('#borrarTransportador').value;
// 	if(titulo.length >= 1){
// 		localStorage.removeItem(titulo);
// 	}
// });

// Evento submit para TIENDA
// window.addEventListener('load', function(){
//     let formTransportador = document.querySelector("#formTransportador");
//     formTransportador.addEventListener('submit', function(event){
//         event.preventDefault();
//         console.log(event);
//     });

//     let cajaTienda = document.querySelector(".cajaTienda");
//     cajaTienda.style.display = "none";

//     formTransportador.addEventListener('submit', function(){
//         let nombre = document.querySelector("#name").value;
//         let email = document.querySelector("#email").value;
//         let phone = parseInt(document.querySelector("#phone").value);
//         let topic = document.querySelector("#topic").value;
//         let instructions = document.querySelector("#textarea").value;

//         cajaTienda.style.display = "block";

//         let pName = document.querySelector("#pName span");
//         let pEmail = document.querySelector("#pEmail span");
//         let pPhone = document.querySelector("#pPhone span");
//         let pTopic = document.querySelector("#pTopic span");
//         let pInstructions = document.querySelector("#pInstructions span");

//         pName.innerHTML = nombre;
//         pEmail.innerHTML = email;
//         pPhone.innerHTML = phone;
//         pTopic.innerHTML = topic;
//         pInstructions.innerHTML = instructions;
//     });
// });

// CARRITO DE COMPRA
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let eliminarArticulos = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < eliminarArticulos.length; i++) {
        let button = eliminarArticulos[i]
        button.addEventListener('click', eliminaArtCarrito)
    }

    let cantidadAsignada = document.getElementsByClassName('carritoCantidad')
    for (let i = 0; i < cantidadAsignada.length; i++) {
        let input = cantidadAsignada[i]
        input.addEventListener('change', cambiarCantidad)
    }

    let agregarCarrito = document.getElementsByClassName('botonArticulo')
    for (let i = 0; i < agregarCarrito.length; i++) {
        let button = agregarCarrito[i]
        button.addEventListener('click', agregaCarritoClick)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', comprarClick)
}

function comprarClick() {
    alert('Gracias por tu compra')
    let carritoArticulos = document.getElementsByClassName('articulosCarrito')[0]
    while (carritoArticulos.hasChildNodes()) {
        carritoArticulos.removeChild(carritoArticulos.firstChild)
    }
    actualizarTotal()
}

function eliminaArtCarrito(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    actualizarTotal()
}

function cambiarCantidad(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarTotal()
}

function agregaCarritoClick(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('articuloTitulo')[0].innerText
    let price = shopItem.getElementsByClassName('articuloPrecio')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('articuloImagen')[0].src
    agregarArtAlCarrito(title, price, imageSrc)
    actualizarTotal()
}

function agregarArtAlCarrito(title, price, imageSrc) {
    let carritoFila = document.createElement('div')
    carritoFila.classList.add('filaCarrito')
    let carritoArticulos = document.getElementsByClassName('articulosCarrito')[0]
    let cartItemNames = carritoArticulos.getElementsByClassName('carritoArticuloTitulo')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Este artículo ya ha sido agregado al carrito')
            return
        }
    }
    let carritoFilaContenido = `
        <div class="carritoArticulo carritoColumna">
            <img class="carritoArticuloImagen" src="${imageSrc}" width="100" height="100">
            <span class="carritoArticuloTitulo">${title}</span>
        </div>
        <span class="carritoPrecio carritoColumna">${price}</span>
        <div class="carritoCantidadTitulo carritoColumna">
            <input class="carritoCantidad" type="number" value="1">
            <button class="btn btn-danger" type="button">ELIMINAR</button>
        </div>`
    carritoFila.innerHTML = carritoFilaContenido
    carritoArticulos.append(carritoFila)
    carritoFila.getElementsByClassName('btn-danger')[0].addEventListener('click', eliminaArtCarrito)
    carritoFila.getElementsByClassName('carritoCantidad')[0].addEventListener('change', cambiarCantidad)
	//this.guardarArticulosLocalStorage(articulo);
}

function actualizarTotal() {
    let cartItemContainer = document.getElementsByClassName('articulosCarrito')[0]
    let carritoFilas = cartItemContainer.getElementsByClassName('filaCarrito')
    let total = 0
    for (let i = 0; i < carritoFilas.length; i++) {
        let carritoFila = carritoFilas[i]
        let priceElement = carritoFila.getElementsByClassName('carritoPrecio')[0]
        let quantityElement = carritoFila.getElementsByClassName('carritoCantidad')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('precioTotal')[0].innerText = '$' + total
}

// LocalStorage
// guardarArticulosLocalStorage(buttonClicked){
// 	let articulos;
// 	articulos = this.obtenerArticulosLocalStorage();
// 	articulos.push(buttonClicked);
// 	localStorage.setItem('articulos', JSON.stringify(articulos));
// }

// obtenerArticulosLocalStorage(){
// 	let articuloLS;
// 	if(localStorage.getItem('articulos') === null){
// 		articuloLS = [];
// 	}else{
// 		articuloLS = JSON.parse(localStorage.getItem('articulos'));
// 	}
// 	return articuloLS;
// }

// eliminarArticulosLocalStorage(articuloID){
// 	let articulosLS;
// 	articulosLS = this.obtenerArticulosLocalStorage();
// 	articulosLS.forEach(function(articuloLS, index){
// 		if(articuloLS.id === articuloID){
// 			articulosLS.splice(index, 1);
// 		}
// 	});
// 	localStorage.setItem('articulos', JSON.stringify(articulosLS));
// }

