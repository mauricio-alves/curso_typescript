// Structural typing é um sistema de tipos do TS onde a identidade do tipo não importa, mas sim as restrições dele.

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };
// o código aceita qlquer User acima, contanto que atenda as restrições (username e password como strings).

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// aceitando qlquer User (retornando true or false, se os dados forem corretos ou não), pois atende as restrições definidas no início do código (structural type):
const bdUser = { username: 'maus', password: '123' };
const sentUser = { username: 'maus', password: '123' };
const loggedIn = VerifyUser(bdUser, sentUser);

console.log(loggedIn);
