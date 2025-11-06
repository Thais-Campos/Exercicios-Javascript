import { Conta } from "./Conta"

export function main(){

// INSTACIA DA CLASSE CONTA
// INSTACIAMENTO DE UM OBJETO
const conta1: Conta = new Conta(12156, 108, 1, "Michele", 10000000)

console.log("Titular da Conta: " + conta1.titular)

conta1.saldo = 150
console.log("Saldo da Conta: " + conta1.saldo)


}

main()