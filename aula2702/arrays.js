/*      Aula 27/02
    Arrays = armazena múltiplos dados.
    Index -> indica a posição do elemento no array (como um endereço); o ínicio é sempre o 0 (0, 1, 2, 3....)

*/


    /*DECLARAÇÃO DE ARRAYS*/
// let figuras = ["coracao", "estrela", "ok", "nao", "joinha", "sorriso"];
// // console.log(figuras); // representação em texto do array

// let numeros = [3, 1, 5, 7, 2];
// console.log(numeros);

    /*Acessando elementos*/
// console.log(figuras[5]); // sexto elemento
// console.log(figuras[1]); // segundo elemento
// console.log(numeros[2]); // terceiro elemento
// console.log(numeros[0]); // primeiro elemento
// console.log(numeros[3]); // quarto elemento 
// console.log(numeros[1000]);

    /* Alterando valor de um elemento */
// console.log(numeros);
// numeros[2] = 700; // Alterar o valor armazenado no índice 2
// console.log(numeros);
// numeros[2]++; // Altertar o valor armazenado, incrementando o que estiver dentro
// console.log(numeros);

// figuras[5] = "batata";
// console.log(figuras);

    /* Percorrer um array */
// console.log(numeros.length); //Quantos elementos existem no array
// console.log(figuras.length);

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }
// for(let i = 0; i <figuras.length; i++) {
//     console.log(`O valor do index ${i} é ${figuras[i]}`);
// }

            /* For-of */
            /* Percorre o array até o final dele */
// let nomes = ["josé", "carlos", "andré", "pedro"];
// let notas = [7.5, 8.7, 9.0, 10.0];
// for(let nome of nomes) { // A variável "nome" assume um elemento diferente a cada laço / pra cada nota no array, faça isso
//     console.log(nome);
// }

// for (let notaAluno of notas) {
//     console.log(notaAluno);
// }

// for(let i = 0; i <notas.length; i++){
//     notas[i]++; //Se forr preciso alterar o valor, é necessário o index
// }
// console.log(notas);

// Inserir/Remover
let listaProdutos = [];//array vazio
console.log(listaProdutos.length); //vai aparecer 0

listaProdutos.push("Smart Band"); //Adiciona elemento no final
listaProdutos.push("Bolo de cenoura");
listaProdutos.push("Batata remasterizada");
listaProdutos.push("Smartphone 2MB", "HD500kb", "RAM 200B");// Adiciona mais de um por vez (separando por vírgula)

console.log(listaProdutos);
console.log(listaProdutos.length);

let produto1 = listaProdutos.pop();// Remove o último elemento
console.log(listaProdutos);
console.log(produto1); // criar uma variavel pra salvar o valor pop, senão ele se perde 

console.log(listaProdutos.includes("Bolo de cenoura")); // verifica se há um elemento específico e retorna um valor booleano (true ou false)

