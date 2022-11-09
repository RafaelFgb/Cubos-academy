const nomes = ["rafael", "pedro", "maria","brenda"];

const resultado = nomes.some((item) => {
    return item === "maria";
}) 

console.log(resultado);