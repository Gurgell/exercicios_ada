/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

//Seção para declarar as três listas necessárias
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let listaPares = [];
let listaImpares = [];

//Estrutura de repetição forEach para percorrer cada elemento da lista de números e verificar se o número é par ou ímpar a partir do resto de sua divisão por 2
lista.forEach(number => {
    number % 2 == 0 ? listaPares.push(number) : listaImpares.push(number);
});

//Seção para printar os valores
console.log("Lista original: " + lista);
console.log("Lista de pares: " + listaPares);
console.log("Lista de ímpares: " + listaImpares);