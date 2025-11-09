// Declaração da função 
export function somar(a: number, b: number): number {
    //logica da função
    let resultado: number = a + b // 2+2 => resultado = 4
     
    return resultado
}

export function logar(usuario: number | string): void{ // | => Pipe (cano)
    if (typeof(usuario) === "number" )
        console.log("\nO Voce está acessando o Insta pelo seu celular");
    else
        console.log("\nVoce está acessando o Insta pelo seu email");
}

// Chamada das Funções 
let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

console.log("o resultado da sua adição é: " + valor)
console.log("o resultado da sua adição é: " + valor1)

logar("roberta@generation")