function funcionExterna() {
    let contador=0
    function funcionInterna() {
        contador++
        return  contador
    }
    return funcionInterna
}
const funcionClosure= funcionExterna()

console.log(funcionClosure());
console.log(funcionClosure());
console.log(funcionClosure());
console.log(funcionClosure());


function funcionExt() {
    let contador=0
    function incrementar() {
        contador++
        return contador
    }
    function decrementar() {
        contador--
        return contador
    }
    
    return {
        increment:incrementar(),
        decrement:decrementar()
    }
}
const funcioClosure= funcionExt()
console.log(funcioClosure.increment);
console.log(funcioClosure.increment);
console.log(funcioClosure.decrement);