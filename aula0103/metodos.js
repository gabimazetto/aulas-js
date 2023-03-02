// Métodos = ação de um objeto

let pet = {
    // Atributos
    nome: "Fred",
    idade: 5,
    peso: 3.5,
    // Método
    dormir () {
        console.log("Estou dormindo zzZZzZZzzzZzZ");
    },
    comer (comida) {
        console.log(`Estou comendo ${comida}`);
    },
    brincar() {
        console.log("Estou fazendo bagunça na casa toda, mas vou falar que estou brincando")
    },
}


// . lista as propriedades e métodos de um objeto
// pet.dormir(); // Invocação da função/método
// pet.comer("sachê");
// pet.comer("passarinho");

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log

// pet.brincar();

let pessoa = {
    // Atributos
    nome: "gabriela",
    idade: 26,
    nacionalidade: "brasileira",
    // Métodos
    dizerOi() {
        // "this" = representa o objeto dono do método
        console.log(`oi, meu nome é ${this.nome}, tenho ${this.idade} anos, e sou ${this.nacionalidade}`);
    },
    envelhecer() {
        this.idade++;
    },
    cuidarPet(animal) {
        console.log(`Estou cuidando do ${animal.nome}`);
        animal.comer("batata");
        animal.peso += 0.2;
    },
};

pessoa.cuidarPet(pet);
console.log(pet.peso);


// pessoa.dizerOi();
// pessoa.nome = "gabi";
// pessoa.nome += " mazetto";
// pessoa.dizerOi(); //Chama o método com o nome alterado
// pessoa.envelhecer();
// pessoa.envelhecer();
// pessoa.envelhecer();
// pessoa.envelhecer();
// pessoa.dizerOi();













