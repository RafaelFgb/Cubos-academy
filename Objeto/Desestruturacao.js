
const pessoa = {
    nome: "jose",
    idade: 20,
    cidade: "salvador",
    profissao: "Dev"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, ... outros} = pessoa;

console.log(nome, idade);
// para guardar o resto da variavel ...

console.log(outros);