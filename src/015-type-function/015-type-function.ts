// Usando tipagem em funções:
// Isso facilita o código, o deixa mais fluido.

type MapStringsCallback = (item: string) => string;

// add 'export' abaixo para trabalhar no 'Module Mode':
export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
// na linha abaixo, não preciso tipar (item: any), pois lá no início a função já está tipada. Dessa forma o código já sabe o que vai retornar nessa função abaixo.
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
