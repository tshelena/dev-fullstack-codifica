/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const prompt = require('prompt-sync')();

let numero;
let peso;
let somaPesos = 0;
let somaPonderada = 0;

while (numero !== 0) {
    numero = parseFloat(prompt("Insira um número decimal ou 0 para finalizar e calcular a média: "));

    if (numero !== 0) {
        peso = parseFloat(prompt("Digite o peso do número: "));
        somaPonderada += (numero * peso);
        somaPesos += peso;
    }
}

let mediaPonderada = somaPonderada / somaPesos;

console.log("A média ponderada dos números inseridos é:", mediaPonderada.toFixed(2));