const prompt = require('prompt-sync')();

let codOrigem = Number(prompt("Digite qual a origem do produto: "));
let origem;

if (codOrigem === 1) {
    origem = "Sul"
} else if (codOrigem === 2) {
    origem = "Norte"
} else if (codOrigem === 3) {
    origem = "Leste"
} else if (codOrigem === 4) {
    origem = "Oeste"
} else if (codOrigem === 5 || codOrigem === 6) {
    origem = "Nordeste"
} else if (codOrigem >= 7 && codOrigem <= 9) {
    origem = "Sudeste";
} else if (codOrigem >= 10 && codOrigem <= 20) {
    origem = "Centro-Oeste";
} else if (codOrigem >= 25 && codOrigem <= 50) {
    origem = "Nordeste";
} else if (codOrigem > 20 && codOrigem < 25 || codOrigem > 50) {
    origem = "Produto Importado";
}

console.log(origem);