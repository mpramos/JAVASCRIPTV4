//! Objeto => propiedades y las propiedades tienen valores , par de valores : clave , valor
//? Creación de un objeto
const persona1={}
console.log(persona1)

const rectangulo={
    largo:20,
    ancho :20
}
console.log(rectangulo)
console.log(rectangulo.ancho)
console.log(rectangulo.largo)

const persona={
    nombre:"Juan",
    apellido :"Perez",  //puede tener mas datos opcionales
    edad:30,
    pais:'Bolivia',
    habilidades:['HTML','CSS','JavaScript','React'],
    saludar: function () {
        return `Hola !! ${this.nombre} ${this.apellido}`
    },
    casado:false
}
console.log(persona.nombre);
console.log(persona.saludar());

//! Métodos de los objetos
//? Object.assign
const persona2={
    nombre:"Juan",
    apellido :"Perez",  //puede tener mas datos opcionales
    edad:30,
    pais:'Bolivia',
    habilidades:['HTML','CSS','JavaScript','React'],
    saludar: function () {
        return `Hola !! ${this.nombre} ${this.apellido}`
    },
    casado:false
}
const copiaPersona=Object.assign(persona2)
console.log(copiaPersona);

//? Object.keys
const keys=Object.keys(copiaPersona)
console.log(keys);

//? Object.values
const keysV=Object.values(copiaPersona)
console.log(keysV);

//? Object.entries()
let entries=Object.entries(copiaPersona)
console.log(entries);
//? hasOwnProperty
console.log(copiaPersona.hasOwnProperty('name'));

