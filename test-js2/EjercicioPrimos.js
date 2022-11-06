const prompt = require("prompt-sync")({ sigint: true }); 
const Nro = prompt("Ingrese numero");
var num = Number(Nro);

if(num === 0) {
    console.log('El numero es 0')
}
else if(num === 1) {
    console.log('El numero es primo');
    
}else {
div = 2
    while(num % div !== 0) {
        if(num !== div) {
        div = div + 1 ;
        }
    }
if (div < num) {
        console.log('Es no Primo');
    }
    if(num === div) {
        console.log('Es Primo');
    }
}

