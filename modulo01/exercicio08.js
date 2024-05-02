/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Insira o primeiro: "));
let valor2 = parseInt(prompt("Insira o segundo: "));

if(valor1 > valor2)
{
    console.log(valor2, valor1)
}else{
    console.log(valor1, valor2)
}