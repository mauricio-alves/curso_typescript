// Há duas maneiras criar um array:
// Array<T> ou T[]

// forma Array<T> (tipos):
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicaArgs(1, 2, 3);

console.log(result);

// forma T[] (string):
export function concatenaArgs(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const concatenacao = concatenaArgs('a', 'b', 'c');

console.log(concatenacao);

// ou também (string):
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');

console.log(upper);
