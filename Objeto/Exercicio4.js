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

let valorTotalAPagar = 0;

for (let produto of cartao.produtos) {
    valorTotalAPagar += produto.precoUnit * produto.quantidade;
}

console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$${(valorTotalAPagar/100).toFixed(2)}`);