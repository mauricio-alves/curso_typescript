// Serve pra criar um apelido para um tipo, com o objetivo de deixar o código mais limpo.

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type corPreferida = CorRGB | CorCMYK;

// código utilizando o type alias:
const pessoa: Pessoa = {
  idade: 30,
  nome: 'Maus',
  salario: 200_000, // é o msm que 200000
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
