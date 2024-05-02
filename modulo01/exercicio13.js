/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

const prompt = require('prompt-sync')();

let contador = 0;

while(contador < 5){
let num = parseInt(prompt("Informe o número: "));
    for (i = 1; i <= num; i++) {
        console.log(`${i} * ${num} = ${i * num}`)
    }
    contador ++;
}