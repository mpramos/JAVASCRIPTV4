class Persona {
    constructor(nombre='Miguel',apellido='Gonzales',edad=25,email='12234@gmail.com',telefono='2345678'){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.email=email
        this.telefono=telefono
        this.score=0
        this.skills=[]
    }
    getFullName(){
        const fullName= this.nombre + ' ' + this.apellido
        return fullName
    }

    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills

    }
    set setSkills(skills){
            this.skills.push(skills)
    }
    set setScore(score){
        this.score+= score
    }
}
const persona1= new Persona('Juana','Valencia',30,'123@gmail.com','26667')
const persona2= new Persona()
console.log(persona1);
console.log(persona2);
console.log(persona1.getFullName());
console.log(persona2.getFullName());
// console.log(persona1.score);
// console.log(persona2.score);
// console.log(persona1.skills);
// console.log(persona2.skills);
console.log(persona1.getScore);
console.log(persona2.getScore);
console.log(persona1.getSkills);
console.log(persona2.getSkills);

persona1.setScore=1
persona1.setSkills='HTML'
persona1.setSkills='CSS'
persona1.setSkills='JavaScript'
console.log(persona1.score);
console.log(persona1.skills);