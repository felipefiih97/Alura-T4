Curso 2 - HTML e CSS - Pagina de produtos . 


Position : altera a posição do elemento html 
    position : relative (o elemento fica deslocado mas o seu ponto inicial continua onde ele estava)

    position:absolute (quando o ponto inicial e o elemento mudam de posição)

    obs: se vc tem um elemento que é absolute dentro de uma div ele será absolute para a pagina toda, para que ele seja aboluto para a div ,ela tem que ser relative.

    *para que um elemento seja absoluto a uma div a div tem que ser relative*

    Box-sizing: define como o usuário deve calcular a largura total e a altura de um elemento,
    ela tem duas propriedades que podem ser adicionadas para definir o box-sizing. 

            * content-box: esse é o valor padrão do box-sizing com esse valor as propriedades de altura e largura incluem apenas o conteúdo , a borda e o preenchimento são incluidos foram desse calculo. 

            * border-box: com esse valor as propriedades de largura e altura são incluidas no calculo do conteúdo, então significa que se definirmos um elemento com largura de 200px ,esse 200px incluirão qualquer borda e preenchimento adicionados. 

hover: basicamente o hover é um seletor utilizado para estilizar um elemento quando o mouse passa por cima dele. *Pode ser utilizado em todo os elementos*. 
    Ex. Podemos estilizar um h1 quando passamos o mouse por cima com um :
        *primeiro eu chamo o elemento e logo após chamo o hover*
        *aqui vamos mudar a cor do elemento quando passarmos o mouse por cima*
        h1:hover {
            color: white;
            background-color: green; 
        }

active: a mesma coisa do hover só que ele estiliza o elemento quando clicamos no mesmo. 
        *Também serve para todos os elementos*

        Ex. Vamos mudar a cor do h1 de preto para verde quando ele for clicado

        h1:active{ 
            color:green; 
        }

sibolos unicode : são simbolos universais ultilizados em todo mundo por ex. simbolo do copyright,
    para adicionar esse tipo de simbolo ao arquivo html só precisamos encontrar um o código do simbolo e adicionar no html . 
        *site para encontrar os simbolos e códigos: https://unicode-table.com/pt/
        Ex. para adicionar o simbolo do copyright colocamos o código &copy; dentro da tag te texto html <p>. 
                                <html>
                                    <p>&copy; Copyrigh </p>
                                </html>  