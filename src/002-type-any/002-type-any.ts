// any significa que não foi especificado o parâmetro, portanto pode usar qualquer tipo. Caso não seja explícito (como abaixo), geralmente não é bom pro código, pois não vai retornar um erro ao passar um parâmetro diferente do que o que se espera (number ao invés de string, por exemplo). Portanto o ideal é que não tenha any no código, utilize apenas em último caso (a não ser que seja esse o objetivo).

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
