//Eu dando o valor
let jantar = 200
let gorjeta = 0.1*200

let valorfinal = jantar + gorjeta

console.log('O valor da gorjeta será de R$' + gorjeta)
console.log('O valor final da conta será de R$' + valorfinal)

//Usando PROMPT
let jantar2 = prompt("Qual valor do jantar?")
let jantarconvertido = parseInt(jantar2)

let percentualgorjeta = prompt ("Qual percentual da gorjeta (apenas números)?")

let gorjeta2 = ((jantar2 * percentualgorjeta)/100)

let valorfinal2 = (jantarconvertido + gorjeta2)

console.log('O valor da gorjeta será de R$' + gorjeta2)
console.log('O valor final da conta será de R$' + valorfinal2)