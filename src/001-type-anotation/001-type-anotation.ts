/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos, ou seja, redundância, e o ESLINT corrigiria)
let nome:string = 'Maus'; // Qualquer tipo de strings: '' "" ``
let idade:number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1 ,2 ,3]; // outra forma de representar a linha de codigo acima
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b']; // outra forma de representar a linha de codigo acima

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Maus',
  idade: 33
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2, 2);

// outra forma de tipagem de funções:
const soma2: (x: number, y: number) => number = (x, y) => x + y;
