//Dando os números
let veloMedia = 100
let kilometros = 500

let tempo = kilometros/veloMedia

console.log('Sua viagem durará ' + tempo + ' horas')


//Usando prompt
let veloMediaPrompt = prompt("Qual a velocidade média esperada para viagem? (Em km/h)")
let kilometrosPrompt = prompt("Qual a distância a percorrer? (Em km)")

let vmpConvertida = parseInt(veloMediaPrompt)
let kpConvertido = parseInt(kilometrosPrompt)

let tempoPrompt = kpConvertido / vmpConvertida

console.log(`Sua viagem durará ${tempoPrompt} horas`)