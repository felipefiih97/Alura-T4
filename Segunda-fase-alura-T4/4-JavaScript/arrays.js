var list = new Array('Salvador', 'fortaleza','São Luis');
let idadeComprador = 18;
let estaAcompanhado = true;
const destino = 'fortaleza';
const podeComprar = idadeComprador > 18 || estaAcompanhado == true;
let destinoExiste = false; 


for (var i = 0; i < list.length; i++) {
    
    if (list[i] == destino) {
        destinoExiste = true;
        break; 
    }
}

console.log("Destino existe:" , destinoExiste);
