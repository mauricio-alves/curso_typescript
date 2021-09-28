// Usado para converter de um tipo para outro.

// Type assertions RECOMENDADOS:
// Condicional:
// o if serve pra checar se o body existe ou é nulo, é usado quando o dev não tem certeza se o elemento existe ou não, evitando assim erros no código.
const body1 = document.querySelector('body1');
if (body1) body1.style.background = 'red';

// Type assertion:
// ao adicionar 'as HTMLElement' vc diz pro código que tem certeza que o body existe, então não retorna null como opção.
const body3 = document.querySelector('body') as HTMLElement;
body3.style.background = 'red';

// HTMLElement
// outro exemplo de type assertion, ao adicionar 'HTMLInputElement', o código reconhece o input como elemento HTML e libera todas as propriedades do elemento em questão.
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Type assertions NÃO RECOMENDADOS:
// Non-null assertion (!):
// ao usar '!' o TS entende que não pode ser nulo (ou seja, o body existe) e permite o restante da linha de código (porém deve ser evitado pois pode gerar problemas no código).
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// obviamente não significa que pode fazer qualquer coisa, por exemplo:
const body4 = document.querySelector('body') as number;
body4.style.background = 'red';
// body jamais seria um number, portanto retorna erro.

// Se houver necessidade de fazer algo diferente do padrão (muito raro), é possível validar o código acima da seguinte forma:
const body4 = document.querySelector('body') as unknown as number;
// usando unknown, deixa de retornar erro tipar body como number.
