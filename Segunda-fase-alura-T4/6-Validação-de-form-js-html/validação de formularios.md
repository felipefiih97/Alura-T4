# Validação de formulários HTML #

## Validação direto no html ##
    Podemos faezr algumas praticas de validação basicas diretamente no  html da pág utilizando alguns metódos como: definir o **type** de um campo input e adicionar
    um atrbuto **required** que basicamente faz com que aquele campo tenha um 
    preenchimento obrigatório.

## Regex (expressões regulares) ##
        Podemos utilizar um regex dentro de um pattern, a regex ou expressões regulares é uma forma concisa e flexivel de se identificar cadeias de caracteres. 
        (padrões de caracters, palavras ou caracteres particulares)
        
        A seguir temos um exemplo de como utilizar um regex dentrp do pattern e o  required : 

        ~~~html 
            <input name="senha" id="senha" class="input" type="password" placeholder="Senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%*_=+-]).{6,12}$" required>
        ~~~

        Vamos analisar a expressão regular e assim entender melhor sua estrutura:

        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%*_=+-]).{6,12}$"

        * ^ , $ : O primeiro e ultimo simbolo da expressão são os que definem até onde queremos checar esse padrão, tudo que estiver dentro deles será analisado.

        * Dentro deles nós temos os conjuntos de regras que são dividos entre parenteses.
        * ?= : quando começamos com esses caracteres significa que nós permitimos que se aceite alguns carateres. 

        * . : quando temos o ponto significa que não é permitido que quebra de linhas (enters) dentro da senha.

        * * : o asterisco significa que dentro da senha tenha ao menos um desses caracteres. 

        * [a-z] : aqui nós temos os caracteres que são válidos. 

        * !? : quando o conjunto de regras se inicia com uma exclamação e interrogação significa que aqueles carateres não são permitidos.

        * .{6,12} : significa que a senha tenha um tamanho entre 6 a 12 caracteres.

### Title ###

        Adicionamos a o metodo title dentro do input para definir uma mensagem informando o usuário sobre as regras para a criação a senha seguindo corretamente as regras das expressóes regex. 

        ~~~html 
            <input name="senha" id="senha" class="input" type="password" placeholder="Senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%*_=+-]).{6,12}$" title="A senha deve conter de 6 a 12 caracteres , deve conter pelo menos uma letra maiuscula , um número e nçao deve conter simbolos" required>
        ~~~

### Criando uma validação com Javascrip ###
            
            Vamos criar uma validação pelo javaScript, que é o que seria o mais recomendavel e o mais utilizado pelos programadores. 

            Vou dividir a validação em duas funções: captura dos dados e conversão, e teste de validação. 

#### Captura dos dados ####
            
            Essa primeira função eu pego a data em formato string e a transformo em formato em formato calendário, eu pego apenas o valor do input. 

            ~~~javascript

                        function validaDataNascimento(input){
                            const dataRecebida = new Date(input.value);
                            const mensagem = '';

                        if(!maiorQue18(dataRecebida)){ 
                            mensagem = "Você deve ser maior que 18 anos para se cadastrar."    
                        }
                            /* Utilizamos essa propriedade para validar o campo input,
                                se caso esse input estiver válido a mensagem que ele vai passar é uma string vazia.*/
                        input.setCustomValidity(mensagem); 
                        }
            ~~~

            A segunda função serve para comparar o numero que foi recebido no input que é a const dataMais18 com a a data atual que esta na const dataAtual , no final da função ela retorna a comparação entres as duas consts.

            ~~~~javascript
                
                    function maiorQue18(data){
                        // aqui criamos uma const com o valor de hj 
                        const dataAtual = new Date(); 
                        const  dataMais18 = new Date(data.getUTCFullYear() + 18 , data.getUTCMonth(), data.getUTCDate())

                        return dataMais18 <= dataAtual 
                    }
            ~~~~