// transforme rafael felipe bezerra
// em Rafael Felipe Bezerra

let nomeMinusculo = "rafael felipe bezerra";

let arrayNome = nomeMinusculo.split(" ");
let nomeInteiro = "";

for (const item of arrayNome) {
    let primeiraLetra= item.slice(0,1)
    let restoDoNome = item.slice(1)

    nomeInteiro += primeiraLetra.toUpperCase() + restoDoNome + " ";
} 

console.log(nomeInteiro);