const pessoa = {
    nome: "jose",
    idade: 20,
    cidade: "salvador",
    profissao: "Dev"
};

const endereco = {
    rua: "aqui",
    numero: "32",
    bairro: "São Bernardo"
}

// para juntar as informações de pessoa e endereco em um objeto só.

const objetoFundido = {
    ...pessoa,
    ...endereco
};

console.log(objetoFundido);