const frutas = ["abacaxi","manga","melancia"];

const resultado = frutas.every((item) => {
    return item !== "banana";
});

console.log(resultado);