//segun el punto por favor activar el script en el html
let letra=prompt("Ingrese cualquier letra del abecedario");
letra=String(letra)
letra=letra.toLowerCase()

let vocal=letra=="a"||letra=="e" || letra=="i" ||letra=="o" || letra=="u"

console.log("¿La letra que usted ingreso es una vocal?:",vocal)