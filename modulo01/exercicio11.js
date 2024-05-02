/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

const prompt = require('prompt-sync')();

let num;

do {

    num = parseInt(prompt("Insira um número inteiro: "));
    if ((isNaN(num)) || (num === null) || (num < 0)) {
        break;
    }
    else {
        const parImpar = num % 2 === 0 ? "O número é par" : "O número é impar";
        console.log(parImpar);

    }
} while (num > -1)
