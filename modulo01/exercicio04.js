/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Insira a primeira nota: "));
let nota2 = parseFloat(prompt("Insira a segunda nota: "));

let media = (nota1 + nota2)/2;

if (media >= 6.0){
    console.log("Média final:",parseFloat(media.toFixed(2)), "PARABÉNS! Você foi aprovado");
}

