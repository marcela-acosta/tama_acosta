// Transportador de plástico
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.22

let precioPlastico  = parseFloat(prompt("Escribe el valor del transportador de plástico"));
let descuentoPlastico = precioPlastico * 0.1;

let precioFinalPlastico = resta(suma(precioPlastico, iva(precioPlastico)), descuentoPlastico) 
console.log(precioFinalPlastico)

// Transportador mochila
let precioMochila  = parseFloat(prompt("Escribe el valor del transportador mochila"));
let descuentoMochila = precioMochila * 0.1; 

let precioFinalMochila = resta(suma(precioMochila, iva(precioMochila)), descuentoMochila) 
console.log(precioFinalMochila)

// Transportador burbuja
let precioBurbuja  = parseFloat(prompt("Escribe el valor del transportador burbuja"));
let descuentoBurbuja = precioBurbuja * 0.1; 

let precioFinalBurbuja = resta(suma(precioBurbuja, iva(precioBurbuja)), descuentoBurbuja) 
console.log(precioFinalBurbuja)

// Promoción llevando los 3 transportadores
const sumaFinal  = (a,b,c) => a + b + c
const multiplicacion = (a,b) => a * b

let descuentoMayor = multiplicacion(sumaFinal(descuentoPlastico, descuentoMochila, descuentoBurbuja), 2)

let precioFinalTransportadores = resta(sumaFinal(precioFinalPlastico, precioFinalMochila, precioFinalBurbuja), descuentoMayor)
console.log(precioFinalTransportadores)

//Array que me muestra los productos que tengo
const articulos = [{ id: 1, articulo: "Transportador de plástico" },
                  { id: 2,  articulo: "Transportador mochila" },
                  { id: 3,  articulo: "Transportador burbuja" }];

for (const articulo of articulos) {
    console.log(articulo.id);
    console.log(articulo.articulo);
}

//Array ajuste de precio (suma iva y resta descuento)
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
//Array de productos que almacena objetos
const productos = [];
productos.push(new Producto("Transportador de plástico", "950"));
productos.push(new Producto("Transportador mochila", "1450"));
productos.push(new Producto("Transportador burbuja", "1550"));
//Array con for...of para modificar todos los productos
for (const producto of productos){
    producto.conIvaYdescuento();
}
    console.log(productos)
