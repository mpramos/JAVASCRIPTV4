console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8
const x = 5;
const y = 2;

console.log("suma: ", x + y); // -> 7
console.log("resta: ", typeof (x - y)); // -> 3
console.log("multiplicación: ", typeof('2' * y)); // -> 10
console.log("división: ", x / y); // -> 2.5
console.log("residuo de la división: ", x % y); // -> 1
console.log("potencia: ", x ** y); // -> 25
//! Operadores aritméticos unarios
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number


// ! Operadores unarios de incremento y decremento
let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(--n4); // -> 18

//! Operadores de Asignación Compuesta
// console.log(x = x + 100)
// console.log(x +=100)
// console.log(x);
let x =10
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4
//! Operadores Lógicos (|| && !)
const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

//! Operadores lógicos y valores no booleanos

let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!name); // -> true

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob
//!Operadores lógicos y valores no booleanos - continuación
//* 0 false '' => falsos

let x = 1;
let y = 0;
// console.log(x++ && y++); // -> 0
// console.log(x); // -> 1
// console.log(y); // -> y == 0
console.log(x++ || y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0

//! Operadores de Asignación Compuesta
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false
let b = false;
console.log(b); // -> false
b ||= true;
// b = b || true;
console.log(b); // -> true

//! Tareas
//* Operadores aritméticos
//? Tarea1 Completa los operadores que faltan para obtener el resultado esperado (reemplaza el guión bajo con el operador apropiado):
console.log(2 * 3 + 1); // salida 7  //Miguel
console.log(2 ** 4); // salida 16  //Pablo
console.log(5 * 1); // salida 5  // Luis
console.log(8 ** 2 - 5 ** 2); // salida 39 //Pablo

//? Tarea 2  Operadores de comparación
/*
Completa los operadores de comparación que faltan de tal manera que todas las expresiones resulten true - verdaderas (reemplaza el guión bajo con el operador apropiado):*/
console.log(4 * 5 == 20); // Miguel
console.log(6 * 5 == "30");//Pablo
console.log(-17 != 0);  //Miguel
console.log(25 > 1);  // Pablo // Grover
console.log(2 + 2 * 2 > 4) //Pablo
 //? Tarea 3 Operadores Lógicos
// Completa los operadores de comparación que faltan de tal manera que todas las expresiones resulten true - verdaderas (reemplaza el guión bajo con el operador apropiado):
console.log(true || false);  //Miguel
console.log(false === false); //Miguel 
console.log(false || !false); //Pablo
console.log(false || false || true);//Pablo  
console.log(true || false || false && true);//Miguel
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string
let sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191
//! Operadores de comparacion (===,==)
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false


console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false


console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true

console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true
    
//! Operadores de comparación - continuación
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true

console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true

console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true


"ABCDEFG......abcd....."

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true

//! Delete
let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined
console.log(user)

//! Ternario

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

//!PRECEDENCIA

let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false
    






    




    




    

