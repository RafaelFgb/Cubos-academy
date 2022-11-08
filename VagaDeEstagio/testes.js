function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    
    const variavelTeste = {};
    for (let letraTexto of texto) {
        
        for (let query of queries) {
          if(query === letraTexto){
            variavelTeste[query] += 1;
          }
      }
    }
    console.log(variavelTeste);
  }

calculaTopOcorrenciasDeQueries(
    "Lorem ipsum dolor sit am",
    ["a", "em", "i", "el"],
    2
    )