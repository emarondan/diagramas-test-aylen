const prompt = require("prompt-sync")({ sigint: true }); 
const Nros = prompt("Ingrese cantidad de numeros");
var N = Number(Nros)
i = 0
total = 0
Prom = 0

while(i !== N) {
    const Numero = prompt("Ingrese numero"); 
    var nro = Number(Numero);
    var total = total + nro
    i = i + 1
}
var Prom = (total / N);
console.log(`El Promedio es ${Prom}`);