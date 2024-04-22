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
