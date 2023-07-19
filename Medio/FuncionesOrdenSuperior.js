// function name1(numero1,numero2) {
//     console.log(numero1+numero2);
    
// }

// function name(cb,numero1,numero2) {
//     name1(numero1,numero2)
// }
// name(name1,4,5)

const cuadrado=(n)=>{
    return n*n;
}
const cubo=(callback,n)=>{
    return callback(n)*n;
}
console.log("El resultado de la operacion es:",cubo(cuadrado,3))

console.log('test1')
console.log('test2')
setTimeout(() => {
    console.log('test 3');
}, 3000);
console.log('test4')
//! Callbacks, Promesas, Funciones Async Await
///TODO
//! forEach
// numbers.forEach((num)=>mostrarF(num))
// function mostrarF(num) {
//     console.log(num);
// }
let numbers = [1, 2, 3,4,5,8]; // Array of Numbers to iterate over using
let obtPares=()=>{
    let numerosPares=[]
    numbers.forEach(num=>{
        if (num%2===0){
            numerosPares.push(num)
        }
    })
    return numerosPares
}
console.log(obtPares());  

let mult=1
let sum=0
let multElementos=numbers.forEach(num=>mult*=num)
let sumaElementos=numbers.forEach(num=>sum+=num)
console.log(sum);
console.log(mult);
//! map
let numeros5 = [1,2,3,4,5,6,7];
let r = numeros5.map(num=>num*2);
console.log(r);
//! reduce
let numeros6 = [1,2,3,4,5,6,7];
let suma = numeros6.reduce((sum,num)=>sum * num,0)
console.log(suma);
//! filter
let numeros7 = [1,2,3,4,5,6,7];
let pares = numeros7.filter(num=> num % 2===0)
console.log(pares);
//! every
let names = ['Elias','Nicolas','Leonidas',1];
const todosStrings=names.every((name)=> typeof name === 'string')
console.log(todosStrings);
//! find
let edades=[24,22,25,32,35,10,18]
const edad=edades.find((edad)=>edad < 20)
console.log(edad);

const notas=[
    {nombre:'Elias', nota:5},
    {nombre:'Nicolas', nota:80},
    {nombre:'Leonidas', nota:50},
    {nombre:'Mathias', nota:85},
    {nombre:'Alejandra', nota:100},
]

const nota= notas.find(alumno=>alumno.nota>80)
console.log(nota);
//! findIndex

let names1 = ['Elias','Nicolas','Leonid','Alejan'];
const resultado=names1.findIndex(name=>name.length > 7)
console.log(resultado);

//! some
let names2 = ['Elias','Nicolas','Leonid','Alejan'];
const booleanos=[false,false,false, true]
const algunoBooleano=booleanos.some(b=> b===true)
console.log(algunoBooleano);
 const todosNombres=names2.some(name=> typeof name==='number')
 console.log(todosNombres);
 //! sort
 let products=['Milk','Coffe','Sugar','Apple']
 console.log(products.sort());
 
 const numbers123=[9.81,3.14,100,37]

 console.log(numbers123.sort((a,b)=> a-b));
 console.log(numbers123.sort((a,b)=> b-a));
 const usuarios=[
     {nombre:'Elias', edad:150},
     {nombre:'Nicolas', edad:50},
     {nombre:'Leonidas', edad:100},
     {nombre:'Mathias', edad:22},
 ]
usuarios.sort((a,b)=>{
    if(a.edad < b.edad) return -1
    if(a.edad > b.edad) return 1
    return 0
})
console.log(usuarios);
