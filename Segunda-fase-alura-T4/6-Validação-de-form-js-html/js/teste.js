/* testando meodo split() js */
var str = "hello" 

var result = str.split(); 

console.log(result[4])

function splitString(stringToSplit, separator){ 
    var arrayOfStrings = stringToSplit.split(separator); 

    console.log("A string original é" + stringToSplit); 
    console.log("O separador é"+ separator)
    console.log("O array tem " + arrayOfStrings.length + arrayOfStrings.join('/'))

}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez';

var space = ' ';
var comma = ',';

splitString(tempestString,space)
splitString(tempestString)
splitString(monthString, comma)

/* Ultilizando o metodo substring()*/ 

var str = "hello"

var result2 = str.substring(2,5)

console.log(result2)