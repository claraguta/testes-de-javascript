//Eu dando o valor
let quilometros = 30
let dias = 5
let valordia = 60
let valorkm = 0.15

let precofinal = (dias*valordia + quilometros*valorkm).toFixed(2)

console.log('O preço final de aluguel será de R$' + precofinal)

//Usando PROMPT
let quilometros2 = prompt("Quantos quilômetros foram percorridos?")
let dias2 = prompt("Quantos dias o carro ficou alugado?")

const valordia2 = 60
const valorkm2 = 0.15

const precofinal2 = (dias2*valordia2 + quilometros2*valorkm2).toFixed(2)

console.log(`O preço final de aluguel será de R$ ${precofinal2}`)
