function verificarMaiorIdade(idade){
    if (idade <= 21){
        return 'jovem';
    } else if (idade < 66){
        return 'adulto(a)';
    } else {
        return 'idoso(a)';
    }
}
const valorRetornadoPelaFuncao = verificarMaiorIdade(35);

console.log(valorRetornadoPelaFuncao);

//ou da na mesma.

console.log(verificarMaiorIdade(35));