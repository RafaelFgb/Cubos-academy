function verificacao (idadeDaPessoa){

    let { nome, idade, peso, profissao } = idadeDaPessoa

    console.log(`meu nome é ${nome}, peso ${peso}, idade ${idade} e sou ${profissao}.`)
}

let pessoa = {
    nome: "rafael",
    idade: 26,
    altura: 1.71,
    peso: 68,
    profissao: "DEv"
}

verificacao(pessoa);