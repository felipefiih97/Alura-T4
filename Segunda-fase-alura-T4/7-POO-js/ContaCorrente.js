import { Cliente } from "./Cliente.js";

export class ContaCorrente{ 
    static numeroDeContas = 0 ; //esse atrbuto pertence a classe como um todo e não somente a instâcia. 
    _cliente;
    agencia; 
    // #saldo é um atributo privado que não pode ser alterado pelo usuario 
    // essa conversão(#saldo) não é oficial da lang e não é muito utilizada pelos 
    // desenvolvedores. 
    _saldo = 0 ; 

    // acessor do tipo set
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;   
        }
    }

    constructor(cliente,agencia){ 
            this._cliente = cliente; 
            this.agencia = agencia; 
            ContaCorrente.numeroDeContas += 1; // contador que conta a quantidade de contas intânciadas.
    }

    get cliente(){
        return this._cliente;  
    }

    get saldo(){ 
        return this._saldo
    }
    /*Metodo: uma função dentro de uma classe é chamada de método 
        a função abaixo é um método que faz operação de saque 
        dentro da class ContaCorrente.
    */ 
    sacar(valor){ 
        if(this._saldo >= valor){ 
            this._saldo -= valor 
            return valor;
        }else{ 
            console.log("Saldo insuficiente")
        }
    };
    // no metódo abaixo estamos aplicando o early return que nada mais é que fazer com que
    // o metódo retorne algo no meio da operação caso uma condição seja atendida.
    depositar(valor){ 
        if(valor <= 0 ){
             return console.log("Valor invalido");  
        }
        this._saldo += valor;
        console.log(this._saldo)  
        
    };

    transferir(valor, conta){
        const valorSacado = this.sacar(valor); 
        conta.depositar(valorSacado);

    }
}