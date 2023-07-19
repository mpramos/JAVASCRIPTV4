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

const reactangulo={
    ancho:20,
    altura:10,
    area: 200
}
let {ancho: a,altura:al,area:ar}=reactangulo
console.log(a);
console.log(al);
console.log(ar);




