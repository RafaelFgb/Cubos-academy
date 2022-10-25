const texto = "eu estudo na cubos academy"

console.log(texto);

// para achar um texto dentro de outro.
console.log(texto.includes("cubos")); 

// saber se um email é valido, verificar se tem um @ e se tem um . apos o @.

const email = "rafael.g@hotmail.com"

const indexArroba = email.indexOf("@"); // para saber com index esta o @

const indexPonto = email.indexOf(".",indexArroba); // para achar o ponto apos o @

if (indexPonto > indexArroba){
    console.log("Email valido"); // verificando se o . existe apos o @, se sim imprimir texto.
} else {
    console.log("Email invalido.");
}

