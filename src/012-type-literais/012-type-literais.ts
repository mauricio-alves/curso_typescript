// Tipos literais:
// Conceito que não tem no typescript. Basicamente, é como utilizar valores como tipos, tornando seu código mais seguro, pois acusará erro se tentar usar string em um local de number por exemplo.

// ao usar let (tipo mais abrangente), permite trocar por outro number no exemplo abaixo:
let x = 10; // eslint-disable-line
x = 0b1010;

// ao usar const, y = 10 e não qlquer number (como no let):
const y = 10;

// para tornar let imutável (como o const), só declarando o tipo, porém não é aconselhável fazer isso:
let a:100 = 100; // eslint-disable-line
// ou assim:
let a = 100 as const; // eslint-disable-line

const pessoa = {
  nome: 'Maus' as const, // asserção (agora o tipo é 'Maus' e não string)
  sobrenome: 'Alves',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Amarelo'));

// Module mode (para sair do escopo global):
export default 1;
