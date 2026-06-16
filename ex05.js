const r = require ("readline-sync")

let n = [5, 19, 20, 67, 21]

let m = n[0]

console.log(" ==== ")
console.log("Números que foram identificados")

for(let i = 0; i < n.length; i++){
    if(n [i] < m){
        m = n[i]
    }
}
console.log(" ==== ")
console.log(`o menor numero é ${m}`)
