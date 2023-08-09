try {
 let nombre='Maria'
 let nombreCompleto=nombre + apellido
} catch (error) {
    console.log('Nombre del error',error.name);
    console.log('Mensaje error',error.message);
}  finally{
    console.log('Bloque de finally');
}


//! Throw 
//throw new Error ('Error personalizado')

throw 'Error2'
throw 42
throw true
throw new Error('Required')


//! Tipos de errores
//? ReferenceError
//? SyntaxError
let cuadrado=2 x 2
console.log(cuadrado)
console.log('Siguiente');
//? TypeError
let numero=10
console.log(numero.toLowerCase());


