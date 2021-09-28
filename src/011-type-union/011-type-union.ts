// Utilizado para informar que uma variável, um retorno de função ou um parâmetro e etc. podem ter mais de um tipo. É representado pelo pipe '|' e significa 'ou'.

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b; // esta linha pode ser trocada por: return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20')); // essa operação só é possível se usar a linha de código: return `${a}${b}`; pois cobre a possibilidade do tipo undefined
console.log(addOrConcat('10', 20)); // essa operação só é possível se usar a linha de código: return `${a}${b}`; pois cobre a possibilidade do tipo undefined
