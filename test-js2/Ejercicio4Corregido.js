const prompt = require("prompt-sync")({ sigint: true }); 
const Nro = prompt("Ingrese el numero");
var num1 = Number(Nro);

if(num1 === 0) {
    console.log('El numero es 0');
} 
else 
    if(num1 % 2 === 0) {
        console.log('El numero es par');
    }else {
    console.log('El numero es impar');
}
