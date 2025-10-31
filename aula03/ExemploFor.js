const leia = require("readline-sync");

let nome1, contador

for (contador = 1; contador < 4; contador++) { // operador incremento | contador = contador + 1
  nome1 = leia.question("Digite um nome: ");
  console.log("O " + contador + "º nome digitado foi: " + nome1);
}
