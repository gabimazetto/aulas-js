/**
 * STRINGS = cadeia de caracteres 
 * 
 */

let meuPet = "Astolfo"; // "", '', `` 
// A(0), s(1), t(2), o(3), l(4), f(5), o(6) (esses são os caracteres que tem aqui.)

console.log(meuPet); 
console.log(meuPet[0]); //Acessando apenas o primeiro caractere (que tá na posição 0) "A"
console.log(meuPet[1]); //Acessando o caractere "s"
console.log(meuPet[2]); //Acessando o caractere "t"
console.log(meuPet[3]); //Acessando o caractere "o"
console.log(meuPet[4]); //Acessando o caractere "l"
console.log(meuPet[5]); //Acessando o caractere "f"
console.log(meuPet[6]); //Acessando o caractere "o"
console.log(meuPet[7]); //Não existe caractere nesse índice (vai dar undefined)

console.log(meuPet.length); // Retorna o tamanho da string


// percorrendo a string da poição 0 até length -1
// posição final da string é  lenght -1
for(let i = 0; i < meuPet.length; i++){
    console.log(meuPet[i]);
}

console.log(meuPet[meuPet.length - 1]); // acesso ao ultimo caracter da string

console.log(meuPet.toLowerCase()); // retorna tudo minusculo
console.log(meuPet.toUpperCase()); // retorna tudo maiusculo

let arquivo = "batata.mp4";
// verifica se a string termina com uma determinada palavra
console.log(arquivo.endsWith(".mp4"));
// verifica se a string inicia com uma determinada palavra (não necessariamente a palavra inteira, mas pode ser uma letra)
console.log(arquivo.startsWith("batata"));

let frase = "Eu comi arroz, batata e carne";
//Buscar se uma frase inclui um trecho de string 
console.log(frase.includes("feijão"));


console.log(frase.indexOf("c")); //Busca a posição do caractere (a primeira aparição)
console.log(frase.lastIndexOf("c")); //Busca a posição do caractere (a última aparição)
console.log(frase.indexOf("x")); // -1  = Não encontrou
console.log(frase.indexOf("arroz")); // Retorna onde inicia a palavra

console.log(frase.replace("carne", "ovo")); // troca uma palavra por outra

let palavra2 = "BATATA";
console.log(palavra2.slice(1)); // Cortou do 1 até o final
console.log(palavra2.slice(1, 4)); // Cortar do 1 até o 3 (para antes do 4)
