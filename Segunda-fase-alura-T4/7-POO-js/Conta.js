

export class Conta{ 
    constructor(tipo,saldoInicial,cliente,agencia, ){
        this._saldo = saldoInicial; 
        this._cliente = cliente; 
        this._agencia = agencia;
        this._tipo = tipo;
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
    if(this._tipo == "corrente"){
        taxa = 1.1;
    }
    if(this._tipo == "salario"){
        taxa = 1.05;
    }
    if(this._tipo == "empresarial"){ 
        taxa = 1.15;
    }

    const valorSacado = taxa * valor ; 
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