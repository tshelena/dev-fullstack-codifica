/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, 
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

const prompt = require('prompt-sync')();

let temperaturaCelsius = parseFloat(prompt("Insira a temperatura em graus Celsius: "));

let temperaturaConvertida = (temperaturaCelsius * 1.8) + 32;

console.log(temperaturaConvertida)