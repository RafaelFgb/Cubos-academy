const nomeArquivos = ["texto.tx", "foto.jpg","PS.ps","arquivo.jps"];

const verificacaoVirus = (arrayNomes) => {
    const resultado = arrayNomes.some((arquivos) => {
        const achouVirus = arquivos.indexOf('.bat')
        return achouVirus !== -1;
    });

    if (resultado) {
        console.log(`virus detectado`); 
     } else {
         console.log(`nenhum virus encontrado`);
     }
}

verificacaoVirus(nomeArquivos);