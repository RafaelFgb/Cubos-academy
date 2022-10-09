
const  pessoa = {
    nome: 'Rafael',
    idade: 26,
    altura: 1.71,
    profissao: 'Desenvolvedor',
    apresentar: function (){

        const faixaEtaria = this.DeterminarfaixaEtaria(this.pessoa)

        console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos,
        ${this.altura}m de altura e sou ${this.profissao}`);
    },
    DeterminarfaixaEtaria: function () {
        if (this.idade < 21) {
        return'jovem'
        } else if (this.idade < 65){
        return 'adulto(a)'
        } else {
            return'idoso(a)'
        }
    }
}
pessoa.apresentar();