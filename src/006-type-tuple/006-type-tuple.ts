// Tipo exclusivo do typescript, não existe no JS
// Utiliza o array do JS para fazer o tuple, que é um array com tipos específicos e tamanhos fixos.

const dadosCliente1: readonly [number, string] = [5, 'Maus']; // ao adicionar o readonly, o array se torna imutável (pop ou push não funcionarão)
const dadosCliente2: [number, string, string] = [5, 'Maus', 'Miranda'];
const dadosCliente3: [number, string, string?] = [5, 'Maus']; // string? significa opcional
const dadosCliente4: [number, string, ...string[]] = [5, 'Maus', 'Miranda']; // ...string[] significa o restante

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Alves';
dadosCliente1.pop(); // é possível alterar o array (pop ou push), porém não desejável

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// outras formas de usar o readonly array:
const array1: readonly string[] = ['Maus', 'Alves'];
const array2: ReadonlyArray<string> = ['Maus', 'Alves'];

console.log(array1);
console.log(array2);
