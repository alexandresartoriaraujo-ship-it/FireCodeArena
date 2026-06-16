const r = require ("readline-sync")

let n = [3, 4, 5, 65, 53]
let m = n[0]

for (let i = 0; i < n.length; i++){
   if(n [i] > m){
      m = n[i]
   }
}
console.log('')
console.log(n)
console.log(`o maior numero entre eles é ${m}`)