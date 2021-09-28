// "Pai" de todos os outros tipos (hierarquicamente), vem antes do 'any'. Funciona como o 'any', porém mais seguro.

let x: unknown;

x = 100;
x = 'Maus';
x = 900;
x = '10';
const y = 800;

// o 'unknown' não permite fazer qualquer coisa com o x acima, pois há uma mistura de tipos (com o any funcionaria como uma concatenação)
console.log(x + y);

// só conseguiria usar o x se fizesse uma checagem de tipos antes:
if (typeof x === 'number') console.log(x + y);
