//eu dou os números

let peso = 70
let altura = 1.75
let valorIMC =(peso / (altura * altura)).toFixed(2)
let valorIMCredondo = Math.round(valorIMC)
console.log('o IMC será de ' + valorIMCredondo)

// usando Math.pow
const pesoKg = 70
const alturaM = 1.75
const IMC2 = peso / Math.pow(altura, 2)
const IMCredondo = Math.round(IMC2)

console.log('o IMC será de ' + IMCredondo)

//Usando PROMPT

let peso2 = prompt("Qual seu peso? (em kg)")
let altura2 = prompt ("Qual sua altura? (em metros)")
let valorIMC2 = (peso2 / Math.pow(altura2,2)).toFixed(2)
let valorIMC2conv = parseInt(valorIMC2)

console.log(`o IMC será de ${valorIMC2conv}`)
