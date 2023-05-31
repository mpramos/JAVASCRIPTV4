let elemento1="electricidad"
let elemento2="agua"
let elemento3="aire"
let elemento4="puerta"

{
    let nombre="cocina"
    let elementoc1="🍔"
    let elementoc2="🍕"
    console.log(nombre);
    console.log(elemento1);
    console.log(elemento2);
    console.log(elemento3);
    console.log(elemento4);
    console.log(elementoc1);
    console.log(elementoc2);
    console.log(elementob1);
}
{
    let nombre="baño"
    let elementob1="🚿"
    console.log(nombre);
    console.log(elemento1);
    console.log(elemento2);
    console.log(elemento3);
    console.log(elemento4);
    console.log(elementob1);
    console.log(elementoc2);
    
}
{
    let nombre="patio"
    let elementop1="🎇"
    console.log(nombre);
    console.log(elemento1);
    console.log(elemento2);
    console.log(elemento3);
    console.log(elemento4);
    console.log(elementop1);
    console.log(elementob1);

}

let elemento5="bloque5"
{
    let elemento5="bloque no 5"
    console.log(elemento5);
}
console.log(elemento5);
const elemento6="bloque5"
{
    const elemento6="bloque no 5"
    console.log(elemento6);
}
console.log(elemento6);



let height = 200;
{
    console.log(inf);
    let weight = 100;
    {
        let info = "tall";
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }
    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info is not defined
 }
    
 var height = 180;
 {
     var peso = 70;
     console.log(height); // -> 180
     console.log(peso); // -> 70   
     var height = 380;
}
    console.log(height); // -> 180
    console.log(peso); // -> 70
     
 
 



