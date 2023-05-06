
export class ContaPoupanca{ 
    constructor(saldoInicial,cliente,agencia, ){
            this._saldo = saldoInicial; 
            this._cliente = cliente; 
            this._agencia = agencia;
    }

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