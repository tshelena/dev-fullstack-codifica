/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let countPrimos = 0;
let numero = 101;


while (countPrimos < 10) {
    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }
    if (isPrimo) {
        console.log(numero);
        countPrimos++;
    }
    numero++;
}