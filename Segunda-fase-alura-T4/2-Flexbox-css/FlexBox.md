# Flexbox 

O flexbox nada mais é que um modelo layout css usado para organziar elementos em uma tela como também pode ser usado para organizar espacialmente os elementos em uma interface.

Para utilizar o flexbox temos que primeiro entender como ele funciona, para que se possa utilizar o flexbox primeiramente vc deve: 

* aplicar o display:flex no elemento HTML pai que se desejamos alinhar, esse   elemento passa a ser chamado de ***flex container*** e todos os items dentro dele são chamados de flex-items.    

            
    Exemplo:  
    ~~~css  
        .cabecalhoPrincipal .container {
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        }
    ~~~ 

No código acima eu definir o display flex no elemento pai (container) dos elementos nos quais eu quero aplicar o layout, após definir o display eu já modifico o layout dos elementos filhos deixando-os em sentido de linha com:  flex-direction: row ; depois dando espaço entre eles com : justify-content: space-between; e alinhando-os todos com:align-items: center.

## Display:flex e Display:inline-flex.

    Existe uma diferença ao definir um flex-container com o display flex ou display inline-flex, quando se define um elemento com o display:flex ele passa a ocupar 100% do seu pai , mesmo depois de defnir a largura e a altura não se pode colocar um outro elemento do lado dele. 

    Já quando definimos um flex-container com o dlsplay: inline-flex esse container vai ter a largura(width) e a altura(height) definidos de acordo com o tamanho dos elementos que estão dentro dele , o que significa que ele só ocupa o tamanho dos elementos filhos(***flex-items***) que estão dentro dele. 