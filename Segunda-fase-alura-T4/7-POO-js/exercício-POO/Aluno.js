import { Professor } from "./Professor.js"; 

export class Aluno{
    nome; 
    idade; 
    turma; 
    materias;
}

const aluno01 = new Aluno(); 
aluno01.nome = "Felipe"
aluno01.idade = 16
aluno01.turma = 102

const prof1 = new Professor("Claudio","Matématica",1001,aluno01);  

console.log(prof1) 

 