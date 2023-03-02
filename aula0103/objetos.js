// Aula 01.03
// Tópicos: Objetos

//Objetos = servem para estruturar dados
// - propriedades (características)
// - métodos (ações)


const pet = {           // {} indica que estou declarando um objeto
    nome: "Fred", // propridade-valor
    idade: 2, // propriedade-valor
    peso: 3.5, // propriedade-valor
    especie: "gato", // propriedade-valor
}; 

let pet2 = {
    nome: "Dorothy",
    idade: 5,
    peso: 4.5,
    especie: "gato",
};

let pet3 = {
    nome: "Astolfo",
    idade: 5,
    peso: "mts",
    especie: "gato",
    comidaFavorita: "sachê",
};

let pet4 = {
    nome: "Rodolfo",
    idade: 3,
    peso: "poucos",
    especie: "gato",
    comidaFavorita: "passarinho",
};
// console.log(pet3);
// console.log(pet4);

// Acesso de propriedade -> vai mostrando um por vez

console.log(pet.nome);  /* isso equivale a : console.log(pet["nome"]);*/
console.log(pet.idade); /* isso equivale a : console.log(pet["idade"]);*/
console.log(pet.peso); /* isso equivale a : console.log(pet["peso"]);*/
console.log(pet.especie); /* isso equivale a : console.log(pet["especie"]);*/
console.log(pet.propriedade); // essa propriedade não existe, vai dar undefined.

// Alterar valores das propriedades
pet.nome = "Neo"; //alteração no nome do pet
// pet.idade = 6; 
pet.idade++;
pet.peso = pet.peso + 3;

console.log(pet);
// pet = {} // com const podemos alterar as propriedades, mas não a variavel

pet["nome"] = "Batata"; // peso.nome = "Batata"
console.log(pet);

// Adicionando nova propriedade
pet.cor = "laranja";
console.log(pet);

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

pet3.nome = "tolfinho";
pet3.idade++;
pet3.cor = "sujo";
console.log(pet3);

pet4.nome = "rodi";
pet.idade++;
pet4.cor = "bigode"
console.log(pet4);

























/*
    /\__/\
    (=^.^=)
*/





