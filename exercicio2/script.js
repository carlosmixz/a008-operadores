let Num1 = Number(prompt("Digite um número: "));

while(Num1 === NaN) {
    Num1 = Number(prompt("Digite um NÚMERO: "));
}

let Num2 = Number(prompt("Digite um número: "));

while(Num2 === NaN) {
    Num2 = Number(prompt("Digite um NÚMERO: "));
}

console.log("O primeiro numero é maior que segundo? " + (Num1 > Num2));
console.log("O primeiro numero é igual ao segundo? " + (Num1 === Num2));
console.log("O primeiro numero é divisível pelo segundo? " + (Num1 % Num2 === 0));
console.log("O segundo numero é divisível pelo primeiro? " + (Num2 % Num1 === 0));