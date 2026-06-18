
// Peça ao usuário quantas notas deseja cadastrar.
// Armazene todas em um vetor.
// Ao final, mostre:
// Maior nota
// Menor nota
// Média da turma
// Quantidade de aprovados (nota ≥ 7)
// Quantidade de reprovados (nota < 7)

const r = require("readline-sync")

let qtq = r.questionInt("Quantas notas deseja cadastrar: ")

let notas = []
let soma = 0
let Aprovado = 0
let Reprovado = 0

for(let i = 0; i < qtq; i++){
    let nota = r.questionInt(`Digite a ${i+1}° nota: `)
    notas.push(nota);
    soma = soma + nota;

    if(nota >= 7){
        Aprovado++
    
    }else{
        Reprovado++
    }
}

let maior = notas [0]
let menor = notas [0]

for(let i = 1; i < notas.length; i++){
    if(notas[i] < menor)
        menor = notas[i]
}

let media = soma/qtq

console.log(`Maior nota: ${maior}`);
console.log(`Menor nota: ${menor}`);
console.log(`Media da turma: ${media}`);
console.log(`Quantidade de aprovados: ${Aprovado}`);
console.log(`Quantidade de reprovados: ${Reprovado}`)

