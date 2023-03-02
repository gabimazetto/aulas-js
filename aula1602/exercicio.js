// Exercício I: 
//Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

 let idade = 26;
 let dinheiro = 9000;

 if(idade >= 18 && dinheiro >= 20){
     dinheiro = dinheiro - 20; dinheiro -= 20 //(resumo dessa expressão)
     console.log('Você pode comprar bebida e seu saldo é ' + dinheiro);
 } else {
     console.log('Você não pode comprar bebida');
 }


console.log("--------------------------------") //só pra separar no terminal 


// Exercício II:
// Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

 let salario = 900;

 if(salario < 500){
     salario = salario + 50;} //salario += 50 (simplificação)
 else if (salario >= 500 && salario <= 1000) {
     salario = salario + 25;
 } else {
     console.log("Não houve aumento salarial.")
 }
 console.log('Salário é ' + salario);


// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

/*
MINHA RESOLUÇÃO

let diaSemana = "5";

switch(diaSemana){
    case "1":
        console.log("Domingo");
        break;
    case "2":
        console.log("Segunda");
        break;
    case "3": console.log("Terça");
        break;
    case "4": console.log("Quarta");
        break;
    case "5": console.log("Quinta");
        break;
    case "6": console.log("Sexta");
        break;
    case "7": console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
} 
*/

//resolução do prof

// let numero = 1; 

// switch(numero){
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break;
//     case 3: console.log("Terça");
//         break;
//     case 4: console.log("Quarta");
//         break;
//     case 5 : console.log("Quinta");
//         break;
//     case 6: console.log("Sexta");
//         break;
//     case 7: console.log("Sábado");
//         break;
//     default:
//         console.log("Dia inválido");
// } 
// atalho pra comentar mt coisa: ctrl + ;

console.log("----------------------------------------------------------------");

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = "pizza"

if (comida === "batata" || comida === "carne" || comida === "chocolate") {
    console.log("Humm, adoro");
} else if (comida === "pizza" || comida === "sanduíche") {
    console.log("Às vezes");
} else {
    console.log("Quero não!");
}

console.log("--------------------------------");

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let numero = 526541547;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}
