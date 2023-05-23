/*Organização de código */

/*Abaixo eu definir uma função com um wrapper que nada mais é que embrulhar uma função 
 com parênteses */ 

var GlobalCar = (function(){console.log("less ins more!");

    // defini um obj vazio//
    var box = {}; 

    box.queue = [];
    box.addItem = function(car){
        return box.queue.push(car);
    };

    box.getQueue = function(){
        return box.queue.join("-")
    };

   //Seleciono qual metódo e/ou propriedades podem ser acessadas. 
   //o addItem virou add: e o getQueue virou get:
    return { 
        add: box.addItem, 
        get: box.getQueue
    };
}) ();
    //aqui eu chamo os metódos de GlobalCar com add: e get:
GlobalCar.add("Cerato");
GlobalCar.add("Corsa")

console.log(GlobalCar.get())
