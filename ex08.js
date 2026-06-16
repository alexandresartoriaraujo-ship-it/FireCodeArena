let n = [10, -19, 20, -30, 70, -28, 11, -34, 22, -13]
let np = 0
for(let i = 0; i < n.length; i++){
    if(n[i] > 0){
        np++
    }
}
console.log(n)
console.log(`Números para identificarmos: ${np} / ${n.length}`) 