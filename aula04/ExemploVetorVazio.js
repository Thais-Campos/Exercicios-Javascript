const leia = require("readline-sync");

let vetorInteiros = new Array(5); // tamanho maximo do vetor 

//Entrada de info
for(let indice = 0; indice < 5; indice++){
    vetorInteiros[indice] = leia.questionInt(`Digite o numero ${indice + 1}: `);
}

//Saida
console.log("\n Os números digitados foram: \n");

for (let indice = 0; indice < 5; indice++){
    console.log(`${indice +1}° número: ${vetorInteiros[indice]}`);
}