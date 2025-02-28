let a = 1
let b = 2

//              type = array
let numbers = [a, b, 3, 4, 5]

const soma = numbers.reduce((acumulador, valorCorrente) => acumulador + valorCorrente, 0)

console.log(soma)