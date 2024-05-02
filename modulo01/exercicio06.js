/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
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
