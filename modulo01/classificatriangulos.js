const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Insira o primeiro lado: "));
let lado2 = parseInt(prompt("Insira o segundo lado: "));
let lado3 = parseInt(prompt("Insira o terceiro lado: "));

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    console.log("É possível formar um triângulo com essas medidas")
    if (lado1 == lado2 && lado2 == lado3){ 
        console.log("Triângulo Equilátero");
    }
    else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        console.log("Triângulo Escaleno");
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Triângulo Isósceles");
}
} 
else {
    console.log("Não é possível formar um triângulo com essas medidas")
}
