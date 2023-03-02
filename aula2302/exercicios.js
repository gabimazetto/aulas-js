// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc(peso, altura) {
    let resultado = peso / (altura * altura);
    console.log(`O IMC é ${resultado}`);
}

// imc(70.0, 1.55);

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%


function porcentagem(num) {
    let p = num * 100;
    //console.log(`O percentual é ${p.toFixed(1)}%`); // toFixed é pra deixar "arredondado"
    return `${p.toFixed(1)}%`;
}

// let valorFormatado = porcentagem(0.55);
// console.log(valorFormatado);

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function ehNegativo(num) {
    if (num < 0){
        return true;
    }else {
        return false;
    }
}
// console.log(ehNegativo(-20));
// console.log(ehNegativo(20));


// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function formatar(num1) {
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num1));
}

// console.log(formatar(1647.84));


// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

function contar(maximo) {
    for (let i = 1; i <= maximo; i++) {
        console.log(i);
    }
}
// contar(5);

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.


function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

// console.log(nomeCompleto('Gabriela', 'Mazetto Gusmão'));
// let seuNomeCompleto = nomeCompleto(nome, sobrenome);

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

function areaCirculo(raio){
    return 3.14 * (raio * raio);
}

console.log(areaCirculo(10));


// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivelArea(areaCirculo) {
    if (areaCirculo >= 1 && areaCirculo <= 20) {
    return `Nível 1`
    }else if(areaCirculo >= 21 && areaCirculo <= 40){
        return `Nível 2`
        }else {
        return `Nível inválido`
    }
}
console.log(nivelArea(areaCirculo(10)));

