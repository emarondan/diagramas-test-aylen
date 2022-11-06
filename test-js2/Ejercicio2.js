const prompt = require("prompt-sync")({ sigint: true });
const Forma = prompt("Elija la forma geometrica");


switch(Forma) {
    case 'Cuadrado': {
        console.log('Elegiste Cuadrado')
        const Ladoa = prompt("Ingrese a (altura)");
        var a = Number(Ladoa);

        Perim = (4 * a) ;
        Area = Math.pow(a , 2) ;
        break;
    }
    case 'Rectangulo': {
        console.log('Elegiste Rectangulo')
        const Ladoa = prompt("Ingrese a (altura): ");
        const Ladob = prompt("Ingrese b (base): "); 
        var a = Number(Ladoa);
        var b = Number(Ladob);
        
        Perim = ((2 * a) + (2 * b)) ;
        Area = (b * a);
        break;
    }
    case 'Circulo': {
        console.log('Elegiste Circulo')
        const radio = prompt("Ingrese r (radio)");
        const pi = 3.1416 ;
        var r = Number(radio);
        
        Perim = 2 * r * pi ;
        Area = (pi * (Math.pow(r , 2)));
        break;
    }
    case 'Triangulo': {
        console.log('Elegiste Triangulo')
        const altura = prompt("Ingrese altura");
        const Ladob = prompt("Ingrese b");
        const Ladoc = prompt("Ingrese c");
        var a = Number(altura);
        var b = Number(Ladob);
        var c = Number(Ladoc);

        Perim = (a + b + c);
        Area = (((b * a) / 2));
        break;
    }
       
}
console.log(`El perimetro es ${Perim}`);
console.log(`El area es ${Area}`);

