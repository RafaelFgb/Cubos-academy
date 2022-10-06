function apresentandoPessoas (nome, idade, profissao) {
    if(idade < 25){
        let definicao = 'jovem';
    } else if (idade < 66){
        definicao = 'adulto(a)';
    } else {definicao = 'idoso(a)';}

    console.log(`Sou ${nome}, sou um(a) ${definicao} de ${idade} anos e sou ${profissao}.`)
};

apresentandoPessoas('rafael', 26, 'Desenvolvedor');