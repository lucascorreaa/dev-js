// let i = 0

// laço sobre a condição
// while (i < 10) {
//     //bloco de código
//     console.log(i, 'while')
//     //atualiza a variável
//     i++
// }

// while (i % 2 == 0) {
//     console.log(`${i}: número par`)
//     i++
// }

// let count = 10

// while (count > 0) {
//     console.log('contagem regressiva:', count)
//     count--
// }

// console.log('Fim da contagem')

let num = 1
let soma = 0

while (num <= 10000) {
    // soma = soma + num
    console.log('to contando', num)
    soma += num
    num++
}

console.log(`A soma dos números de 0 a 10 é: ${soma}`)