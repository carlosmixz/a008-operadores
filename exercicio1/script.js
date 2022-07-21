// a) Peça ao usuário que insira um número **par**
let Num1 = Number(prompt("Digite um número par: "));

while(Num1 === NaN || Num1 % 2 !== 0) {
    Num1 = Number(prompt("Digite um NÚMERO PAR: "));
}

// b) Imprima no console **o resto da divisão** desse número por 2.
console.log(Num1 / 2);

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Somente resultados inteiros obviamente.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
// Teoricamente o resultado seria um numero racional, mas eu verifico e ele pede novamente até ser um número par