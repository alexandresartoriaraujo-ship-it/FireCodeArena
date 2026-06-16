let n = [8, 4, 5, 10, 7]
let t = 0
for( let i = 0; i < n.lenght; i++){
    t = t + n[i]

}
let m = t / n.length
let a = []

for ( let i = 0; i < n.length; i++){
    if(n[i] > m){
        a.push(n[i])
    }
}
console.log(`Media dos numeros: ${m}`)
console.log("")
console.log(`Numeros acima da media: ${a}`)