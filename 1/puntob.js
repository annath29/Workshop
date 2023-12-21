//segun el punto por favor activar el script en el html
let valorCompra=prompt("Por favor ingrese el valor de su compra");
valorCompra=Number(valorCompra)

let descuento=valorCompra>1000 || valorCompra==1000

console.log("¿Su compra tiene descuento?:",descuento)