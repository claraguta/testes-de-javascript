//Eu dando o valor
let preco = 500
let desconto = 0.2*500

let valorfinal = preco - desconto

console.log("O valor do desconto será de R$" + desconto)
console.log("O valor final a pagar será de R$" + valorfinal)

//Usando PROMPT
let preco2 = prompt("Qual preço da mercadoria?")
let precoconvertido = parseInt(preco2)

let desconto2 = 0.2*precoconvertido

let valorfinal2 = precoconvertido - desconto2


console.log(`O valor do desconto será de R$${desconto2}`)

console.log(`O valor final a pagar será de R$${valorfinal2}`)

