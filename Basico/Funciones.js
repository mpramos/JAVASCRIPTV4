// function name(params) {
    
// }
// name(2)
//! Distintas declaraciones o crear de dos maneras
//? Funcion de declaracion
//? Funcion de exprsión
//? Funcion anonima
//? Funcion de flecha

//! Declaracion de funciones

console.log('primera calculadora');
let a=2
let b=5
let suma1=a+b
let resta1=a-b
let multiplicación1=a*b
let división1=a/b
console.log(`La suma de ${a} y ${b} es = ${suma1}`);
console.log(`La suma de ${a} y ${b} es = ${resta1}`);
console.log(`La suma de ${a} y ${b} es = ${multiplicación1}`);
console.log(`La suma de ${a} y ${b} es = ${división1}`);
console.log('segunda calculadora');
a=3
b=5
let suma2=a+b
let resta2=a-b
let multiplicación2=a*b
let división2=a/b
console.log(`La suma de ${a} y ${b} es = ${suma2}`);
console.log(`La suma de ${a} y ${b} es = ${resta2}`);
console.log(`La suma de ${a} y ${b} es = ${multiplicación2}`);
console.log(`La suma de ${a} y ${b} es = ${división2}`);
console.log('tercera calculadora');
a=4
b=5
let suma3=a+b
let resta3=a-b
let multiplicación3=a*b
let división3=a/b
console.log(`La suma de ${a} y ${b} es = ${suma3}`);
console.log(`La suma de ${a} y ${b} es = ${resta3}`);
console.log(`La suma de ${a} y ${b} es = ${multiplicación3}`);
console.log(`La suma de ${a} y ${b} es = ${división3}`);

//Funcion sin parametros, con parametros, y retorno
function suma(a,b) {
    return a+b
}


function resta(a,b) {
    return a-b
}
function multiplicación(a,b) {
    return a*b
}
function division(a,b) {
    return a/b
}
function calculadora(a,b,operator) {
    if (operator==='*') {
        return multiplicación(a,b)
    } else {
        return 'Operador no encontrado'
    }

}
console.log(calculadora(5,5,'*'));

//! Declaracion de funcion

function getFullName() {
       return  
}
getFullName()
//! Funcion sin parametro y sin retorno
function cuadrado() {
    let numero=2
    let cuadrado= numero*numero
    console.log(cuadrado);
}
cuadrado()
//! Funcion que devuelve un valor
function imprimeNombreCompleto(){
    let primerNombre='Oscar'
    let segundoNombre='Alfredo'
    let apellidoPaterno='Garcia'
    let espacio=' '
    let nombreCompleto=primerNombre + espacio + segundoNombre + espacio + apellidoPaterno
    return nombreCompleto
}
console.log(imprimeNombreCompleto());

//! Funciones con un parametro
function areaDeCirculo(r) {
    let area=Math.PI * r * r
    return area
}
console.log(areaDeCirculo(10));
//! Funciones con dos parametros
function suma(a,b) {
    return a+b
}
console.log(suma(2,3));

//! Funciones con muchos parametros

function sumaValores() {
    let suma=0
    for (let i = 0; i < arguments.length; i++) { //i=3++
        suma=suma+arguments[i] //suma=0+1 suma=1+2; sum=3+3; sum=6+4;sum=10
    }
    return suma
}
console.log(sumaValores(1,2,3,4))
console.log(sumaValores(1,2,3,4,5,6,7))


//! Funcion anonima
let cuadrado=function () {
    console.log('Hola soy una funcion anonima');
}
cuadrado()

//! Funcion de expresion
let cuadrado=function (n) {
   return n*n
}
console.log(cuadrado(2))

//! Funcion de autoinvocacion

(function (n) {
    console.log(n*n);
})(3)

//! Funcion de flecha
const cuadradoFlecha1=(n)=>{
        console.log(n*n);
}
cuadradoFlecha1(2)
const cuadradoFlecha2=n=>{
        console.log(n*n);
}
cuadradoFlecha2(4)
const cuadradoFlecha22=n=>{
        return(n*n);
}
console.log(cuadradoFlecha22(4))
const cuadradoFlecha3=n=>n*n
console.log(cuadradoFlecha3(3))

//? Funciones con parametros por defecto
function functionName(params=value) {
    
}
functionName()
functionName(args)


function saludo(nombre='Ricardo') {
    let mensaje=`${nombre} , Bienvenido a Evolutech 😀`
    return mensaje
}
console.log(saludo());
console.log(saludo('David'));

const pesoObjeto=(masa,gravedad=9.81)=> masa*gravedad + 'N'
console.log('El peso de un objeto en Newton es : ', pesoObjeto(100));
console.log('El peso de un objeto en Newton es : ', pesoObjeto(100,1.62));