/* 
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')();

let numero;
let total = 0;
let i = 0;

while (numero !== 0) {
  numero = parseFloat(prompt("Insira um número decimal ou 0 para finalizar e calcular a média: "));

  if (numero !== 0) {
    total += numero;
    i++;
  }
}

let media = total / i;
console.log("A média dos números inseridos é:",media.toFixed(2));

