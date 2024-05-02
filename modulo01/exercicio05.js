/*
5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Insira a primeira nota: "));
let nota2 = parseFloat(prompt("Insira a segunda nota: "));

let media = (nota1 + nota2)/2;

if (media >= 6.0)
    console.log("Média final:",parseFloat(media.toFixed(2)), "PARABÉNS! Você foi aprovado");
else {
    console.log("Média final:",parseFloat(media.toFixed(2)), "Você foi REPROVADO! Estude mais");
}
