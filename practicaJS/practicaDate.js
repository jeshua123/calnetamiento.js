// 1  Escriba una función para comprobar si un estudiante a reprobado o aprobado
//Si la marca es mayor o igual a 40 "pass" sino "fail"


function result(mark) { 
(mark>=40)?console.log("Pass"):console.log("fail")
 }

 result(41)

 //2. Mostrar día y hora actuales

//Escriba un programa JavaScript para mostrar el día y la hora actuales en el siguiente formato.
// Salida de muestra: Hoy es: martes.
//  La hora actual es: 22:00 horas: 30:38 horas

let fecha=new Date()

//console.log(fecha.getFullYear(),fecha.getDate(),fecha.getMonth())
let Mes =fecha.getMonth()+1
let DiaMes =fecha.getDate()
let DiaSemana =fecha.getDay()
let DiaHora =fecha.getHours()
let DiaHoraMinutos =fecha.getMinutes()
let DiaHoraSegundos =fecha.getSeconds()
let Year =fecha.getFullYear()


switch(DiaSemana){
case 1:
DiaSemana="Lunes"
break;
case 2:
DiaSemana="Martes"
break;
case 3:
DiaSemana="Miércoles"
break;
case 4:
DiaSemana="Jueves"
break;
case 5:
DiaSemana="Viernes"
break;
case 6:
DiaSemana="Sábado"
break;
case 7:
DiaSemana="Domingo"
break;
}

switch(Mes){
    case 1:
        Mes="Enero"
        break;
    case 2:
        Mes="Febrero"
        break;
    case 3:
        Mes="Marzo"
        break;
    case 4:
        Mes="Abril"
        break;
    case 5:
        Mes="Mayo"
        break;
    case 6:
        Mes="Junio"
        break;
    case 7:
        Mes="Julio"
        break;
    case 8:
        Mes="Agosto"
        break;
    case 9:
        Mes="Septiembre"
        break;
    case 10:
        Mes="octubre"
        break;
    case 11:
        Mes="Noviembre"
        break;
    case 12:
        Mes="Diciembre"
        break;
}
console.log("Hoy es : "+ DiaSemana+" "+DiaMes+ " de "+Mes+" del "+Year)
console.log("La hora actual es: " +DiaHora+":"+DiaHoraMinutos+" Horas "+DiaHoraSegundos+" Segundos")
 
