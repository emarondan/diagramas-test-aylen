const prompt = require("prompt-sync")({ sigint: true }); 
const Nro = prompt("Ingrese numero");
var num = Number(Nro);
cant = 0 ;

while (num !== 0) {
    const Nro2 = prompt("Ingrese numero");
    var num = Number(Nro2);
    cant = cant + 1 ;
}
    console.log(`La cantidad es ${cant}`)
