const r = require("readline-sync")

let qtq = r.questionInt("Quantas notas deseja cadastras: ")

let notas  = []
let soma = 0
let Aprovado = 0 
let Reprovado = 0

for (let i = 0; i < qtq; i++){
    console.log("")
    let nota = r.questionInt(`Digite a ${i+1}° notas: `)
    console.log("")
    notas.push(nota);
    soma = soma + nota;

if(nota >= 7 ){
    Aprovado++
}else {
    Reprovado++
}
}

let maior = notas [0]
let menor = notas [0]

for(let i = 1; i = notas.length; i++){
    if(notas[i] < menor)
        menor = notas[i]
}

let media = soma/qtq

console.log("==== Resultado final ====")
console.log("")
console.log(`Maior nota: ${maior}`)
console.log("")
console.log(`Maior nota: ${menor}`)
console.log("")
console.log(`Media da turma: ${media}`)
console.log("")
console.log(`Quantidade de aprovados: ${Aprovado}`)
console.log("")
console.log(`Quantidade de Reprovados: ${Reprovado}`)