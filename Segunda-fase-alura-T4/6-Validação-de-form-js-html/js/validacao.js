export function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){ 
        validadores[tipoDeInput](input)
    }
}

const validadores = { 
    dataNascimento: input => validaDataNascimento(input)
}


/* Essa primeira função eu pego a data em formato string e a transformo em formato
em formato calendário, eu pego apenas o valor do input.  */
function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    const mensagem = '';

   if(!maiorQue18(dataRecebida)){ 
       mensagem = "Você deve ser maior que 18 anos para se cadastrar."    
   }
    /* Utilizamos essa propriedade para validar o campo input,
        caso esse input estiver válido a mensagem que ele vai passar é uma string vazia.*/
   input.setCustomValidity(mensagem); 
}

/* Função para comparar as datas*/

function maiorQue18(data){
    // aqui criamos uma const com o valor de hj 
    const dataAtual = new Date(); 
    const  dataMais18 = new Date(data.getUTCFullYear() + 18 , data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual 
}