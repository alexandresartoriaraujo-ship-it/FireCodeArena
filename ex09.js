const r = require("readline-sync")
console.log("")
let nome = ["Maria", "Lucas", "Miguel", "Vitor", "João"]
console.log("")
let N = r.question("Digite um nome para verificar se ele esta na lista: ")
console.log("")
let encontrado = false

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
    if (N === nome[i]) {
        encontrado = true
        break
    } 
}




console.log("")
if (encontrado) {
    console.log(`O nome ${N} foi encontrado na lista `)
} else {
        console.log(`O nome ${N} não foi encontrado`)
}