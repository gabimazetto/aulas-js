// Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"

let peso;
let altura;
let imc;
peso = 60;
altura = 1.55;
imc = peso / (altura * altura); 
// imc = peso / altura ** 2 > altura elevado a 2
console.log("Meu IMC é " + imc.toFixed(2));

// Exercício 2
// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R

let raio;
const pi = 3.14;
let area;
raio = 6;
area = pi * raio ** 2;
console.log(`A área é ${area.toFixed(2)}!`);


// Exercício 3
// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R

let raio2; 
//const pi = 3.14;
raio2 = 7;
let circunferencia;
circunferencia = 2 * pi * raio2;
console.log(`A circunferência é ${circunferencia}!`);


// Exercício 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32

let c;
let f;
c = 20;
f = (c * 1.8 + 32);
console.log(`A temperatura em fahrenheit é ${f}F!`);