import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

/*As classes são os moldes que constroi os objetos, dentro delas nos 
temos as atributos que armazenam os dados dos objetos criados e metodos que fazem com que as classes
executem alguma ação. 
*/ 

/*Abaixo podemos observar a instânciação de uma classe ,instânciar uma classe é o processo de
construção de um novo objeto ,aqui a const cliente01 é uma instâcia da classe Cliente().
 */  
const cliente01 = new Cliente('Ricardo',11122233344); // instânciação 
     // atribuindo valor ao atributo    


const cliente02 = new Cliente('Georgia', 99988877722); 

const cliente03 = new Cliente('Marcos', 87954276398); 

console.log(cliente02)

const ContaCorrenteRicardo = new ContaCorrente(cliente01,1001);
ContaCorrenteRicardo.depositar(500)
ContaCorrenteRicardo.sacar(0) // usando o metodo de sacar.

console.log(ContaCorrenteRicardo)


const Conta2 = new ContaCorrente(); 
Conta2.cliente = cliente02; 
Conta2.agencia = 1002;

const Conta3 = new ContaCorrente(); 
Conta3.cliente = 0;
Conta3.agencia = 1002


console.log(Conta3)


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

const contapoupanca = new ContaPoupanca();