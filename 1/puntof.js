//segun el punto por favor activar el script en el html
let digitoPasaporte=prompt("Ingrese el primer digito de su pasaporte");
digitoPasaporte=String(digitoPasaporte)
digitoPasaporte=digitoPasaporte.toUpperCase()

let extranjero= digitoPasaporte[0]!= "A"

console.log("¿el pasaporte es extranjero?",extranjero)