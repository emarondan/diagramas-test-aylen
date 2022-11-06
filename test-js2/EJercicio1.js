const prompt = require("prompt-sync")({ sigint: true });
const Num1 = prompt("Ingrese a");
const Num2 = prompt("Ingrese b");

var Num1_Numero = Number(Num1)
var Num2_Numero = Number(Num2)

var suma = Num1_Numero + Num2_Numero;
var resta = Num1_Numero - Num2_Numero;
var mult = Num1_Numero * Num2_Numero;

if(Num2_Numero != 0) {
    div = Num1_Numero / Num2_Numero;
}
else {
    console.log('Error');
}
console.log(`El resultado de la suma es ${suma}`)
console.log(`El resultado de la resta es ${resta}`)
console.log(`El resultado de la multiplicacion es ${mult}`)
console.log(`El resultado de la division es ${div}`)
