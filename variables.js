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


