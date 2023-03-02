//Aula 23/02
// Tópicos: Funções;


//Função = procedimento = método

//Sintaxe básica de uma função]
//palavra reservada (function) > nome da função (dizOla)

function dizOla() { //declaração de funcção
    console.log("Hello, World!");
    console.log("!!!!!!!!!");
}

// Invocação = chamada -> têm que colocar os parenteses ()
// dizOla();
// dizOla();
// dizOla();

function exemplo01() { // escopo de função
    let a = 1;
    let b = 4;
    console.log(`A soma é ${a + b}.`);
}
// exemplo01();

let num1 = 3;
let num2 = 5;

function exemplo02() {
    console.log(`A soma é ${num1 + num2}.`);
}
// exemplo02();
num1 = 10;
num2 = 15;
// exemplo02();

// Parâmetros = entrada = o que a função precisa para executar
// Informação dinâmica 
// a e b são PARÂMETROS

function soma(a, b) {
    console.log(`A soma de ${a} + ${b} = ${a+b}.`);
}

// soma(20, 75);
// soma(10, 5);
// soma(9, 80);
// soma(1, 1);

function calculadora(a, b, c) {
    console.log(`A soma é ${a + b + c}.`);
    console.log(`A subtração é ${a - b - c}.`);
    console.log(`A multiplicação é ${a * b * c}.`);
    console.log(`A divisão é ${a / b / c}.`);
}

// calculadora(10, 5, 2);
// let numero1 = 50;
// let numero2 = 25;
// let numero3 = 40;
// calculadora(numero1, numero2, numero3); // argumentos = valores passados para os parâmetros. 

//Declare uma função que recebe 3 notas e mostra a média entre elas. 

// function media(nota1, nota2, nota3) {
//     let media = (nota1 + nota2 + nota3) / 3;
//     console.log(`A média entre as notas é ${media}.`);
// }

// let resultado 
function media(nota1, nota2, nota3){
    let resultado = (nota1 + nota2 + nota3) / 3;
    console.log(`A média entre as notas é ${resultado}`);

    return resultado; // indica que o valor da variável será "externalizado"
    console.log("Oiee"); //dead-code = código que nunca vai ser executado (porque está depois do return).
}
// o valor resultado da variável fica preso dentro da função. quando se usa o "return", esse resultado pode sair da função e ser usado fora dela. 

// let medBiologia = media(7.5, 8.0,9.0);
// // console.log(resultado); funciona, mas é mt provavel que gere bugs, pq pode confundir
// let medMatematica = media(10, 8, 3);
// let medPortugues = media(7.7, 9.6, 4.5);

// console.log(`Biologia = ${medBiologia}`);
// console.log(`Matematica = ${medMatematica}`);
// console.log(`Portugues = ${medPortugues}`);


// Função: ENTRADA -> PROCESSAMENTO -> SAÍDA 
// y = f(x)
// f = função
// x = parâmetro
// y = resultado/retorno  

function estaAprovado(n1, n2, n3) { // propósito da função é indicar se o aluno foi aprovado ou não
    let med = media(n1, n2, n3);
    if(med >= 7) {
        return true; // podemos retornar "Aprovado!"
    } else {
        return false; // podemos retornar "Reprovado!"
    }
}

let statusAluno = estaAprovado(7.5, 5,9.0);
console.log(statusAluno);








