//Importando biblioteca
const leia = require('readline-sync')

//declarando variaveis 
let nome, distancia 

//Entrada de dados
console.log("Digite seu nome: ")
nome = leia.question()

console.log("\nDigite a distancia percorrida em sua corrida: ")
distancia = leia.questionFloat()

//Saida de dados 
console.log("\nBom dia, " + nome)
console.log("\nA distancia percorrida foi de: " + distancia)