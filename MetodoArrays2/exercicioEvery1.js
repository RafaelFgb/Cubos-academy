const lista = [
    {nome: 'rafael',idade: 26},
    {nome: 'pedro',idade: 18},
    {nome: 'izabela',idade: 35},
    {nome: 'marina',idade: 16},
];

const verificacaoIdade = (arrayObjetos) => {
    const resultado = arrayObjetos.every((lista) => {
        return lista.idade > 17;
    })

    if (resultado) {
        console.log("Festa liberada");
    } else {
        console.log("Menores de idade na festa");
    }
}

verificacaoIdade(lista);