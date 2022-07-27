// Transportador de plástico
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.22

let precioPlastico  = 950
let descuentoPlastico = 95 

let precioFinalPlastico = resta(suma(precioPlastico, iva(precioPlastico)), descuentoPlastico) 
console.log(precioFinalPlastico)

// Transportador mochila
let precioMochila  = 1450
let descuentoMochila = 145 

let precioFinalMochila = resta(suma(precioMochila, iva(precioMochila)), descuentoMochila) 
console.log(precioFinalMochila)

// Transportador burbuja
let precioBurbuja  = 1550
let descuentoBurbuja = 155 

let precioFinalBurbuja = resta(suma(precioBurbuja, iva(precioBurbuja)), descuentoBurbuja) 
console.log(precioFinalBurbuja)

// Promoción llevando los 3 transportadores
const sumaFinal  = (a,b,c) => a + b + c
const multiplicacion = (a,b) => a * b

let descuentoMayor = multiplicacion(sumaFinal(descuentoPlastico, descuentoMochila, descuentoBurbuja), 2)

let precioFinalTransportadores = resta(sumaFinal(precioFinalPlastico, precioFinalMochila, precioFinalBurbuja), descuentoMayor)
console.log(precioFinalTransportadores)