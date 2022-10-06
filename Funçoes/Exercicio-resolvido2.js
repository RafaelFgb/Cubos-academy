function determinandoFaixaEtaria (idade) {
    if(idade < 25){
        return 'jovem';
    } else if (idade < 66){
        return 'adulto(a)';
    } else {
        return 'idoso(a)'
    }
}

function apresentar(pessoa){
    const faixaEtaria = determinandoFaixaEtaria(pessoa.idade)

    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

const pessoa1 = {
    nome: 'Rafael',
    idade: 25,
    profissao: 'Mecanico'
}
apresentar(pessoa1);