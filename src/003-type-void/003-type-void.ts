// Significa que uma função ou método não retorna nada.

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Mauricio', 'Alves');

// outra forma

export { pessoa };

const pessoa = {
  nome: 'Mauricio',
  sobrenome: 'Alves',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();
