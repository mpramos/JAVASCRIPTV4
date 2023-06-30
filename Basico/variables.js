//!  var vs let vs const
curso="Javascript"
console.log(curso)
curso="Javascript1"
console.log(curso)
var nombre="maria"
console.log(nombre)
var nombre=123
console.log(nombre)
let edad=60
let edad=60
console.log(edad)
edad="50"
console.log(edad)
const genero="F"
genero="M"
console.log(genero)

"use strict"
let alto = 180 // -> Uncaught ReferenceError: height is not defined
let bajo=20
height = 180 // -> Uncaught ReferenceError: height is not defined
console.log(alto)
console.log(height)


let message1 = "El buque 'Mars' hizo escala en el puerto.";
let message2 = 'El ciclón "Cilida" pasará cerca de Mauritius jajaja';
let message3=  `La mayoria de los alumnos de JavaScript 


                            hicieron la tarea de ver el video`
//altGr+}
console.log(message1) // -> El buque 'Mars' hizo escala en el puerto.
console.log(message2) // -> El ciclón "Cilida" pasará cerca de Mauritius.
console.log(message3)
console.log(typeof message3)

let country = "Malawi";
let continent = "Africa";

let sentence = `${country} se ubica en ${continent}.`;
console.log(sentence); // -> Malawi se ubica en Africa.
// let country = "Malawi"
// let continent = "Africa"

// let sentence ='jaja' +country + ' se ubica en '+continent +'jdhd'
// console.log(sentence) // -> Malawi se ubica en Africa.


const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean('jaja');
console.log(strFromNum1);
console.log(typeof strFromNum1);
console.log(strFromNum2);
console.log(typeof strFromNum2);
console.log(strFromBool);
console.log(typeof strFromBool);
console.log(numFromStr);
console.log(typeof numFromStr);

console.log(boolFromNumber);
console.log(typeof boolFromNumber);
