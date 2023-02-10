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

