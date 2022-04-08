//Quero lucrar	Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

let sessentaPorCento = 300
let cemPorCento = (300*100)/60

console.log(cemPorCento)

let vinteECincoPorCento = cemPorCento * (25/100)
console.log(vinteECincoPorCento)

let vendaComLucro = cemPorCento + vinteECincoPorCento
console.log('Para ter 25% de lucro você deve vender por R$' + vendaComLucro)