// Outro tipo que também representa o não valor no typescript. Significa que aquela função ou método nunca vai retornar nada (usado em laço infinito ou em erro, este o uso mais comum).

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

// geralmente vai travar a aplicação (devido um loop infinito) ou vai lançar um erro.
