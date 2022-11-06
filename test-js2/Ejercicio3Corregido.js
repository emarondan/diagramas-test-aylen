const prompt = require("prompt-sync")({ sigint: true }); 
const Nro = prompt("Ingrese el numero");
var num1 = Number(Nro)

if (num1 >= 1) {
    console.log('El numero es positivo');
}
if (num1 <= -1) {
    console.log('El numero es negativo');
}
if (num1 === 0) {
        console.log('El numero es 0');
}