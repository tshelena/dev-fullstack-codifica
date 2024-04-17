const prompt = require('prompt-sync')();

let temperaturaCelsius = parseInt(prompt("Insira a temperatura em graus Celsius: "));
let escala = prompt("Insira a temperatura em graus Celsius: ");

let temperaturaConvertida;

switch (escala) {
    case 'Fahrenheit':
        temperaturaConvertida = (temperaturaCelsius * 1,8)+32;
        break;
}

console.log(temperaturaConvertida)