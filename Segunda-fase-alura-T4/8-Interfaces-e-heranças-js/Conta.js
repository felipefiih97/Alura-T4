import {Cliente} from "./Cliente.js"

// a classe Conta é uma classe abstrata que não pode ser instânciada
export class Conta{ 
    constructor(saldoInicial,cliente,agencia, ){
        if(this.constructor == Conta){
            throw new Error("Você não pode instâciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata")
        }
        this._saldo = saldoInicial; 
        this._cliente = cliente; 
        this._agencia = agencia;
        console.log(this.constructor)
}

set cliente(novoValor){
    if(novoValor instanceof Cliente){
        this._cliente = novoValor;   
    }
}

get cliente(){
    return this._cliente;  
}

get saldo(){ 
    return this._saldo
}

sacar(valor){ 

    let taxa = 1; 
    return this._sacar(valor, taxa);
};

_sacar(valor,taxa){
    const valorSacado = taxa * valor ; 
    if(this._saldo >= valor){ 
        this._saldo -= valor 
        return valorSacado;
    }else{ 
        return 0;
    }
   
}
// no metódo abaixo estamos aplicando o early return que nada mais é que fazer com que
// o metódo retorne algo no meio da operação caso uma condição seja atendida.
depositar(valor){ 
    if(valor <= 100 ){
         return ;  
    }
    this._saldo += valor;    
};

transferir(valor, conta){
    if(this._tipo == "salario"){
        return; 
    }
    const valorSacado = this.sacar(valor); 
    conta.depositar(valorSacado);

}
}