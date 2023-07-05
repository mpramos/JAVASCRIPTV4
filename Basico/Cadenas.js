
const parrafo="My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too"
console.log(parrafo);

// Secuencias de escape en cadenas
// \n: nueva línea
// \t: Tabulador, significa 8 espacios
// \\: barra invertida
// \': Una frase (')
// \": comillas dobles (")

const nombre='Maria' //String
const pais="Bolivia" //String
const ciudad=`La Paz` //String
console.log(nombre,pais,ciudad);
console.log(typeof nombre, typeof pais,typeof ciudad);

let suma=5+2
let resta=5-2
let multiplicación=5*2
let división=5/2
console.log('La suma es ' + suma);
console.log('La resta es ' + resta);
console.log('La multiplicación es ' + multiplicación);
console.log('La división es ' + división);


let primerNombre='Maria'
let apellidoPaterno='García';
let edad=47;
let trabajo='teacher'
let nombreCompleto=primerNombre + ' ' +apellidoPaterno
let personaInformacion=`Hola a todos 👋🏻 soy ${primerNombre} y mi apellido es ${apellidoPaterno} tengo ${edad} y trabajo como ${trabajo} `
console.log(personaInformacion);

let a=3
let b=2

console.log(`${a} es mayor que ${b} ? : ${a>b}`);
//!Metodo de cadena

let js='JavaScriptasdqwdqwrqwerqwerqwerqwreqwerqwerqwerqwerqwerqwershghhghjgz'
console.log(js.length) //10

let primerElemento =js[0]
let segundoElemento =js[1]
console.log(primerElemento);
console.log(segundoElemento);
let ultimoElemento =js[js.length-1] 
console.log(ultimoElemento);
//? toUpperCase()
let string1='javascript'
console.log(string1.toUpperCase());
//? toLowerCase()
let string2='JAVASCRIPT'
console.log(string2.toLowerCase());
//? subst()
let string3='javaScript'
console.log(string3.substring(4,6));
//? split

let string4='JavaScript es un lenguaje muy popular'
console.log(string4.split());
console.log(typeof string4.split());
console.log(string4.split(' '));
//! trim
let str ='   JavaScript is awesome    ';
console.log(str);
console.log(str.trim(' '));
//!include()
let string5='Evolutech con JavaScript y React' // String

console.log(string5.includes('coni')); // false
console.log(string5.includes('con')); // true
//!replace
let string6='Evolutech con JavaScript y React'
console.log(string6.replace('JavaScript', 'Python'));
//!charAt
let string7='Evolutech con JavaScript y React'
console.log(string7.charAt(7)); // c
//!indexOf
let string8='Evolutech con Javascript y Java'
console.log(string8.indexOf("J"));
//!lastINdexOf
let string9='Evolutech con Javascript y Java'
console.log(string9.lastIndexOf("J"));
//!concat
console.log(string9.concat(' y React'))
//!startsWith
let string10='Evolutech con Javascript y Java'
console.log(string10.startsWith('A'));
//!endsWith
let string11='Evolutech con Javascript y Java'
console.log(string11.endsWith('Java'));
//!search
let string12='Evolutech con Javascript y Java'
console.log(string12.search('con'));
//! repeat
let string13='Evolutech'
console.log(string13.repeat(10))











