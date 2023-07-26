console.log('primera tarea');
console.log('segunda tarea');
setTimeout(() => {
    console.log('tercera tarea');
}, 3000);
console.log('cuarta tarea');

//!PROMESAS 
// pendiente : estado inicial, no es cumplida ni rechazada
// cumplido : operacion se completó coon éxito
// rechazado : operación falló
//? Contructor promesas
 const promesas= new Promise((resolve,reject)=>{
    resolve('satisfactorio')
    reject('falla')
 }) 

 // Ejemplo aplicativo
const promesa1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        const skills=['HTML','CSS','JS ']
        // const skills=[]
        if(skills.length>0){
            resolve(`Habilidades: ${skills}`)
        } else{
            reject("No hay habilidades")
        }
    }, 2000);
})
promesa1
    .then(r=>console.log(r))
    .catch(e=>console.log(e))
    
const promesa2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // let skills=['HTML','CSS','Node']
        let skills=['HTML','CSS']
        if (skills.includes('Node')) {
            resolve ('Fullstack developer')
        } else{
            reject ('Falta Node en las habilidades ')
        }
    },2000)
})
promesa2
.then( resultado=>console.log(resultado))
.catch(error=> console.log(error))

//! FETCH

let url='https://rickandmortyapi.com/api/characterr'
fetch(url)
.then(respuesta => respuesta.json())
.then(data=> console.log(data))
.catch(error=>console.log(error))

//! Async await

// const cuadrado= async function (n) {
    //     return n*n
    // }
// const valor= await cuadrado(2)
// console.log(valor); 

let url1='https://rickandmortyapi.com/api/character'

const fetchData = async ()=>{
 try {
    const respuesta= await fetch(url1)
    const data=await  respuesta.json()
    console.log(data);
 } catch (error) {
    console.log(error);
 }
}
fetchData()


