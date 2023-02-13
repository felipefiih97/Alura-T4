# Modules Javascript

Os modules(modulos) em javascript é um recurso que auxilia muito o programador na hora de compartilhar blocos de códigos entre arquivos .js , cada arquivo é considerado um módulo que comporta suas funções e váriaveis, para que um outro módulo tenha acesso as funcionalidades do outro é necessário que ocorra o processso de importação e exportação. 

A seguir vamos demonstrar como utlizar o export e o import para realizar a troca de dados entre módulos.

### Export default: (caso mais comum).

Vamos explorar as diferentes formas de se realizar um export se quisermos exportar alguma variavel ou funções de um arquivo(módulo) para que sejam acessados em outro módulo. 

#### Export:
~~~javascript 
    //script1.js
    const calculoQuad = function areaQuadrado(l){ 
    return l*l;
} 

    export default calculoQuad;
~~~

   No código acima apliquei o processo de exportação no arquivo (módulo) //script1.js que contém a função areaQuadrado() que vamos exportar , para exporta-la vamos atribui o valor da função a uma váriavel e exportar com **export default 'nome da váriavel'**.

#### Import:
    
~~~javascript
    //script2.js
    import script1 ;    

    console.log(script1); // saida =>  a saida vai ser o valor de l*l retornado pela função. 
~~~
    Nessa segunda parte estou em outro arquivo (módulo) //script2.js que irá importar a função tornando-a disponivel para uso dentro desse novo módulo. 

    Você pode fazer o import colocando o nome que vc quiser mas colocar o nome igual ao nome arquivo é considerado uma boa prática.

## Exportar multiplos valores do módulo. 

    Até então exportando apenas uma função por vez ,agora vamos elevar o nível e fazer uma exportação de multiplos valores de um arquivo.

    Existe algumas formas para se fazer uma exportação de multiplos arquivos , irei apresenta-las a seguir. 

    Primeiro modo: exportar um objeto com os arquivos que queremos acessar no outro módulo. 
#### Export:
~~~javascript 
    //script1.js
    const calculoQuad = function areaQuadrado(l){ 
    return l*l;
} 

const perimetro = function perimetroQuadrado(l){ 
    return l * 4;
};

    export default {
        calculoQuad:calculoQuad,  
        calcperimetro:perimetro   
    };
~~~
#### Import: 
~~~javascript
    //script2.js 

    import script1; 
    console.log(script1);
~~~

O segundo modo para se exportar multiplos valores é inserindo o **export**
quando vamos fazer uma declaração de uma variavel ou função,veja como fazer no exemplo abaixo. 

#### Export: 
~~~javascript 
    //script1.js

    export const calculoQuad = function areaQuadrado(l){ 
    return l*l;
    }; 

   export const perimetro = function perimetroQuadrado(l){ 
    return l * 4;
    };
~~~

Perceba que no código a seguir a sintaxe muda pouco , além de adicionar o **expor ** antes da declação nós não precisamos deficnir umk objeto para fazer a exportação.

#### Import: 
~~~javascript 
    //script2.js
    import{calculoQuad , perimetro };
    console.log(calculoQuad, 'e' , perimetro);
~~~

Ao fazer o import perceba que a sintaxe do código também sofreu algumas alterações em relação ao código import do exemplo anterior, note que não estamos mais utilizando o **import modulo** mas fazendo um **object destructuring**, o que significa que estamos acessando cada valor individualmente.