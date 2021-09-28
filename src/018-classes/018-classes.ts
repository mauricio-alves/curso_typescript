// Forma longa de usar classes no TS para criar atributos e já definir tudo que precisa:
export class Empresa {
  public readonly nome: string; // public não é necessário usar, pois por padrão já é public.
  private readonly colaboradores: Colaborador[] = []; // o readonly indica que não posso alterar o atributo da classe 'Colaborador', apenas adicionar novos itens pela função mais abaixo no código.
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // Método:
  // public abaixo não necessário
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  // Método:
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// Forma curta de usar classe no TS (faz o msm que a classe Empresa acima):
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Maus', 'Alves');
const colaborador2 = new Colaborador('Danilo', 'Alves');
const colaborador3 = new Colaborador('Reinaldo', 'Alves');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// Structural typing:
empresa1.adicionaColaborador({
  nome: 'Luiz',
  sobrenome: 'Miranda',
});

console.log(empresa1);

empresa1.mostrarColaboradores();
