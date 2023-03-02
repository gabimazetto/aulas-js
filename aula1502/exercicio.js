// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

let nota1 = 5;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3; // media = 7
if(media <=7) {
    console.log("Aprovado!");
} else if (media > 7 && media > 5) {
    console.log("Reforço!");
} else {
    console.log("Reprovado.");
}


// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 60;
let altura = 1.55;
let imc = peso / (altura * altura);
console.log("Seu IMC é de: " + imc.toFixed(2));

if(imc < 18.5) {
    console.log("Abaixo do peso!");
} else if(imc >= 18.5 && imc < 25) {
    console.log("Peso normal!");
} else if(imc >= 25 && imc < 30) {
    console.log("Sobrepeso!");
} else if(imc >= 30 && imc < 35) {
    console.log("Obesidade Grau 1");
} else if(imc >= 35 && imc < 40) {
    console.log("Obesidade Grau 2");
} else {
    console.log("Obesidade Grau 3");
}


// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

let a = 5;
let b = 9;
if(a > b) {
    console.log("a > b");
} else if (a < b) {
    console.log("a < b");
}else {
    console.log("a = b");
}












