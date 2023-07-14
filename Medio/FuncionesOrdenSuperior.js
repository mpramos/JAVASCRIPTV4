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