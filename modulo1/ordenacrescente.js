const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Insira o primeiro: "));
let valor2 = parseInt(prompt("Insira o segundo: "));

if(valor1 > valor2)
{
    console.log(valor2, valor1)
}else{
    console.log(valor1, valor2)
}