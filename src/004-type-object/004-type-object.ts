// Por padrão, após o typescript inferir o tipo de objeto abaixo, não é possível adicionar novas propriedades.

const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// é possível alterar um valor existente:
objetoA.chaveA = 'Outro valor';

// Não permite adicionar novos valores, como abaixo:
objetoA.chaveC = 'Nova chave';

// Uma forma de conseguir seria essa abaixo:
// unknown vem antes do any, é mais abrangente que o any.
const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
// porém não é segura, perde-se o feedback de prováveis erros e todos os benefícios como o autocomplete. O typescript passa a não reconhecer mais o objeto.

//outra forma de conseguir adicionar objetos:
const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; // adicionar essa linha de código (torna opcional a chaveC)
  [key: string]: unknown; // index signature: ou adicionar essa linha de código (libera pra adicionar quantas chaves quiser)
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveC = 'Nova chave';
// esta última forma é mais segura, mantém as propriedades das chaves que eu falei que existiria (até a chaveC?), mas não as que eu adicionar além delas.
