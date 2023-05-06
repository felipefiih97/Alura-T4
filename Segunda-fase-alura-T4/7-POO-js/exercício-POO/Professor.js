class Person{ 
    _nome; 
    turma;

    constructor(name,turma){ 
        this._nome = name ;
        this.turma = turma;
    }

    saudacao(nome){ 
        console.log("Olá", this._nome); 
    }

}

class Professor extends Person{  
    materia;
    alunos;
    constructor(nome,materia,turma,alunos){
        super(nome,turma);
        this.materia = materia;  
        this.alunos = alunos
    }

    checarTurma(turma){ 
        if(this.turma = turma ){ 
            console.log("O aluno está na sua classe", this.materia)
        }
    }
}

class Estudande extends Person{ 
    idade; 
    constructor(nome,turma,idade){ 
        super(nome, turma); 
        this.idade = idade;
    }

    saudacao(){ 
        console.log("Olá , meu nome é ", this._nome , "e sou da turma" , this.turma); 
    }

    validaIdadeAula(){ 
        return this.idade > 1 && this.turma == 1001;
    }
}

const alu01 = new Estudande("Felipe",1001,12);
alu01.saudacao() 
console.log(alu01)



const prof1 = new Professor("Claudio","Matématica",1001,102);
prof1.checarTurma(alu01.turma) 
console.log(prof1)
