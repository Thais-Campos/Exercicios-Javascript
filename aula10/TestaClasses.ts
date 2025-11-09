import { Terrestre } from "./Terrestre"

export function main(){
//Instanciou o objeto da Classe Terrestre
    const bike: Terrestre = new Terrestre(2, 2, 20)
    console.log(" A capacidade do meio de transporte é: " + bike.capacidade)

    bike.visualizar()
}

main()