const prompt = require('prompt-sync')();

let temperaturaCelsius = parseFloat(prompt("Insira a temperatura em graus Celsius: "));

let escala = parseInt(prompt("Insira a escala que deseja converter a temperatura inserida: 1 - Fahrenheit ou 2 - Kelvin  "));

let temperaturaConvertida = 0;

switch (escala) {
    case 1:
        temperaturaConvertida = (temperaturaCelsius * 1.8) + 32;
        break;
    case 2:
        temperaturaConvertida = temperaturaCelsius + 237;
        break;
}

console.log(temperaturaConvertida)