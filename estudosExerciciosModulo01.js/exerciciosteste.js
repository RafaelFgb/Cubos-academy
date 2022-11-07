let texto = 'Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ';


  let palavra = 1;

  for (const item of texto) {
      if (item === ' ') {
      palavra++;
      }
      if (texto.lastIndexOf(texto) === ' '){
        palavra -= 1
    }
  }
  console.log(palavra);
  console.log(texto.lastIndexOf(' ');
  console.log(str.length - 1