// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50

// let mult = 1;

// while (mult <=10) {
//     let resultado = mult * 5;
//     console.log(`${mult} x 5 = ${resultado}`);
//     mult++;
// }


let mult = 1

for (let mult = 1; mult <= 10; mult++) {
    console.log(`${mult} x 5 = ${mult * 5}`);
}


// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)
// let num = 1;

// while (num <= 99) {
//     if (num % 2 == 1) {
//         console.log("ímpar: " + num);
//     }
//     num++;
// }

let num = 1

for (let num = 1; num <= 99; num++){
    if (num % 2 == 1)
    console.log("ímpar: " + num);
}


// Exercícios III: Conte de 50 até 75


// let x = 50;

// while (x <= 75) {
//     console.log(x);
//     x++;
// }
    
let x = 50;

for (let x = 50; x <= 75; x++){
    console.log(x);
}


