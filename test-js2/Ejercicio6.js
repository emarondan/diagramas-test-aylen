const prompt = require("prompt-sync")({ sigint: true }); 
const Nros = prompt("Ingrese cantidad de numeros");
var N = Number(Nros)
i = 1
const PrimNum = prompt("Ingrese numero")
var Nro1 = Number(PrimNum)
may = Nro1
men = Nro1

while(i !== N) {
    const SegNum = prompt("Ingrese otro numero")
    var Nro2 = Number(SegNum)

    if(Nro2 >= may) {
        may = Nro2
        i = i + 1
    } 
    else 
        if(Nro1 <= men) {
            men = Nro2
            i = i + 1
        }
}
console.log(`El numero mayor es ${may} y el menor ${men} `)