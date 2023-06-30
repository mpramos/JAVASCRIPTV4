let edad = 12
if (edad >= 18) {
    console.log('puedes votar')
} else {
    console.log('no puedes votar');
}

// if || else if ||else
// a es positivo 
// a es negativo
// a es cero


let a = "0"
if (a > 0) {
    console.log(a + ' es un numero positivo');
} else if (a < 0) {
    console.log(a + ' es un numero neagtivo');
} else if (a === 0) {
    console.log(a + ' es un numero cero');
} else {
    console.log("no es un numero");
}
let clima = 'soleado'
if (clima == 'lluvioso') {
    console.log('necesitas un paraguas');
} else if (clima == 'nublado') {
    console.log('necesitas una chaqueta');
} else if (clima == 'soleado') {
    console.log('necesitas un sombrero');
} else {
    console.log('el clima no es válido')
}
let clima2 = 'lluvioso'

switch (clima2) {
    case 'lluvioso':
        console.log('necesitas un paraguas');
        break;
    case 'nublado':
        console.log('necesitas un paraguas');
        break;
    case 'soleado':
        console.log('necesitas un paraguas');
        break;
    default:
        console.log('el clima no es valido');
        break;
}
let numero = '0'
switch (numero) {
    case 0:
        console.log('el numero es cero');
        break;
    case 1:
        console.log('el numero es uno');
        break;
    case 2:
        console.log('el numero es dos');
        break;
    default:
        console.log('el numero no es válido');
        break;
}




