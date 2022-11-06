const prompt = require("prompt-sync")({ sigint: true }); 
const Nros = prompt("Ingrese cantidad de numeros: ");
var N = Number(Nros);
c = 0
Tpares = 0
Timp = 0

while (c < N) {
    if(c % 2 === 0) {
        Tpares = Tpares + c
        c = c + 1 
    }
    else {
        Timp = Timp + c
        c = c + 1 
    }
    
    
}
console.log(`El total de pares es ${Tpares} y de impares es ${Timp}`)