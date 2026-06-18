const readline = require('readline-sync')

let cadastroDeNumeros = readline.questionInt('Quantos numeros deseja cadastras? ');

let multiplosDe3 = [];
let outrosNumeros = [];

for (let i = 0; i < cadastroDeNumeros; i++){
    let numeros = readline.questionInt('Digite um numero: ');

    if (numeros % 3 === 0) {
    multiplosDe3.push(numeros);
    } else {
        outrosNumeros.push(numeros)
    }
}

console.log(`Multiplos de 3: ${multiplosDe3}`)
console.log(`Outros numeros: ${outrosNumeros}`)