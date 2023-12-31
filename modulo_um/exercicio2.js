/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/

//Declaração da lista de objetos contendo alunos
const listaDeAlunos = [
    { nome: "João", notas: [8, 7] },
    { nome: "Maria", notas: [9, 8] },
    { nome: "Carlos", notas: [6, 5] },
    { nome: "Ana", notas: [7, 6] },
    { nome: "Pedro", notas: [10, 9] },
    { nome: "Lúcia", notas: [8, 7] },
    { nome: "Fernando", notas: [7, 6] },
    { nome: "Camila", notas: [9, 8] },
    { nome: "Rafael", notas: [6, 5] },
    { nome: "Juliana", notas: [10, 9] },
  ];

  //Estrutura de repetição forEach para percorrer toda a lista de objetos, calculando e armazenando em um novo atributo a média do aluno de cada iteração
  //Em seguida, é printado o nome e a média do aluno da iteração
  listaDeAlunos.forEach(aluno => {
    aluno.media = (aluno.notas[0] + aluno.notas[1]) / 2;
    console.log("Nome:", aluno.nome, "| Média:", aluno.media);
  });

