const pessoa = {
    nome: 'Rafael',
    idade: 12,
    altura: 1.40,
    profissao: 'estudante'
}

function apresentacao(pessoasGeral) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos,
    ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}
 
 apresentacao(pessoa);