let numeros = [6, 7, 8, 10, 4, 6, 3, 4]
let aprovado= 0
let reprocado= 0

for (let i = 0; i < numeros.lenght; i++){
    if (numeros[i] >= 7) {
        aprovado++
    } else {
        reprocado++
    }
}
console.log('Quantidade d alunos aprovados:' + aprovado);
console.log('Quantidade de alunos reprovados: ' + reprocado)