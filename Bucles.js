
//! FOR
for (let numero = 0; numero <=5; numero++) { // 0 1...6
    console.log(numero);//0 1 5
}
for (let numero = 0; numero <=5; numero++) {
    console.log(numero + '* '+numero + '= '+ numero *numero)
    
}
//?BREAK
for (let numero = 0; numero <=5; numero++) {
    if (numero==3) {
        break
    }  
    console.log(numero)  
}
//?CONTINUE 
for (let numero = 0; numero <=5; numero++) {
    if (numero==3) {
        continue
    }  else{
        console.log(numero)  

    }
}


//TODO TERMINAR CON EJEMPLOS DE ARREGLOS
//! WHILE
let i=0
while (i<=5){
    console.log(i);
    i++;
}
//! DO WHILE
let e=6
do{
    console.log(e);
    e++
} while(e<=5)


