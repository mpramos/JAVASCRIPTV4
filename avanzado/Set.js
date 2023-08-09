//! Creando un conjunto Set
const conjuntoVacio= new Set()
console.log(conjuntoVacio);
console.log('tamaño ',conjuntoVacio.size);

const idiomas=[
    'Ingles',
    'Español',
    'Frances',
    'Aleman',
    'Frances'
]

//! Tamaño
const setIdiomas = new Set(idiomas)
console.log(setIdiomas);

for (const idioma of setIdiomas) {
    console.log(idioma);
}
console.log('tamaño ',setIdiomas.size);


//! Añadir un elemento en Set

const empresas=new Set()
console.log(empresas);
empresas.add("Google") 
empresas.add("Facebook")
empresas.add("Amazon")
empresas.add("Oracle")
empresas.add("Microsoft")
const setEmpresas=new Set()
for (const empresa of empresas) {
    setEmpresas.add(empresa)
}
console.log(setEmpresas);
console.log(empresas.delete('Google'));
console.log(empresas.delete('Amazon'));
console.log(empresas);

console.log(empresas.has('Oracle1'));
console.log(empresas.has('Facebook'));

empresas.clear()
console.log(empresas);

//! Union de conjuntos

let a =[1,2,3,4,5]
let b =[3,4,5,6]
let c=[...a,...b]
// console.log(c);
// console.log(a);
// console.log(b);

// let A= new Set(a)
// let B= new Set(b)
let C= new Set(a,b)
console.log(C);
//! Intersección de conjuntos
let a_i =[1,2,3,4,5]
let b_i =[3,4,5,6]

let A= new Set(a_i)
let B= new Set(b_i)

let c_i= a_i.filter(num=>B.has(num))
let CI= new Set(c_i)
console.log(CI);
//! Diferencia de conjuntos
let ad =[1,2,3,4,5]
let bd =[3,4,5,6]
let AD= new Set(ad)
let BD= new Set(bd)

let cd=ad.filter(num=>!BD.has(num))
let CD=new Set(cd)
console.log(CD);

//! Map

const map=new Map()
console.log(map);

paises=[
    ['Argentina','Buenos Aires'],
    ['Brazil', 'Sao Paulo'],
    ['Colombia', 'Bogota'],
]

const mapPaises= new Map(paises)
console.log(mapPaises);
console.log(mapPaises.size);

mapPaises.set('Bolivia','Cochabamba')
mapPaises.set('Bolivia','La Paz')
console.log(mapPaises);

console.log(mapPaises.get('Brazil'));

console.log(mapPaises.has('Argentina'));


for (const [pais,ciudad] of mapPaises) {
    console.log(pais,ciudad);
}

//! Set vs Array

let mySet= new Set([1,2,3,3,4])
let myArray= [1,2,3,3,4]
console.log(mySet);
console.log(myArray);

mySet.add(5)
myArray.push(5)
console.log(mySet);
console.log(myArray);

console.log(mySet.has(3));
console.log(myArray.includes(3));

mySet.delete(2)

let indiceEliminar= myArray.indexOf(2)
if (indiceEliminar!==-1) {
    myArray.splice(indiceEliminar,1)
}
console.log(mySet);
console.log(myArray);

//! Set VS Objetos
let mySets=new Set([1,2,3])
let myObject={a:1,b:2,c:3}

console.log(mySets);
console.log(myObject);

console.log(mySets.add(4))
myObject.d=4
console.log(myObject);
console.log(mySets.has(3));
console.log('e' in myObject );

mySets.delete(2)
delete myObject.b
console.log(mySets);
console.log(myObject);


//! Map vs Arreglos


const myMap=new Map()

// Agregar pares clave-valor
myMap.set('a',1)
myMap.set('b',2)
myMap.set('c',3)
// Creacion de un arreglo  de pares clave-valor
const MyArray=[
    ['a',1],
    ['b',2],
    ['c',3],
]
console.log(myMap);
console.log(MyArray);

console.log(myMap.get('b'));
console.log(MyArray[1][1]);

myMap.set('b',10)
MyArray[1][1]=10
console.log(myMap);
console.log(MyArray);

console.log(myMap.size);
console.log(MyArray.length);

myMap.forEach((value,key)=>console.log(key,value))

for (const [key,value] of MyArray) {
    console.log(key,value);
}
myMap.delete('b')
let indiceEliminarA= MyArray.findIndex(([key])=> key==='b' )
if (indiceEliminarA!==-1) {
    MyArray.splice(indiceEliminarA,1)
}
console.log(myMap);
console.log(MyArray);

