//segun el punto por favor activar el script en el html
let nombre=prompt("Ingrese su nombre");
nombre=String(nombre)

let salario=prompt("Ingrese su salario");
salario=Number(salario)

let horasTrabajo=prompt("Ingrese las horas de trabajo");
horasTrabajo=Number(horasTrabajo)


let salarioBasico=salario*horasTrabajo

let subsidio=salarioBasico < 700000 || salarioBasico == 700000


console.log(" Hola ",nombre,", su salario basico es: ",salarioBasico)
console.log("¿cuenta con subsidio?: ", subsidio)