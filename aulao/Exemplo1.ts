import { converte } from "./Funcoes"

export function main() {

    try {

        const resultado = converte('123')
        console.log(resultado)

    } catch (error) {

        if (error instanceof TypeError) { // verifica o tipo de erro
console.error("TypeError: " + error.message)
        }

    } finally {
        console.log("Sempre irei executar")
    }

}

main()