import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ 
    static numeroDeContas = 0 ; //esse atrbuto pertence a classe como um todo e não somente a instâcia. 
    constructor(cliente,agencia){ 
            super(0,cliente,agencia);
            ContaCorrente.numeroDeContas += 1; // contador que conta a quantidade de contas intânciadas.
    }

    teste(){ 
        super.teste();
        console.log(); 
    }
    // sobreescrevendo o comportamento de sacar 
    sacar(valor){ 

        let taxa = 1.1; 
        return this._sacar(valor,taxa);
    };
}