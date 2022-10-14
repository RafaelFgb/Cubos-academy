function verificarMaiorIdade(idade){
    if (idade <= 21){
        return 'jovem';
    } else if (idade < 66){
        return 'adulto(a)';
    } else {
        return 'idoso(a)';
    }
}

function apresentar (pessoa) {

   const faixaEtaria = verificarMaiorIdade(pessoa.idade);
   console.log(faixaEtaria);
}

const  pessoa = {
    nome: 'Rafael',
    idade: 26,
    altura: 1.71
}
apresentar(pessoa);