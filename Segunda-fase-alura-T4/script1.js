function areaQuadrado(l){ 
    return l*l;
};

function perimetroQuadrado(l){ 
    return l * 4;
};

function saudacao(nome){                                                                                    
    var sauda  = `Olá ${nome}, seja bem vindo. `;
    return sauda
};

const var1 = "Barros";
const var2 = 'Saraiva';

export default {
    variavel: var1, 
    variavel2: var2,
}

module.exports = { 
    areaQuadrado,perimetroQuadrado,saudacao
};