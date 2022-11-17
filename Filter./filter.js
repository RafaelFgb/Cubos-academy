const professores = [
    {nome: 'Guido', stack: 'backend'},
    {nome: 'Rafa', stack: 'frontend'},
];

const professoresBack  = professores.filter((professor) => {
    return professor.stack === 'backend'
});

console.log(professoresBack);

const professoresFront = professores.filter((professor) => {
    return professor.stack === 'frontend'
});

console.log(professoresFront);
