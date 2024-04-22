const prompt = require('prompt-sync')();

let contador = 0;

while(contador < 5){
let num = parseInt(prompt("Informe o número: "));
    for (i = 1; i <= num; i++) {
        console.log(`${i} * ${num} = ${i * num}`)
    }
    contador ++;
}