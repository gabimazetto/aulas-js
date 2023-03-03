// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e re-
// alize a conversão para Celsius. A equação para realizar a conversão é:

// C =
// F − 32
// 1.8

// let f = 78;
// let c = (f - 32) / 1.8;
// console.log(`A temperatura em Celsius é ${c}`);

/* --------------------------------------------------------------------------------------------------------------------------*/

// 2. Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada
// nomeCompleto e realize a concatenação de nome e sobrenome com
// template strings.

// let nome = "Gabriela";
// let sobrenome = "Mazetto"; 
// let nomeCompleto = nome + " " + sobrenome; 
// console.log(nomeCompleto);

/* --------------------------------------------------------------------------------------------------------------------------*/


// 3. Crie cinco variáveis que representam cinco notas de um estudante. Cal-
// cule a média ponderada, sabendo que o peso das notas são respectiva-
// mente: 3, 2, 1, 4 e 5.

// let nota1 = 9;
// let nota2 = 7;
// let nota3 = 9;
// let nota4 = 6;
// let nota5 = 5;
// let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
// console.log(media);

/* --------------------------------------------------------------------------------------------------------------------------*/

// 4. Crie duas variáveis que representam as dimensões (em km) de um ter-
// reno: comprimento e largura. Calcule a área deste terreno, em seguida
// converta para hectares. Nota: 1 km2 equivale a 100 hectares.

// let comprimento = 8.9;
// let largura = 7;
// let areaEmKm = comprimento * largura;
// let areaEmHc = (areaEmKm * 100);
// console.log(`A área em km é ${areaEmKm}km² e a área em hectares é ${areaEmHc}ha`);

/* --------------------------------------------------------------------------------------------------------------------------*/


// 5. Crie uma variável que armazena uma temperatura em Kelvin. Converta
// para Celsius. A equação é:

// C = K − 273
/* --------------------------------------------------------------------------------------------------------------------------*/

// Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba
// qual destes números é o maior.

// let a = 8;
// let b = 9;
// let c = 6;

// if (a >= b && a >= c) {
//     console.log(`${a} é o maior número`);
// } else if (b >= a && b >= c) {
//     console.log(`${b} é o maior número`);
// } else {
//     console.log(`${c} é o maior número`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/


// 2. Crie três variáveis que representam os três lados de um triângulo. Aplica
// a seguinte regra para definir se o triângulo é possível: Se a soma de dois
// lados é maior que o terceiro lado.

// let lado1 = 5;
// let lado2 = 8;
// let lado3 = 4;

// if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//     console.log(`O triângulo é possível`);
// } else {
//     console.log(`O triângulo não é possível`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/


// 3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior
// que 130) mostre uma mensagem de aviso.

// let idade = -78;
// if (idade < 0 || idade > 130) {
//     console.log(`Idade inválida`);
// } else {
//     console.log(`Idade válida`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/


// 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte
// regra para aplicar ajustes salariais: Caso não possua dependentes não
// realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o
// salário. Caso seja acima de 5 aumentar em 40% o salário.

// let salario = 1200;
// let quantidadeDependentes = 7;

// if (quantidadeDependentes <= 0) {
//     console.log(`Não tem ajuste`)
// } else if (quantidadeDependentes >= 1 || quantidadeDependentes <= 5) {
//     salario += salario * 0.3;
// } else {
//     salario += salario *0.4;
// }
// console.log(salario);

/* --------------------------------------------------------------------------------------------------------------------------*/


// 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 -
//     Segunda, ... 7 -Sábado). Com base no valor indique se é final de semana
//     ou dia de útil.

// let diaDaSemana = 5;

// if (diaDaSemana >=2 && diaDaSemana <= 6 ) {
//     console.log(`dia util`);
// } else {
//     console.log(`final de semana`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/

    
//     6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bis-
//     sexto quando: Caso 1) É um número divisível por 4, mas não é divisível 
//     por 100. Caso 2) É um número divisível por 4, por 100 e por 400.

// let ano = 2023;
// if (ano % 4 === 0 && ano % 4  ===1) {
//     console.log(`ano bissexto`);
// } else if (ano % 4 === 0 && ano % 4 === 0 && ano % 400 === 0) {
//     console.log(`ano bissexto`);
// } else {
//     console.log(`o ano ${ano}  não é bissexto`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/

// 1. Defina uma variável para armazenar um caractere e determine se é uma
// vogal ou uma consoante. Use um switch-case para implementar a lógica.

// const letra = "g";

// switch (letra) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log(`a letra "${letra}" é uma vogal`);
//     break;
//     default:
//         console.log(`a letra "${letra}"  é uma consoante`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/


// 2. Defina uma variável para armazenar um mês do ano (em número) e im-
// prima o nome do mês correspondente. Use um switch-case para imple-
// mentar a lógica.

// const mes = 6;

// switch (mes) {
//     case 1:
//         console.log(`Janeiro`);
//         break;
//         case 2:
//             console.log(`Fevereiro`);
//             break;
//             case 3:
//                 console.log(`Março`);
//                 break;
//                 case 4: 
//                 console.log(`Abril`);
//                 break;
//                 case 5:
//                     console.log(`Maio`);
//                     break;
//                     case 6:
//                         console.log(`Junho`);
//                         break;
//                         case 7:
//                             console.log(`Julho`);
//                             break;
//                             case 8: 
//                             console.log(`Agosto`);
//                             break;
//                             case 9:
//                                 console.log(`Setembro`);
//                                 break;
//                                 case 10:
//                                     console.log(`Outubro`);
//                                     break;
//                                     case 11:
//                                         console.log(`Novembro`);
//                                         break;
//                                         case 12: 
//                                         console.log(`Dezembro`);
//                                         break;
//                                         default:
//                                             console.log(`Mês inválido`);
// }


/* --------------------------------------------------------------------------------------------------------------------------*/

// 3. Defina uma variável para armazenar um número de 1 a 12 e imprima
// o número de dias correspondente ao mês. Use um switch-case para
// implementar a lógica. Considere que fevereiro tem 28 dias em anos não
// bissextos.

/* --------------------------------------------------------------------------------------------------------------------------*/

// 4. Defina uma variável para armazenar um número de 1 a 4 e imprima o
// nome da estação do ano correspondente. Use um switch-case para im-
// plementar a lógica.

/* --------------------------------------------------------------------------------------------------------------------------*/


// 5. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a

// menção correspondente. Use um switch-case para implementar a ló-
// gica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de

// 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.

/* --------------------------------------------------------------------------------------------------------------------------*/

// 1. Use um laço while para imprimir na tela todos os números pares de 2 a
// 10.

// let numero = 6;

// while (numero <= 10) {
//     console.log(numero);
//     numero+= 2;
// }

/* --------------------------------------------------------------------------------------------------------------------------*/

// 2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).

// for (i = 1; i <=10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/

// 3. Use um laço for para imprimir na tela a sequência de Fibonacci até o
// décimo termo.
/* --------------------------------------------------------------------------------------------------------------------------*/

// 5. Escreva um programa que use um laço for para imprimir na tela os nú-
// meros de 10 a 1 (em ordem decrescente).

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

/* --------------------------------------------------------------------------------------------------------------------------*/

// 6. Mostre apenas os números ímpares de 1 até 1000.

// for (let i = 1; i <= 1000; i++){
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

/* --------------------------------------------------------------------------------------------------------------------------*/


// 1. Escreva uma função que receba um número e retorne seu dobro.

// function dobrarNumero(numero) {
//     return numero * 2;
// }
// console.log(dobrarNumero(3));

/* --------------------------------------------------------------------------------------------------------------------------*/


// 2. Escreva uma função que receba um número e retorne seu quadrado.


// function aoQuadrado(numero) {
//     return numero * numero;
// }

// console.log(aoQuadrado(3));

/* --------------------------------------------------------------------------------------------------------------------------*/

// 3. Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça uso da interpolação de strings.

// function apresentacao(nome, idade, cidade){
//     return `Olá, eu sou a ${nome}, tenho ${idade} anos, e moro em ${cidade}`;
// }

// console.log(apresentacao("gabi", "26", "curitiba"));


// 4. Escreva uma função que receba dia, mês e ano e retorne a data por
// extenso no formato "DD/MM/AAAA".
/* --------------------------------------------------------------------------------------------------------------------------*/

// 5. Escreva uma função que receba um preço de um produto e um percen-
// tual. Retorne o valor aplicado ao desconto.

// function valorDesconto(valor, percentual) {
//     const desconto = valor * (percentual / 100);
//     return valor - desconto;
// }

// console.log(valorDesconto(40,50));


// 6. Escreva uma função que receba uma palavra e um número. Retorne a
// palavra repetida a quantidade de vezes indicada pelo segundo parâme-
// tro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize
// um loop para resolver.

// function repete(palavra, numero) {
//     let resultado = "";
//     for (let i =0; i < numero; i++) {
//         resultado += palavra
//     }
//     return resultado;
// }

// console.log(repete("gabi", 5));



// 7. Escreva uma função que recebe outra função e invoca ela.



// 8. Transforme os itens 1, 2 e 3 em arrow function expressions.



// const dobrarNumero = (numero) => numero * 2
// console.log(dobrarNumero(8));

// const aoQuadrado = (numero) => numero * numero;
// console.log(aoQuadrado(3));

// function apresentacao(nome, idade, cidade){
//     return `Olá, eu sou a ${nome}, tenho ${idade} anos, e moro em ${cidade}`;
// }

// const apresentacao = (nome, idade, cidade) => `Olá eu sou a ${nome}, tenho ${idade} anos e moro em ${cidade}`
// console.log(apresentacao("gabi", "26", "curitiba"));