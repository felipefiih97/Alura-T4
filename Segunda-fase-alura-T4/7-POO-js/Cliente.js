export class Cliente{ 
    // atributos

    get cpf(){ 
        return this._cpf; 
    }

    constructor(nome,cpf){ 
        this.nome = nome 
        this._cpf = cpf
    }
}

