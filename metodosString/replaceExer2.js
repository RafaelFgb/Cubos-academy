let numero = '111,111,350,000';

for (const item of numero) {
    if (item === ','){
        numero = numero.replace(',','.');
    }
}

console.log(numero);