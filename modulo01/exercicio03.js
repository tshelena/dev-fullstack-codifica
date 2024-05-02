/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));
let num3 = parseInt(prompt("Insira o terceiro número: "));
let num4 = parseInt(prompt("Insira o quarto número: "));

let soma = num1 + 25;
let triplica = num2 * 3;
let adiciona12 = num3 + (num3*0.12);
num4 = num1+num2+num3+num4;

console.log(soma, triplica, adiciona12, num4) 