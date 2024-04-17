const prompt = require('prompt-sync')();

let total = parseInt(prompt("Insira a quantidade total de eleitores: "));
let votosBrancos = parseInt(prompt("Insira a quantidade de votos brancos: "));
let votosNulos = parseInt(prompt("Insira a quantidade de votos nulos: "));
let votosValidos = parseInt(prompt("Insira a quantidade de votos válidos: "));

let percentBrancos = ((votosBrancos*100)/total);
let percentNulos = ((votosNulos*100)/total);
let percentValidos = ((votosValidos*100)/total);

console.log("Percentual Brancos:",percentBrancos,"%\n","Percentual Nulos:",percentNulos,"%\n","Percentual Válidos:",percentValidos,"%\n",)