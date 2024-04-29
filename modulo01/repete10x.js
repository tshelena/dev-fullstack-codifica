const prompt = require('prompt-sync')();

let num = parseInt(prompt("Insira um número inteiro: "));

let i = 0;

while (i < 10)
{
    console.log(num)
    i++;
}