import { Atleta } from "./Atleta"
import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main() {

 
    const nadador: Nadador = new Nadador('Thompson')
    const ciclista: Ciclista = new Ciclista('Israel')


    nadador.visualizar()
    nadador.aquecer()
    nadador.nadar()
    console.log(" ")

    console.log(" ")
    ciclista.pedalar()
    ciclista.visualizar()
    ciclista.aquecer()

}

main()