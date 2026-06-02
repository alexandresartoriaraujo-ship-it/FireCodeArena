const r = require("readline-sync")
let n = r.questionFloat("Numeros cadastrados: ")
const pares = []
const impares = []

console.log("====")
for( let i = 1; i <= n; i++){
    let s = r.questionInt(`${i} digite um número: `)

    if( s % 2 === 0){
        pares.push(s)
    }else{
        impares.push(s)
    }
}

console.log(`Números pares: ${pares}`)
console.log(`Númers impares: ${impares}`)