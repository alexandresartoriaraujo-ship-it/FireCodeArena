let nt = [5, 10, 6, 1]

let soma = 0 

for(let i = 0; i < nt.length; i++){
    soma  = soma + nt[i]
}
let media = soma/nt.length

if (media >= 7){
    console.log( "Media" + media )
    console.log("")
    console.log(` Aṕrovado `)
}else{
    console.log("")
    console.log( "Media" + media )
    console.log("")
    console.log(`Reprovado`)
}