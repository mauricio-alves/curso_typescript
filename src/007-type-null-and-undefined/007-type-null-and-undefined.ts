// Null e undefined representam o mesmo valor = não valor. Porém, seu uso é diferente pra cada um.
// Undefined (menos utilizado pelo dev), é utilizado pela linguagem pra dizer que algo não foi ou pode não ser definido, por exemplo em parâmetros opcionais (ex. lastName?).

let x;
// if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// outra forma de checar por undefined:
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// Enquanto null (mais utilizado pelo dev), é utilizado propositalmente para ser um dos prováveis retornos de uma função, por exemplo:

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
