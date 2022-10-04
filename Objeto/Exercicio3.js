const cartao = {
    nome: "Rafael",
    idade: 26,
    produtos: [
        {
            nome: "pao de alho",
            precoUnit: 1500,
            quantidade: 5
        },
        {
            nome: "cerveja",
            precoUnit: 1000,
            quantidade: 2
        },
        {
            nome: "agua",
            precoUnit: 500,
            quantidade: 1
        }
    ]
};

console.log(cartao.nome);
console.log(cartao.idade);

cartao.idade = 19;

console.log(cartao.idade);
console.log(cartao.produtos[0].nome);
console.log(cartao.produtos[cartao.produtos.length - 1].precoUnit);