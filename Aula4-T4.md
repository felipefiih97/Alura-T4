## Nessa quarta aula vamos estilizar apagina principal home, vamos estiliza-la e modificar sua composição com novas funções aprendidas durantes os outros módulos.
 
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
# Obs: nós trazemos esse conteúdo como um iframe e quando queremos fazer algum detalhe visual (como centralizar o conteúdo) nos botamos uma div em volta e tratamos esse conteúdo. 

## Pseudo-elementos

            *Os pseudos-elementos 