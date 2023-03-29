export function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){ 
        validadores[tipoDeInput](input)
    }
    
    /* Essa condição testa se o objeto validity é verdadeiro , se verdadeiro eu escondo a classe input-container--invalido 
    do input*/ 
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido');   
        input.parentElement.querySelector('input-mensagem-erro').innerHTML = ''; 
    }else{  
        input.parentElement.classList.add('.input-container--invalido');
        input.parentElement.querySelector('input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input); 
    }
} 

const tiposDeErro = [  
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagemDeErros = { 
    nome: { 
        valueMissing: 'O campo nome não pode estar vazio.'
    }, 
    email:{
    valueMissing: 'O campo de email não pode estar vazio.',
    typeMismatch: "O email digitado não é válido."
    }, 
    senha:{ 
        valueMissing:'O campo senha não pode estar vazio.', 
        patternMismatch: 'A senha deve conter de 6 a 12 caracteres , deve conter pelo menos uma letra maiuscula , um número e não deve conter simbolos' 
    }, 

    dataNascimento: { 
        valueMissing: 'O campo de data de nascimento não pode estar vazio.', 
        customError: 'Você deve ser maior de 18 anos para se cadastrar.' 
    }

    cpf: { 
        valueMissing:'O campo de CPF não pode estar vazio.', 
        customError:'O CPF digitado não é válido.'
    }
}


const validadores = { 
    dataNascimento: input => validaDataNascimento(input), 
    cpf: input => validaCPF(input)
    
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = '' 
    tiposDeErro.forEach(erro => { 
        if(input.validity[erro]){ 
            mensagem = mensagemDeErros[tipoDeInput][erro]
        }
    }) 
    return mensagem
}

/* Essa primeira função eu pego a data em formato string e a transformo em formato
em formato calendário, eu pego apenas o valor do input.  */
function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    var mensagem = '';

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

function validaCPF(input){ 
    const cpfFormatado = input.value.replace(/\D/g, '')

    let mensagem = ' '

    if(!checaCPFRepetido(cpfFormatado)){ 
        mensagem = 'O CPF digitado não é valido'
    }

    input.setCustomValidity(mensagem);
}

function checaCPFRepetido(cpf){ 
    const valoresRepetidos = [ 
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true 

    valoresRepetidos.forEach(valor =>{ 
        if(valor == cpf ){
            cpfValido = false   
        }
    })
} 


