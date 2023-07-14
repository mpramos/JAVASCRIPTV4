//! Usando el constructor de los arreglos
const arr1=Array()
console.log(arr1);

//! Usando corchetes
let arr=[]
console.log(arr);

//? Podemos agregar elementos a un array

let numeros=[1,23,343,34,3434,45]
let diferentesTiposDatos=[1,'nombres','😀',true,false,[1,2,3], {nombre:'Gustavo', edad:30}]
console.log(numeros);
console.log(diferentesTiposDatos);
//! Split
let js='JavaScript'
let charJs=js.split('')
console.log(charJs);
//!! Acceder a los elementos del arreglo usando el índice

const frutas=['banana','orange','mango','lemon','mango','mango','mango','mango','mango','mango','sandia','orange','banana']
let primeraFruta=frutas[0]
let segundaFruta=frutas[1]
let terceraFruta=frutas[2]
console.log('cantidad de elementos en el arrreglo de frutas', frutas.length); //14-1 13
let ultimaFruta=frutas[frutas.length-1]
console.log(ultimaFruta);
console.log(primeraFruta);
console.log(segundaFruta);
console.log(terceraFruta);
//! Metodos para manipular los arreglos

//? Constructor del arreglo
const arr2= Array();
let ochoElementos=Array(8).fill(true)
console.log(ochoElementos);

//? concat
let frutas1=['🍉','🍊','🍋','🍏']
console.log(frutas1);
let comidas=['🍟','🌭','🍖','🍕']
console.log(comidas);
let todasLasComidas = frutas1.concat(comidas);
console.log(todasLasComidas);
//? IndexOf
let frutasF=['🍉','🍊','🍋','🍏','🍊']
console.log(frutasF.indexOf('🍊'));
console.log(frutasF.indexOf('🍏'));
console.log(frutasF.indexOf('🍳'));
//? lastIndexOf
console.log(frutasF.lastIndexOf('🍊'));//4
//?Array.isArray 
const numeros1=[1,2,3,4,5]
const numero=9
console.log(Array.isArray(numeros1) );
console.log(Array.isArray(numero) );
//? toString
const numeros2=[1,2,3,4,5]
console.log(numeros2.toString());

//? join
const numeros3=[1,2,3,4,5]
console.log(numeros3.join());
console.log(numeros3.join(' '));
console.log(numeros3.join(' # '));
console.log(numeros3.join('#'));
console.log(numeros3.join('🍔 '));

//?slice
const numeros4=[1,2,3,4,5] //[2,3,4]
console.log(numeros4.slice());
console.log(numeros4.slice(1,4));
console.log(numeros4);
//? splice
const numeros5=[1,2,3,4,5] 
console.log(numeros5.splice());
console.log(numeros5.splice(2,3));
console.log(numeros5);
//? push
const numeros6=[1,2,3,4,5]
console.log(numeros6.push(6));
console.log(numeros6);
//? pop
const numeros7=[1,2,3,4,5]
console.log(numeros7.pop());
console.log(numeros7);
//? shift
const numeros8=[1,2,3,4,5]
console.log(numeros8.shift());
console.log(numeros8);
//? unshift
const numeros9=[1,2,3,4,5]
console.log(numeros9.unshift(0));
console.log(numeros9);
//? reverse
const numeros10=[1,2,3,4,5]
console.log(numeros10.reverse());
// //? sort
// const tecnologias=['HTML','CSS','JavaScript','React']
// console.log(tecnologias.sort());




 



