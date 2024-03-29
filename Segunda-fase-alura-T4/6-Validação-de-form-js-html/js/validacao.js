export function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){ 
        validadores[tipoDeInput](input)
    }
    
    /* Essa condição testa se o objeto validity é verdadeiro , se verdadeiro eu escondo a classe input-container--invalido 
    do input*/ 
    if(input.validity.valid){
        input.parentElement.classList.remove('.input-container--invalido');   
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''; 
    }else{  
        input.parentElement.classList.add('.input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input); 
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

    dataNascimento:{ 
        valueMissing: 'O campo de data de nascimento não pode estar vazio.', 
        customError: 'Você deve ser maior de 18 anos para se cadastrar.' 
    },

    cpf:{ 
        valueMissing:'O campo de CPF não pode estar vazio.', 
        customError:'O CPF digitado não é válido.'
    },

    cep:{ 
        valueMissing:'O campo CEP não pode estar vazio.',
        patternMismatch: 'O CEP digitado não é válido', 
        customError: 'Não foi possivel buscar o CEP.'
    },

    logradouro:{ 
        valueMissing:'O campo de logradouro não pode estar vazio',
    }, 

    cidade:{
        valueMissing:'O campo de cidade não pode estar vazio',
    },

    estado:{
        valueMissing:'O campo de estado não pode estar vazio',
    },

    preco:{ 
        valueMissing:'O campo de preço não pode estar vazio',
    }
}

const validadores = { 
    dataNascimento: input => validaDataNascimento(input), 
    cpf: input => validaCPF(input), 
    cep: input => recuperarCEP(input)
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

/*Aqui eu formato o CPF antes de valida-lo, o valor da const será o valor do input
tratado pegado somente o valor do mesmo e aplicando um metodo replace que substitui
o valor da string por um outro valor passado dentro do metodo ,no nosso caso ele vai
retiar os pontos entre os números do CPF e substitui-lo por espaços vazios.*/ 
function validaCPF(input){ 
    const cpfFormatado = input.value.replace(/\D/g, '')

    let mensagem = ' '

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){ 
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

var cpfValido = true 

    valoresRepetidos.forEach(valor =>{ 
        if(valor == cpf ){
            cpfValido = false   
        }
    })
} 

function checaEstruturaCPF(cpf){
    const multiplicador = 10 


    return checaDigitoVerificador(cpf,multiplicador)
}

function checaDigitoVerificador(cpf,multiplicador){
    if(multiplicador >= 12 ){ 
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0 
    const cpfSemDigitios = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)

    for(let contador = 0 ; multiplicadorInicial > 1; multiplicadorInicial--){
        soma = soma + cpfSemDigitios[contador] * multiplicadorInicial
        contador++
    }

    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito(soma){
    return 11 - (soma % 11)
}

function recuperarCEP(input){
    const cep = input.value.replace(/\D/g, '') 

    const url = `https://viacep.com.br/ws/${cep}/json/`
    const options = {
        method: 'GET', 
        mode: 'cors',
        headers:{ 
            'content-type' : 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.valididy.valueMissing){ 
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
               if(data.erro){
                input.setCustomValidity('Não foi possivel buscar o CEP.')
                return
               } 
                input.setCustomValidity('')
               preencherCamposComCEP(data)
               return
            }
        )

    }
}

function preencherCamposComCEP(data){
    const logradouro = document.querySelector('[data-tipo="logradouro"]')
    const  cidade = document.querySelector('[data-tipo="cidade"]')
    const estado = document.querySelector('[data-tipo="estado"]')

    logradouro.value = data.logradouro 
    cidade.value = data.localidade 
    estado.value = data.uf
}
