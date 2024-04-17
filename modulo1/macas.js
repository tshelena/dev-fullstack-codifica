const prompt = require('prompt-sync')();

let macas = parseInt(prompt("Insira a quatidade de maçãs: "));

if (macas >= 12) { 
    total = macas * 0.25 }
    else{
        total = macas * 0.30
    }
    console.log(total)