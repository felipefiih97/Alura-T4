## Nessa quarta aula vamos estilizar a página principal home, vamos estiliza-la e modificar sua composição com novas funções aprendidas durantes os outros módulos.
 
<section> : essa tag é recomendada para ser utilizada quando todos o agrupamento de conteúdos estão semâticamente relacionados. 

classes e identificadores (class = " " & id = " "):

    *Utilize a classe quando quiser aplicar um estilo e ultilize o id quando quiser aplicar um comportamento ao elemento.

## MEDIDAS PROPORCIONAIS COM CSS.
    *Para que os elementos  tenham medidas proporcionais utilizamos as medidas em (em) que é  uma medida proporcional pra pixels, significa que se minha fonte base tem 15px o em assume o dobro do valor . 
        ex. font-size: 2em; = 2x o tamanho base; 
        
        *podemos fazer com a margem também seja proporcional ao tamanho da fonte principal. 

            ex. margin: 0 0 0 1me; = a margem proporcional 2x o tamanho da fonte principal.

## PROPRIEDADE FLOAT CSS: 
    * A propriedade float do css é determina que um elemento deve sair de seu fluxo normal e assumir uma posição a esquerda ou a direita do container onde ele está, os textos elementos irão se posicionar ao seu redor. 

        ## sintaxe: float:left ou float:right
        
    *Basicamente é como se o elemento se descolasse da página mas ainda fica com uma "sombra"embaixo e todos os elementos que estão abaixo ficam em volta dessa "sombra".  

    *Abaixo temos um exemplo de implementação do float em um elemento.
    Ex. 

    ~~~css
        .utensilios{ 
            width: 150px;
            float: left;
            margin: 0 20px 20px 0 ;
        }
    ~~~
### obs: o float altera completamente toda a estrutuda da página , todos os elementos abaixo do float são afetados por ele. 
            
            *Para limpar essas alterações do float em algum elemento utilizamos a propriedade CLEAR.

            *No exemplo a seguir vamos limpar o float dos elementos abaixo dele e criar uma "barreira". 

            *Repare que eu definir o lado no qual o float foi definido no elemento , no caso left.

            ~~~css
                .titulo-principal{
                    text-align: center;
                    font-size: 2em;
                    margin: 0 0 1em;
                    clear: left;  /* limpa a esquerda*/
                }
            ~~~

### Conteúdos externos no html 

            # FONTES : para adicionar fontes no html é muito fácil , basta entrar em algum site que tenha fonts , copie e cole o link da font no head do html. 

            ~~~html
                <head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap" rel="stylesheet">
                </head>
            ~~~

            * Você pode adicionar a fonte no css dessa forma:

                ~~~css
                    .body{
                        font-family: 'Montserrat', sans-serif;
                    }
                ~~~

            # MAPAS: Para adicionar mapas ao html é bem parecido com o processo para adicionar fonts, 
            basta entrar no google maps pegar o link <iframe> e colar no html.

            ~~~html
                    <html>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48682." width="100%" height="300" style="border:0;" 
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </html>
            ~~~

            * A estilização é pelo CSS igual a qualquer outro elemento html.

            # VIDEO:Para adicionar e estilizar é o mesmo processo do maps .
## Obs: nós trazemos esse conteúdo como um iframe e quando queremos fazer algum detalhe visual (como centralizar o conteúdo) nos botamos uma div em volta e tratamos esse conteúdo. 

## PSEUDO-CLASSES. 

            *As pseudos-classes esta relacionado a um evento que vc quer adicionar a um elemento especifico ou então com relação de uma tag com suas tags filhas. 

            EX.

                ~~~css
                    a:hover{
                        /*formatação*/
                    }

                    input[type = text]:focus{
	                            /*formatação*/
                    }
                    input.formulario:required{
                        /*formatação*/
                    }
                    #lista:first-child{
                        /*formatação*/
                    }
                ~~~

## PSEUDO-ELEMENTO. 

        *É um seletor representado através de :: que permite estilizar parte especifica de um elemento ao invés dele como um todo , por isso o pseudo-elemento está constantemente relacionado a posições do conteúdo dentro do seletor ao qual estão associados.
        
        Ex. Podemos estilizar apenas a primeira letra de um texto em especifico.
        Ex.

            p::first-line{
	                /*formatação*/
                }
            h1#tituloPrincipal::first-letter{
	                /*formatação*/
                }
            div.conteudo::selection{
	                /*formatação*/
                }
## SELETORES AVANÇADOS. 

        *Os seletores são usados para selecionar elementos HTML nos atributos, estes seletores são divididos em alguns tipos que vou falar a seguir. 

        * SELETOR FILHO DIRETO: este seletor seleciona o primeiro elemento que é filho imediato do primeiro elemento que botamos como seletor.

                ** No exemplo abaixo a tag  <p> é o segundo elemento filho imediato do seletor div que é o primeiro elemento.

                SINTAXE:

                ~~~css
                    div > p { 
                        background-color: DodgerBlue; 
                    }
                ~~~

        * SELETOR DE IRMÃOS ADJACENTES: Seleciona todos os elementos que são irmãos adjacenetes do elemento especificado . Ele seleciona o segundo elemento que segue imediatamento o primeiro. 

                ** No exemplo abaixo a tag <p> é o segundo elemento depois do primeiro elemento especificado que é a tag <img>. a tag <p> segue imediatamente a  tag <img>. 

                SINTAXE:

                ~~~css
                    img + p{
                        background-color: Blue;
                    }
                ~~~

        * SELETOR GERAL DE IRMÃOS: Seleciona todos os elementos que vem depois do primeiro elemento seletor, eles , todos  os elementos tem que ser filhos do mesmo pai e não é necessário que o segundo siga imediatamente o primeiro. 
                ** No exemplo abaixo nós seleionamos todas as tags <p> que vem depois da tag <img>.

                SINTAXE: 

                ~~~css
                    img ~ p{ 
                        background-color: Red;
                    }
                ~~~
        
        *SELETOR DE EXCLUSÃO: Esse seletor "exclui" o elemento selecionado, ele basicamente não estiliza o elemento.
                ** No exemplo abaixo selecionamos a classe e os elementos <p> que vão receber a estilização e o elemento que não vai receber fica entre parenteses. 

                ~~~css
                    .principal p:not(#missão){
                            background-color: Red;
                    }
                ~~~
                
## Função calc(): 

                *A função calc() é uma função usada para fazer calculos com base nas propriedades do  css. 

        ~~~css 
            .utensilios {
            width: calc(40% - 26px);
        }
        ~~~

## Opacidade (opacity): 

        * Essa ferramenta põe uma camada na imagem dando opacidade. 
            Sintaxe:

            ~~~css
                .imagem-beneficios {
                     opacity: 0.3;
                }
            ~~~
        * dica: podemos fazer um elemento receber a opacidade assim que mouse passar por cima dele. 

            ~~~css
                .image-beneficios:hover{ 
                    opacity: 0.3;
                }
            ~~~

        OPACIDADE EM CORES: Para adicionar a opaciade em core vc faz isso através 
        da inserção da cor por rgba que é diferente do rgb normal , o rgba temm mais uma propriedade em sua  sintaxe para ser adicionada que é a camada de opacidade. 
            Obs: Posso utilizar a opacidade em qualquer tipo de elemento, em cores de texto e titulo , cores de bodas , cores de fundo etc.
            Sintaxe:

                ~~~css
                    .titulo-principal {
                        text-align: center;
                        font-size: 2em;
                        margin: 0 0 1em;
                        clear: left;
                        color: rgba(0,0,0,0.3);
                    }
                ~~~ 

## Adicionando sombras ao elemento: 

        *Podemos adicionar sombra nos elementos através da propriedade box-shadow. 

            * Esssa propriedade tem sua sintaxe dividida em alguns campos , temos os dois primeiros campos de eixo X E Y que são o posicionamento da sombra, os segundo campo é o que define o desfoque da sombra e último campo que é a cor da sombra.

            ~~~css 
                .imagem-beneficios{
                    box-shadow: 10px 10px 5px #000000;
                }
            ~~~

            ## Multiplas sombras: Podemos adicionar mais de uma sombra em um mesmo elemento sa seguinte forma. 
                Sintaxe:

                ~~~css 
                    .imagem-beneficios{
                        box-shadow: 10px 10px 5px 20px #00000, -10px -10px yellow, -20px 20px rgba(255,0,0,0.5);
                    }
                ~~~

            ## Sombra interna: Podemos criar uma sombra interna dentro do elemento adicionando a propriedade (inset). 
                    * O posicionamento será apartir do centro do elemento. 
                    * Para que a sombra se torne visivel precisamos adicionar um espaçamento pois a sombra  tem o mesmo tamanho do elemento se não adicionarmos o espaçamento. 
                Sintaxe:

                ~~~css 
                    .beneficios{
                        box-shadow: inset 0 0 30px #FF0000;                
                    }
                ~~~
            
            ## Sombra em Texto: Para criar sobra em texto é utlizado o mesmo processo para aplicar sombra em qualquer elemento. 

            Sintaxe:
    
                 ~~~css 
                    .titulo-principal{
                        box-shadow: 2px 2px  #FF0000;                
                    }
                ~~~