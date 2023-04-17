/*As classes são os moldes que constroi os objetos, dentro delas nos 
temos as atributos que armazenam os dados dos objetos criados e metodos que fazem com que as classes
executem alguma ação. 
*/ 
class Cliente{ 
    nome;// atributos
    cpf;
}

class ContaCorrente{ 
    agencia; 
    saldo; 
    /* uma função dentro de uma classe é chamada de método 
        a função abaixo é um método que faz operação de saque 
        dentro da class ContaCorrente.
    */ 
    sacar(saldo){ 
        if(this.saldo >= saldo){ 
            this.saldo -= saldo 
        }else{ 
            console.log("Saldo insuficiente")
        }
    }
}
/*Abaixo podemos observar a instânciação de uma classe ,instânciar uma classe é o processo de
construção de um novo objeto ,aqui a const cliente01 é uma instâcia da classe Cliente().
 */  
const cliente01 = new Cliente(); // instânciação 
cliente01.nome = 'Ricardo';      // atribuindo valor ao atributo
cliente01.cpf = 11122233344;


const cliente02 = new Cliente(); 
cliente02.nome = 'Georgia'; 
cliente02.cpf = 99988877722; 


const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 100 
ContaCorrenteRicardo.agencia = 1001
ContaCorrenteRicardo.sacar(200) // usando o metodo de sacar.

console.log(ContaCorrenteRicardo)

console.log(cliente01);
console.log(cliente02);


class Animal{ 
    type; 
    name; 
    sound;
    age; 
    
    makeSound(){ 
        console.log(`${this.name} says:${this.sound}`);
    }
}

let animal01 = new Animal();
animal01.type = 'Felino'; 
animal01.name = 'Bidú';
animal01.sound = 'Miau'; 
animal01.age = 3

console.log(animal01)
animal01.makeSound();