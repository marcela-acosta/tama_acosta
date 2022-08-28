// CARRITO DE COMPRA
document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', ready) : ready();

function ready() {
    let eliminarArticulos = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < eliminarArticulos.length; i++) {
        let button = eliminarArticulos[i];
        button.addEventListener('click', eliminaArtCarrito);
    }

    let cantidadAsignada = document.getElementsByClassName('carritoCantidad');
    for (let i = 0; i < cantidadAsignada.length; i++) {
        let input = cantidadAsignada[i];
        input.addEventListener('change', cambiarCantidad);
    }

    let agregarCarrito = document.getElementsByClassName('botonArticulo');
    for (let i = 0; i < agregarCarrito.length; i++) {
        let button = agregarCarrito[i];
        button.addEventListener('click', agregaCarritoClick);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', comprarClick);

    const articulosGuardados = obtenerArticulosLocalStorage();
    articulosGuardados.forEach((articulo)=>{
        agregarArtAlCarrito(articulo.title, articulo.price, articulo.imageSrc);
    });
    actualizarTotal();
}

function comprarClick() {
    Swal.fire('Gracias por tu compra');
    let carritoArticulos = document.getElementsByClassName('articulosCarrito')[0];
    while (carritoArticulos.hasChildNodes()) {
        carritoArticulos.removeChild(carritoArticulos.firstChild);
    }
    actualizarTotal();
}

function obtenerArticulosLocalStorage(){
    let articuloLS = localStorage.getItem('articulos') === null ? [] : JSON.parse(localStorage.getItem('articulos'));
    return articuloLS;
}

function eliminaArtCarrito(event){
    let buttonClicked = event.target;
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            buttonClicked.parentElement.parentElement.remove();
            eliminarArticulosLocalStorage(event.target.parentElement.parentElement.children[0].children[1]);
          Swal.fire(
            'Eliminado',
            'El artículo ha sido eliminado',
            'success'
          )
        }
      });
    actualizarTotal();
}

function eliminarArticulosLocalStorage(articuloID){
    let articulosLS;
    articulosLS = obtenerArticulosLocalStorage();
    const nuevaLista = articulosLS.filter((articulo)=>{
        return articulo.title != articuloID.innerText;
    });
    localStorage.setItem('articulos', JSON.stringify(nuevaLista));
 }

function cambiarCantidad(event){
    let input = event.target;
    isNaN(input.value) || input.value <= 0 && input.value == 1;
    actualizarTotal();
}

function agregaCarritoClick(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('articuloTitulo')[0].innerText;
    let price = shopItem.getElementsByClassName('articuloPrecio')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('articuloImagen')[0].src;
    agregarArtAlCarrito(title, price, imageSrc);
    Toastify({    
        text: "Agregado al carrito",        
        duration: 3000        
        }).showToast();
    actualizarTotal();
}

function agregarArtAlCarrito(title, price, imageSrc) {
    const articulo = {
        title: title,
        imageSrc: imageSrc,
        price: price,
    }
    guardarArticulosLocalStorage(articulo);

    let carritoFila = document.createElement('div');
    carritoFila.classList.add('filaCarrito');
    let carritoArticulos = document.getElementsByClassName('articulosCarrito')[0];
    let cartItemNames = carritoArticulos.getElementsByClassName('carritoArticuloTitulo');
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            Swal.fire('Este artículo ya ha sido agregado al carrito');
            return;
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
            <button class="btn btn-danger" id="btnDelete" type="button">ELIMINAR</button>
        </div>`
    carritoFila.innerHTML = carritoFilaContenido;
    carritoArticulos.append(carritoFila);
    carritoFila.getElementsByClassName('btn-danger')[0].addEventListener('click', eliminaArtCarrito);
    carritoFila.getElementsByClassName('carritoCantidad')[0].addEventListener('change', cambiarCantidad);
    guardarArticulosLocalStorage(articulo);
}

function guardarArticulosLocalStorage(articulo){
    let articulos;
    articulos = this.obtenerArticulosLocalStorage();
    articulos.push(articulo);
    localStorage.setItem('articulos', JSON.stringify(articulos));
 }

function actualizarTotal() {
    let cartItemContainer = document.getElementsByClassName('articulosCarrito')[0];
    let carritoFilas = cartItemContainer.getElementsByClassName('filaCarrito');
    let total = 0;
    for (let i = 0; i < carritoFilas.length; i++) {
        let carritoFila = carritoFilas[i];
        let priceElement = carritoFila.getElementsByClassName('carritoPrecio')[0];
        let quantityElement = carritoFila.getElementsByClassName('carritoCantidad')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('precioTotal')[0].innerText = '$' + total;
}







 

 

 


