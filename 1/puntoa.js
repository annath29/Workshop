
//segun el punto por favor activar el script en el html
let sueldo=prompt("Por favor ingrese su sueldo");
sueldo=Number(sueldo)
let antiguedad=prompt("Por favor ingrese su antiguedad en años");
antiguedad=Number(antiguedad)


console.log("su sueldo es:",sueldo)
console.log("su antiguedad es:",antiguedad)

let sueldomenor2000Yantiguedadmayorigual10= sueldo<2000 && (antiguedad==10 ||antiguedad>10);
console.log("¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?",sueldomenor2000Yantiguedadmayorigual10)

let sueldomenor2000oantiguedadmenor10= sueldo<2000 || antiguedad<10;
console.log("¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años? :",sueldomenor2000oantiguedadmenor10)

let sueldomayorigual2mil= sueldo>2000 || sueldo==2000;
console.log("¿El sueldo es mayor o igual a $2000 US? :",sueldomayorigual2mil)