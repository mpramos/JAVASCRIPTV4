//! Desestructuracion

let numeros=[1,2,3]
//?---------- Primera Forma

// let numero1= numeros[0]
// let numero2= numeros[1]
// let numero3= numeros[2]
// console.log(numero1);
// console.log(numero2);
// console.log(numero3);
//?---------- Segunda Forma
let [numero1,,numero3]= numeros
console.log(numero1);
// console.log(numero2);
console.log(numero3);

let nombres=['Maria','Juana','Estela']
let [nombre1,nombre2,nombre3]= nombres
console.log(nombre1);
console.log(nombre2);
console.log(nombre3); 

let fullstack=[
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB'],
]

const [frontend,backend]=fullstack

const frontendPlus=frontend.push('Angular')
console.log(frontendPlus);

console.log(backend);
console.log(frontend);

let numeros1=[1,2,3,4,5,6,7,8,9,10]
let [numero11,numero22,numero33,...rest]= numeros1
console.log(numero11,numero22,numero33);
console.log(rest);

let paises=[['Argentina','Buenos Aires'],['Bolivia','La Paz'],['España','Madrid']]

for (const [pais,ciudad] of paises) {
    console.log(pais, ciudad);
}
// Objetos desestructuracion

const rectangulo={
    ancho:20,
    altura:10,
    area: 200
}
let {ancho: a,altura:al,area:ar, perimetro:p=60}=rectangulo
console.log(a);
console.log(al);
console.log(ar);
console.log(p);


//? Parametro de objeto sin desestructurar

const rectangulo1={
    alto:10,
    ancho:20
}

const calcularPerimetro=(rectangulo)=>{
    return 2 * (rectangulo.alto + rectangulo.ancho)
}
console.log(calcularPerimetro(rectangulo1));
//? Parametro de objeto con desestructuracion
const rectangulo2={
    alto:10,
    ancho:20
}
const calcularPerimetro1=({alto,ancho})=>{
    return 2 * (alto + ancho)
}
console.log(calcularPerimetro1(rectangulo2));

// ? Objeto de desestructuracion durante la iteracion

 const todoList=[
    {
        task:'Estudiar Modulo 1',
        time:'4/8/2023',
        completed:false
    },
    {
        task:'Estudiar Modulo 2',
        time:'4/7/2023',
        completed:true
    },
    {
        task:'Estudiar Modulo 3',
        time:'4/8/2023',
        completed:false
    },
 ]
 console.log(todoList);
 for (const {task,time,completed} of todoList) {
    console.log(task,time,completed);
 }

 // ! Operador de propgacion ...

 let nums=[1,2,3,4,5,6,7,8,9,10]

 let [number1,number2,number3,...resto]=nums
 console.log(number1,number2,number3);
 console.log(resto);

 //? Operador de propagacion para copiar arreglos

 
 const pares=[0,2,4,6,8,10]
 const impares=[1,3,5,7,9];
//  const numerosPares= pares
//  console.log(numerosPares);
//  numerosPares.push(12)
//  console.log(numerosPares);
//  console.log(pares);
 const copiaPares= [...pares]
 console.log('copia Pares ',copiaPares);
 copiaPares.push(12)
 console.log('copia Pares ',copiaPares);
 console.log(pares);
 const todosNumeros=[...pares,...impares]
 console.log('todos los numeros ',todosNumeros);
 //! Operador de extension para copiar objetps

 let user ={
    name:"John",
    age : "30",
    country :"Colombia",
    city:'Bogotá'
 }

//  let newUser=user
//  console.log(newUser);
//  newUser.phone='7777777'
//  console.log(newUser);
//  console.log('user ',user);
 let copiaUser= {...user,email:'123@gmail.com',phone:'888888'}
console.log('copia de usuario ', copiaUser);
console.log('usauario ', user);

//? Operador de proopagacion con funcion de flecha

const sumaTodosNumeros=(...args)=>{
    let suma=0
    for (const n of args) {
        suma+=n
    }
    return suma
} 
console.log(sumaTodosNumeros(1,2,3,4,5))





 



