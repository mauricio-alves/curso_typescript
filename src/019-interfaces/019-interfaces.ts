// Na maioria das vezes, interfaces são idênticos a type alias. Ambos funcionam da msm maneira, são pra criar tipos ou contratos (objetos que implementem algo desejado).
// Geralmente se usa interfaces para modelar objetos. É mais restritivo, por isso talvez usar type alias seja melhor.

// interface (faz o msm que o alias mais abaixo no código)
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// type alias (para diminuir o código):
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// código acima, mas como interface:
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// type alias:
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// interface:
const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Maus',
  sobrenome: 'Alves',
};

const pessoa = new Pessoa('Maus', 'Alves');

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
