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

