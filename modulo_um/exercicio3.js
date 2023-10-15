/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

//Seção para declarar a lista que receberá os números sorteados
let listaNumerosSorteados = [];

//Estrutura for que sorteia 6 números inteiros entre 1 e 60 e armazena em uma lista
for (i = 0; i < 6; i++){
    listaNumerosSorteados.push(Math.round(Math.random() * 59) + 1);
}

//Seção para printar a lista de números sorteados
console.log("Números sorteados: ");
console.log(listaNumerosSorteados);
