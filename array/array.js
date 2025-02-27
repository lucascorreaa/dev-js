// array nativamente o index inicia com o '0', basicamente o primeiro item
const fruits = ['maçã', 'banana', 'laranja']
console.log(fruits)
console.table(fruits)

//método lenght conta a quantidade de itens nesse cenário, porém inicia com '1'
console.log(fruits.length)

//método lenght conta a quantidade de caract. nesse cenário, porém inicia com '1'
const fullName = 'JOSE MARIA AUGUSTO'
console.log(fullName.length)

function CapitalizeWord(word) {
    let lower = word.toLowerCase()
    let capitalize = lower.charAt(0).toUpperCase() + lower.slice(1)
    return capitalize
}

console.log(CapitalizeWord('LUCAS'))

function ClienteSaudacao(fullname) {
    // string => converti para array de string
    let splitName = fullname.split(' ')
    // peguei primeiro indice
    let fisrtName = splitName[0]
    // paguei o ultimo nome
    let lastName = splitName[splitName.length - 1]
    
    console.log(`Olá, ${CapitalizeWord(fisrtName)} ${CapitalizeWord(lastName)}`)
}

ClienteSaudacao(fullName)

let word = 'Palavra'
console.log(word)
console.log(word.toUpperCase())
console.log(word.toLowerCase())
