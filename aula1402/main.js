// Dia 14.02
// Variáveis e operadores;
// let= palavra reservada para criar uma variável;
// a palavra "let" é um comando pra criar uma variável;
// uma variável não pode começar com número; se tiver número precisa ser depois; 
//não pode ter espaço. ou escreve tudo jundo ou a primeira letra da proxima palavra é maiuscula (camel case);
//VARIAVEL GUARDA UM VALOR;


let nomeCompleto; //essa variavel diz que dentro dela tem o valor da tag "nomeCompleto";

nomeCompleto = "gabriela mazetto"; //atribuição
// console.log("batata");
// console.log(nomeCompleto);
nomeCompleto = "henrique mazetto"; //re-atribuição de valor da variável (reefinir);
// console.log(nomeCompleto);

let idade = 26;
idade = 15; // re-atribuição de valor da variável

// concatenação
// console.log("Meu nome é " + nomeCompleto);
// console.log("Meu nome é " + nomeCompleto + " e tenho " + idade + " anos");

//const = define uma constante = impede a re-atribuição
const cpf = "058.478.954-87";
//cpf = "058.478.954-87"; - da erro quando vai fazer as coisa

// Tipos 
let golsSofridos = 3; //numero = number
let chanceDerrota = 0.55; //para numero decimal tem que usar ponto (.)
let posseBola = 33.57; //33,57
let nomeTime = "Coritiba"; //pode ser com "", '' ou `´ (string - cadeia de caracteres)
let patrocinio; //undefined (não tem valor definido);
patrocinio = "Soulcode"; //agora foi definido;

//boolean = só tem 2 valores possíveis (true ou false)

let timeGanhou = true; //"Lê: é verdade que o timeGanhou"
let timePerdeu = false; //"Lê: é falso que o timePerdeu"

//operadores aritméticos (vão nos permitir fazer calculos matematicos)
let soma = 200 + 100;
let sub = 100 - 55;
let mult = 5 * 7;
let div = 400 / 25;
let resto = 8 % 3;
let expressao = (soma + sub) * div;
let expressao2 = mult - div / resto;
// console.log("A soma é " + soma + "!");
// console.log("A subtração é " + sub + "!");
// console.log(`A multiplicação é ${mult}!`); //template strings = interpolação de strings 
// console.log(`A divisão é ${div}!`); 
// console.log(`O resto é ${resto}!`);
// console.log(`O resultado da expressão é ${expressao}!`);
// console.log(`O resultado da expressão 2 é ${expressao2}!`);

// const mensagem = `Olá, tudo bem? 
// Seja 
// bem-
// vindo!`;
// console.log(mensagem);

let i = 0;
// i = i + 1; // o novo valor de i é 0 +1 =1
// i = i + 1; // o novo valor de i é 1 + 1 =2
// i = i + 1; // o novo valor de i é 2 + 1 =3
// i = i + 1; // o novo valor de i é 3 + 1 =4
// //essas coisas é incremento; estamos incrementando a variavel. 

// i ++; //i = i+1
// console.log(i);
// i ++; //altera o valor de i, somando i + 1 = incremento
// console.log(i);
// i --; // i = i - 1 = decremento (diminui o valor de i)
// console.log(i);

//Operadores relacionais (booleano) (>, <, >=, <=, ==, !=)
let a = 3;
let b = 5;

// console.log(a > b); // A é maior que B? 
// console.log(a < b); // A é menor que B? 
// console.log(b >= a);// B é maior ou igual a A?
// console.log(a <= b);// A é menor ou igual a B?
// console.log(a == b);// A é igual a B?
// console.log(a!= b);// A é diferente a B?



// === (estritamente igual; igual em tipo tb) (compara VALOR E TIPO)
console.log(a == "3");// A é igual a "3"?
console.log(a === "3"); // A é estritamente igual a "3"?
