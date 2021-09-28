// Não existe no JS. É uma estrutura de dados não ordenada.

enum Cores {
  VERMELHO, // valor 0
  AZUL, // valor 1
  AMARELO, // valor 2
}

// é possível unir dois 'enum' com o msm nome, msm em lugares diferentes do código:
enum Cores {
  ROXO = 'ROXO',
  VERDE = 3,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

// é possível atribuir valores:
enum Cores2 {
  VERMELHO = 10, // valor 10
  AZUL = 100, // valor 100
  AMARELO = 200, // valor 200
}
