//eu dando os números
const nota1 = 100
const nota2 = 95
const nota3 = 85
const nota4 = 65

let media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(2)
console.log('A média de notas será ' + media)

//usando prompt

const nota5 = prompt("qual sua primeira nota?")
const nota5conv = parseInt(nota5)

const nota6 = prompt("qual sua segunda nota?")
const nota6conv = parseInt(nota6)

const nota7 = prompt("qual sua terceira nota?")
const nota7conv = parseInt(nota7)

const nota8 = prompt("qual sua última nota?")
const nota8conv = parseInt(nota8)

let mediaPrompt = ((nota5conv + nota6conv + nota7conv + nota8conv)/4).toFixed(2)
let mediaPromptconv = parseInt (mediaPrompt)

console.log(`A média de notas foi de ${mediaPrompt}`)