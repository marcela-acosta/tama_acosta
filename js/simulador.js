// Lista de transportadores
const listaTransportadores = [
    {
        nombre: "Transportador de plástico",
        precio: "$950",
        material: "Plástico",
    },
    {
        nombre: "Transportador mochila",
        precio: "$1450",
        material: "Tela",
    },
    {
        nombre: "Transportador burbuja",
        precio: "$1550",
        material: "Plástico",
    },
]

// Visualización y cálculo de precios finales
let action = ""

while (action != "CALCULAR"){
    action = prompt("Ingresa VER para ver los precios sin iva o CALCULAR para calcular los precios finales con iva y descuento del 10%")
    switch (action){
        case "VER":
            verTransportador()
            break;
        case "CALCULAR":
            alert("Vas a calcular los precios finales")
            break;
        default:
            alert("Ingresa una acción válida")
            break;
    }
}

function verTransportador(){
    listaTransportadores.forEach((transportador)=>{
        alert(`Nombre: ${transportador.nombre} Precio: ${transportador.precio} Material: ${transportador.material}`)
    })
}

// Transportador de plástico
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.22

let precioPlastico  = parseFloat(prompt("Escribe el valor del transportador de plástico"));
let descuentoPlastico = precioPlastico * 0.1;

let precioFinalPlastico = resta(suma(precioPlastico, iva(precioPlastico)), descuentoPlastico) 
alert(`El precio final del transportador de plástico es: $${precioFinalPlastico}`)

// Transportador mochila
let precioMochila  = parseFloat(prompt("Escribe el valor del transportador mochila"));
let descuentoMochila = precioMochila * 0.1; 

let precioFinalMochila = resta(suma(precioMochila, iva(precioMochila)), descuentoMochila) 
alert(`El precio final del transportador mochila es: $${precioFinalMochila}`)

// Transportador burbuja
let precioBurbuja  = parseFloat(prompt("Escribe el valor del transportador burbuja"));
let descuentoBurbuja = precioBurbuja * 0.1; 

let precioFinalBurbuja = resta(suma(precioBurbuja, iva(precioBurbuja)), descuentoBurbuja) 
alert(`El precio final del transportador burbuja es: $${precioFinalBurbuja}`)

// Promoción llevando los 3 transportadores
const sumaFinal  = (a,b,c) => a + b + c
const multiplicacion = (a,b) => a * b

let descuentoMayor = multiplicacion(sumaFinal(descuentoPlastico, descuentoMochila, descuentoBurbuja), 2)

let precioFinalTransportadores = resta(sumaFinal(precioFinalPlastico, precioFinalMochila, precioFinalBurbuja), descuentoMayor)

let entrada = ""

while (entrada != "NO"){
    entrada = prompt("¿Quieres llevar los 3 transportadores con descuento del 20%? Ingresa SI para avanzar / NO para salir")
    switch (entrada){
        case "SI":
            alert(`El precio final por los 3 transportadores con descuento del 20% es: $${precioFinalTransportadores}`)    
            break;
        case "NO":
            alert("Muchas gracias por tu visita")
            break;
        default:
            alert("Ingresa una acción válida: SI o NO")
            break;
    }
}

// Array que me muestra los productos que tengo
const articulos = [{ id: 1, articulo: "Transportador de plástico" },
                  { id: 2,  articulo: "Transportador mochila" },
                  { id: 3,  articulo: "Transportador burbuja" }];

for (const articulo of articulos) {
    console.log(articulo.id);
    console.log(articulo.articulo);
}

// Array ajuste de precio (suma iva y resta descuento)
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    conIvaYdescuento() {
        this.precio = this.precio * 1.22 - this.precio * 0.1;
    }
}

// Array de productos que almacena objetos
const productos = [];
productos.push(new Producto("Transportador de plástico", "950"));
productos.push(new Producto("Transportador mochila", "1450"));
productos.push(new Producto("Transportador burbuja", "1550"));

// Array con for...of para modificar todos los productos
for (const producto of productos){
    producto.conIvaYdescuento();
}
    console.log(productos)
