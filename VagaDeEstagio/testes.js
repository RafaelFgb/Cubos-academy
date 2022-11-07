function ultimaParada(combustivel,consumo,postosDeGasolina) {

    let maiorDistancia = 0;
    let autonomiaCarro = consumo * combustivel; //16km
    let naoExistePostos = -1;
    
    if (postosDeGasolina.length === 0){
        console.log(naoExistePostos);
    }
    for(let item of postosDeGasolina){
         if(item > maiorDistancia && item < autonomiaCarro){
         maiorDistancia = item;
       }
     }
    if (postosDeGasolina.length !== 0) {
        console.log(maiorDistancia);
    }
   }

postosDeGasolina = [2,10,15,50];
ultimaParada(2,8,postosDeGasolina);