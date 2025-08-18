
//Calentamiento Js 
//✅ 1. Variables y Tipos de Datos
//1. Declara una constante nombre con tu nombre y una variable edad con tu edad. Luego muestra ambos en consola.
const nombre ="jeshua"
let edad =40
console.log(nombre)
console.log(edad)

//2. Declara una variable activo con valor true, y luego reasígnala a false. ¿Qué sucede si intentas hacerlo con const?
let activo=true
activo=false
//Respuesta
//Si intento usar const la consola muestra "TypeError: Assignment to constant variable".

//3. Crea una variable precioProducto con un número, y una variable esDisponible con un booleano.
//  Muestra un mensaje que diga:
//Producto cuesta $X y está disponible: true/false
let precioProducto=100
let esDisponible=true
console.log("Producto cuesta " +precioProducto +" y está disponible : "+ esDisponible)

//4. Declara un array con tres colores favoritos y un objeto usuario con nombre, edad y si está activo.

let ColorsList=["amarillo","Azul","Rojo"]
let  usuario={"nombre":"Jeshua","edad":40,"active":true}


//5. Usa typeof para imprimir en consola el tipo de cada una de las siguientes
//   variables: un número, un string, un booleano, un array, un objeto y null.
let nulo=null
console.log(
    typeof(edad),
    typeof(nombre),
    typeof(activo),
    typeof(ColorsList),
    typeof(usuario),
    typeof(nulo),
)


//✅ 2. Operadores básicos
//1. Declara dos números y muestra su suma, resta, multiplicación y división en consola.
let numero1=1984
let numero2=1998

let suma=numero1+numero2
let resta =numero1-numero2
let multiplicación =numero1*numero2
let división =numero1/numero2

console.log("suma:numero1+numero2 = "+suma)
console.log("resta:numero1-numero2 = "+resta,)
console.log("multiplicación:numero1*numero2 = "+multiplicación,)
console.log("división:numero1/numero2 = "+división)

//2. Crea una variable edad y muestra si la persona es mayor de edad (>= 18) usando if y operadores de comparación.
const Edad =17
if ((edad>= 18)) {console.log("es mayor de edad ")}else{console.log("no es mayor de edad ")}

//3. Usa operadores lógicos para determinar si una persona puede entrar a un club: edad >= 18 y esSocio === true.
const persona={
    edad:50,
    esSocio:false
}
persona.edad>=18 && persona.esSocio===true ? console.log("Puede entrar a un club."): console.log("No puede entrar al club");

//4. Usa el operador ternario para mostrar "Bienvenido" si esAdmin === true o "Acceso restringido" si es false.

const usuario1={
    esAdmin:false,
}
usuario1.esAdmin===true ?console.log("Bienvenido"):console.log("Acceso restringido")

//5. Declara una variable estado con valor "activo" y otra esVisible con valor true.
//Escribe una expresión que devuelva "Mostrar" si ambos son verdaderos, y "Ocultar" si no.

let estado="activo"
let esVisible=true

estado==="activo"&&esVisible===true ? console.log("Mostrar"):console.log("Ocultar")
 
//✅ 3. Funciones
//1. Escribe una función saludar(nombre) que devuelva "Hola, <nombre>".

function saludar(nombre) {
    console.log("Hola, "+ nombre)
}
saludar("Jeshua")

//2. Escribe una función sumar(a, b) usando arrow function. Pruébala con dos números.
function sumar(a, b) {
    let suma =a+b
    console.log(suma)
}
sumar(25,75)

//3. Crea una función esPar(num) que devuelva true si el número es par, false si no.
function esPar(num) {
   console.log(num%2===0)
}
esPar(15)

//4. Crea una función mostrarEstado(nombre, edad, activo) que devuelva un string tipo: "Juan tiene 30 años y está activo".

function mostrarEstado(nombre, edad, activo) {
    console.log(nombre+" tiene "+edad+" años "+"y está "+activo)
}
mostrarEstado("Eliud", 38, "activo")

//5. Declara una función que reciba una edad y devuelva "Mayor" o "Menor" según corresponda.
//  Usa operadores lógicos y ternarios dentro.

function MenorOMayor(edad) {
    let esMayor=18
    console.log(edad>=esMayor?"Mayor":"Menor")
}
MenorOMayor(75)


//✅ 4. Estructuras de control

//1. Usa un if para verificar si una variable nota es mayor o igual a 60.Muestra "Aprobado" o "Reprobado".

let nota =59
console.log(nota>=60? "Aprobado":"Reprobado")

//2. Escribe una función que reciba un número y devuelva "fizz" si esdivisible por 3, "buzz" si por 5, o "fizzbuzz" si por ambos.

function comparativa(numero) {

if(numero%3===0&&numero%5===0){numero="fizzbuzz"}
if(numero%3===0){numero="fizz"}
if(numero%5===0){numero="buzz"}

switch (numero) {
    case numero%3===0&&numero%5===0:
        numero="fizzbuzz"
        break;
    case numero%3===0:
        numero="fizz"
        break;
    case numero%5===0:
        numero="buzz"
        break;


}



console.log(numero)
 }
comparativa(5)
//3. Declara una variable rol = "admin" y usa un switch para imprimir distintos mensajes según sea "admin", "user", "guest".
//4. Usa un for para imprimir los números del 1 al 10.
//5. Crea una función que reciba un array de edades y use un for para contar cuántas son mayores de edad (>= 18).
