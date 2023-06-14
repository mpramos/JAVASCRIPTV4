///!Sin Objeto
// Este es mi usuario numero 1
let name1 = "Calvin";
let age1 = 66;
let surname1 = "Hart";
let email1 = "CalvinMHart@teleworm.us";
console.log(name1,surname1,age1,email1);

// Este es mi usuario numero 2
let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";
console.log(name2,surname2,age2,email2);

// Este es mi usuario numero 3
let name3 = "Calvin";
let surname3 = "Hart";
let age3 = 66;
let email3 = "CalvinMHart@teleworm.us";
console.log(name3,surname3,age3,email3);

// Este es mi usuario numero 4
let name4 = "Mateus";
let surname4 = "Pinto";
let age4 = 21;
let email4 = "MateusPinto@dayrep.com";
console.log(name4,surname4,age4,email4);

//! Con Objeto
let user1={
    name: "Calvin",
    surname : "Hart",
    age1 : 66,
    email :"CalvinMHart@teleworm.us"
}
console.log(user1);
let user2={
    name2 : "Mateus",
    surname2 : "Pinto",
    age2 : 21,
    email2 : "MateusPinto@dayrep.com"
}
console.log(user2.name2);
//!ARREGLOS
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[1]); // -> Mon
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

let nombre="Jose"
nombre[0]="M"
console.log(nombre);

days[0] = "Sunday";
console.log(days[0]); // -> Sunday
console.log(days);

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined
 // ARRAY CON CONSTRUCTOR
let arr=Array(10)
console.log(arr);

let comida=[["🥑","🥦","🥩"],["🍕","🌭","🍔","🍟"]]
console.log(comida[1][3]);
console.log(comida[1][3]);
console.log(comida[0][1],comida[0][0]);
    
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];
console.log(users);
console.log(users[0].name);
console.log(users[1].age);




let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false

let names1  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names1.length); // -> 4

names1[5] = "Amelia";
console.log(names1.length); // -> 6

console.log(names1); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names1[3]); // -> Samuel
console.log(names1[4]); // -> undefined
console.log(names1[5]); // -> Amelia

//! Metodos de arreglos
//?length
frutas=["🥝","🍓","🍊","🍋","🍊"]  
console.log(frutas.length);
//? IndexOf
//? LastIdexOf
let frutas=["🥝","🍓","🍊","🍋","🍊"]  
console.log(frutas.indexOf("🍎"))
console.log(frutas.indexOf("🍊"))
console.log(frutas.lastIndexOf("🍊"))
//? Push
let frutas1=["🥝","🍓","🍊","🍋","🍊"]  
// frutas1[5]="🍉"
// frutas1[6]="🍉"
// frutas1[7]="🍉"
frutas1.push("🍉")
console.log(frutas1);
//? unshift
frutas1.unshift("🍉")
console.log(frutas1);
//? pop
frutas1=["🥝","🍓","🍊","🍋","🍊"]  
frutas1.pop()
console.log(frutas1);
//? shift
frutas1=["🥝","🍓","🍊","🍋","🍊"]  
frutas1.shift()
console.log(frutas1);
//? reverse
frutas1=["🥝","🍓","🍊","🍋","🍊"]  
console.log(frutas1.reverse());

//? SLICE
let namess = ["Olivia", "Emma", "Mateo", "Samuel","Camila"];

//2
console.log("2");
let n1 = namess.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]

console.log("1,4");
let n2 = namess.slice(1,4);
console.log(n2); // -> ["Emma", "Mateo"]

console.log("0,-2");
let n3 = namess.slice(0, -2);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

console.log("-2");
let n4 = namess.slice(-2);
console.log(n4); // -> ["Samuel"]

console.log(namess); // -> ["Olivia", "Emma", "Mateo","Samuel"]
//? concat
let frutas2=['🍋','🍊','🍓']
let comidas2=['🍕','🍔','🍟']
let frutaComida=frutas2.concat(comidas2)
console.log(frutaComida);
    
//LABORATORIO
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

   // Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.
   contacts.push({name:"Maisie Haley",phone:"0913 531 3030",email:"risus.Quisque@urna.ca."})
   console.log(contacts);
   let primerContacto= contacts[0]
   let ultimoContacto= contacts[contacts.length-1]
   console.log(primerContacto.name + ' / '+ ultimoContacto.name);
   console.log(primerContacto.email + ' / '+ ultimoContacto.email);
   console.log(primerContacto.phone + ' / '+ ultimoContacto.phone);


    




