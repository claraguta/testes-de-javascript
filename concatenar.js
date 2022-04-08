//Concatenar x interpolar	Vamos criar variaveis usando let, const, atribuir strings e vamos concatenar e interpolar.

myName = "Clara";
console.log('Hello' + " " + myName)
//Vai imprimir Hello Simara

//interpolando
myName = "Simara";
console.log(`Hello ${myName}`)
//Vai imprimir Hello Simara

const saudacao = 'oii '
const aluna = 'Clara'
console.log(saudacao + aluna)

const nome = 'Clara'
const idade = '30 anos'

//concatenando
console.log('olá ' + nome + ', de ' + idade)

//interpolar
console.log(`Hello ${nome}, legal que você tem ${idade}`)

//testes
var pessoa = {
    name: "Clara",
    age: "30 anos",
    role: "writer",
    isTeacher: "not yet"
}

console.log(pessoa.name)
console.log(pessoa.age)
console.log(pessoa.role)
console.log(pessoa.isTeacher)