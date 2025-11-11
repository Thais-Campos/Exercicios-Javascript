import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa implements IEscritor, IPintor {

    
    constructor(nome: string) {
        super(nome)
    }

    public saudacao(): void {
        console.log("Olá, meu nome é " + this.nome)
    }

    public escrever(): void {
        console.log("Escrevendo com o computador...")
    }

    public pintar(): void {
        console.log("Pintando com Giz de Cera...")
    }

}