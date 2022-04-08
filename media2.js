//Dando os números
let num1 = 695
let num2 = 852
let num3 = 1475

let media = ((num1+num2+num3)/3).toFixed(2)

console.log('A média dos números será de ' + media)

//Usando PROMPT
const input1 = prompt("Escolha um número")
const input2 = prompt("Agora mais um!")
const input3 = prompt("Só mais um para fechar")

const input1conv = parseInt (input1)
const input2conv = parseInt (input2)
const input3conv = parseInt (input3)

const mediaprompt = ((input1conv+input2conv+input3conv)/3).toFixed(2)

console.log(`A média dos números será de ${mediaprompt}`)

