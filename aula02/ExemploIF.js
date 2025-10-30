const leia = require('readline-sync')

let idade 

// Entrada de dados
console.log("Digite sua idade: ")
idade = leia.questionInt()

// Processamento -IF
if(idade < 18){
    console.log("Você não pode dirigir!")
}

