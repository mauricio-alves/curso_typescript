// Não é tão utilizado como o union type ( | ), também lido como 'or'.
// Se trata do '&', também lido como 'and'.

type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobreNome & TemIdade; // AND = deve ter todos os tipos
// type Pessoa = TemNome | TemSobreNome | TemIdade; // OR = pode ter um ou outro ou mais de um tipo

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Maus',
  sobrenome: 'Alves',
};

console.log(pessoa);

// Module mode (para sair do escopo global):
export { pessoa };

// outra forma de usar o type intersection (pouco utilizado):
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type DA = 'D' | 'A';
type Intersection = AB & AC & DA;
