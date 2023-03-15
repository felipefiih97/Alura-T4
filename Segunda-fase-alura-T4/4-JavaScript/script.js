// Criando Listas

var list = new Array('Salvador', 'fortaleza');
let idadeComprador = 18;
let estaAcompanhado = true;
list.push("São Luis")
for (i = 0; i < list.length; i++) {
    console.log(list[i])
}

if (idadeComprador >= 18) {
    console.log('Você pode efetuar a compra !!')
} else if (estaAcompanhado == true) {
    console.log("O responsavel pode efetuar a compra !!")
} else {
    console.log("Não pode efetuar a compra !!");
}

list.splice(2, 1)
for (i = 0; i < list.length; i++) {
    console.log(list[i])
}