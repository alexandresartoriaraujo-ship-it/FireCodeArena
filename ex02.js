const r = require("readline-sync")
let n = r.questionInt("Números cadastrados: ")
let positivos = []
let negativos = []

for(let i = 1; i <= n; i++){
    let pn = r.questionInt(`${i} Números positivos ou negativos: `)

    if(pn > 0){
        positivos.push(pn)
    }else if(pn < 0){
        negativos.push(pn)
    }else{
        console.log("Erro")
    }
}
console.log("Positivos")
console.log("")
console.log(positivos)
console.log("Negativos")
console.log("")
console.log(negativos)