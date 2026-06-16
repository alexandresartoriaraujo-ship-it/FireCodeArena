let n = [10, 25, 68, 42, 22, 30, 12, 11, 29, 15]
let p = 0

for(let i = 0; i < n.length; i++){
    if(n[i] % 2 == 0){
        p++
}
}
(console.log(`Números para identificarmos ${p} / ${n.length}`) )