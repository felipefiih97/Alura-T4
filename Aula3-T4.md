Lembrete: organizar os arquivos em diretórios por tipo de arquivo. 

Nessa quarta parte do curso temos algumas novas tags para a criação de um formulario mais semântico .

<form>: a tag form é uma seção de um documento formulário que contém controles interativos que podem ser submetidos a um sevidor web, o formulário é normalmente utilizado para coletas dados do usuário. 
    sintaxe: <form>
                <--Elementos de formulário-->
            </form>

 *Dentro do formulário temos os elementos que criam um form , abaixo vou listar alguns dos elementos que eu utilizei para fazer o formulário da barbearia alura. 

 <label> : o label é uma tag que representa uma legenda de algum item em uma pagina, vc pode utilizar o atributo for="" para vincular a label ao elemento. 
 
    *vc pode ultilizar um label para identificar um elemento do tipo input. 

<input> : É um elemento utilizado dentro do form para obter dados de entrada do usuário em vários tipo ,como texto,senha,e-mail, alterando seu tipo. 
        ex: No exemplo eu utilizei um label para representar um input que pega os dados de nome e sobrenome de um usuário. 
        *perceba que eu utilizei um id="nomesobrenome" para vincular o label ao input.
        *o type que eu selecionei foi do tipo text mas eu posso alterar de acordo o tipo de dado que o input irá receber. 
            <label for="nomesobrenome"> Nome e sobremone </label> 
            <input type="text" id="nomesobrenome" class="input-padrao" required>

<fieldset>: basicamente ele é utilizado para agrupar elementos dentro do formulário.
        *caso eu queira determinar um grupo de elementos que fazem parte de uma parte especifica do formulário.
<select> : representa um controle que representa um menu de opções , as opções são representadas pela tag <option>.
        *a tag <legend> faz a mesma função do paragrafo <p> , já como não existe paragrafo dentro do <fieldset> usamos o <legend> 
            ex: 
            <fieldset>
                <legend>Qual horário prefere ser atendido? </legend>
                    <select> 
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                    </select>
            </fieldset>

* Alguns tipos de inputs para celular: email, tel, number, password, date,  
  datetime, month e search.
* Como não permitir que um campo não seja preenchido, através do atributo required.
* Como exibir uma sugestão de preenchimento para os campos, através do atributo    placeholder.
* Como deixar uma opção marcada por padrão nos nossos input radio e checkbox, através do atributo checked.
* Como estruturar melhor o nosso código com fieldset e legend
* Como adicionar uma alternativa à imagem, descrevendo-a, com o atributo alt

CSS : fiz algumas alterações para estilizar o botão e deixa-lo com algumas ações após passar o mouse em cima e clicar, para isso utilizamos algumas propriedades que iremos falar a seguir. 

    trasnsition : essa propriedade é responsavel por fazer a alteração dos valores em uma transição de duração especifica.

        ex: utilizei a propriedade transition no elemento para alterar os valores de estilização dele . 
            * a transição terá 1 segundo de duração e será no elemento todo. 

        .botao-submeter{ 
                transition: 1s all;
                cursor: pointer;
        }

transform: essa propriedade é aonde nós colocamos os valores que serão alterados no elemento na hora da transition.
    ex: no exemplo abaixo eu utilizei o transform em um elemento que tem um hover , o hover é uma propriedade que ativa algo quando o mouse está em cima do elemento.

        ex: apliquei o transform em um elemento com hover , o que significa que o transform fara será aplicado quando o mouse passar  por cima do elemento.
            *o elemento vai mudar de cor ,de laranja para uma cor mais escura e vai mudar sua escala para um tamanho maior.

        .botao-submeter:hover{ 
            background:darkorange;
            transform: scale(1.2);
        }

         * o transform tem mais algumas pripriedade que podem ser utilizadas ,como a rotate.
         *para utilizar as duas propriedades eu tenho que colocalas uma do lado da outra  

        .botao-submeter:hover{ 
            background:darkorange;
            transform: scale(1.2) rotate(7deg);
        }

Tags semânticas para tabelas em html: 
 <table>: corpo da tabela , ela engloba toda a estrutura da tabela. 
 <tr> : é uma linha da tabela. 
 <td> : é uma célula da tabela que fica dentro de uma linha. 
 <thead>: é a tag que marca o cabeçalho da tabela.
 <tbody>: é o corpo da tabela. 
 <tfoot>: esse é o que marca o rodapé , ele poderia ser adicionado no final de cada linha ou no final da tabela. 

    *A tabela também possibilita a junção de celulas de uma linha para criar uma celula que irá ocupa todas estas células. Abaixo tem um exmeplo de como fazer aplicando diretamente na tag <td>.

        <tr>
            <td colsplan="5">Rio de Janeiro  </td>
        </tr> 
 
 


