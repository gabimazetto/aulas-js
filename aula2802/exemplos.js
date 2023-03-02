/* Aula 28/02
    TÓPICOS: for.Each, map
*/

let numeros = [1, 2, 3];

function mostrarValor(valor) {
    console.log(valor);
}


// for (let num of numeros) {
//     mostrarValor(num);
// }

// forEach
//Para cada elemento no array, executa a função
// numeros.forEach(mostrarValor);

numeros.forEach((numero) => {
    console.log(numero);
});

// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let soma = 0 

numeros.forEach((numero) => {
    soma + numero;
});

// console.log(`I: ${soma}`);


let nomes = ["Pedro", "Paulo", "João", "Lucas"];
let nomesCaixaAlta = [];

nomes.forEach((nome) => {
    nomesCaixaAlta.push(nome.toUpperCase());
});
console.log(nomesCaixaAlta);

//Map = aplica trransformação para cada elemento retornado
let nomesCaixaAlta2 = nomes.map((nome) => {
    return nome.toUpperCase();
});
console.log(nomesCaixaAlta2);

let nomesCaixaBaixa = nomes.map((nome) => {
    return nome.toLowerCase();
});
console.log(nomesCaixaBaixa);

let nomesExclamacao = nomes.map((nome)=> {
    return nome + "!";
});
console.log(nomesExclamacao);

// Parâmetro = genérico, representa qualquer coisa
// Argumento = valor específico

let dados = [1, 2, 3, 4, 5];
let dadosPor100 = dados.map((dado) => {
    return dado * 100;
});
console.log(dadosPor100);

// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.

let palavras = ["oi", "tudo", "bem", "amarelo", "vermelho"];
let palavras2 = palavras.map((palavra) => {
    if (palavra.length < 5) {
        return "BATATA";
    } else {
        return palavra.toUpperCase();
    }
});
console.log(palavras2);

//Filter = aplica um teste em cada elemento e quem passar faz parte do novo array

let temps = [29, 5, 10, -4, 15, -20]; //Celsius
let tempsPositivas = temps.filter((temp) =>{
    if (temp > 0) {
        return true; // temp pode fazer parte do novo array
    } else {
        return false; // temp não fará parte do novo array
    }
});
console.log(tempsPositivas);

let tempsPositivas2 = temps.filter((temp) => temp > 0); //jeito bem mais facil de fazer o troço lá 

console.log(tempsPositivas2);