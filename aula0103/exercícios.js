// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo


let conta = {
    // Atributos
    codigo: "1-23456",
    saldo: 1000,
    cpfTitular: "999.999.999.99",
    nomeTitular: "Gabriela",
    // Métodos
    saque(valor) {
        this.saldo -= valor; // this.saldo = this.saldo - valor;
    },
    deposito(valor) {
        this.saldo += valor; // this.saldo = this.saldo + valor;
    },
};

console.log(conta.saldo);
conta.saque(500);
console.log(conta.saldo);
conta.deposito(10);
console.log(conta.saldo);

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let sabonete = {
    // Atributos
    nome: "Sabontete Eco íris",
    descricao: "muito bom e cheiroso. recomendo muito. comprem",
    quantidade: 10,
    precoOriginal: 50,
    desconto: 40,
    // Métodos
    calcularPrecoDesconto() {
        let precoDescontado = this.precoOriginal - this.desconto
        console.log(`O preço do ${this.nome} com desconto aplicado é de ${precoDescontado}`);
        return precoDescontado
    },
    apresentacao() {
        console.log(`O ${this.nome} é ${this.descricao}!`)
    },
    comprar(sub) {
        this.quantidade -= sub;
    }
};

sabonete.calcularPrecoDesconto();
sabonete.apresentacao();
sabonete.comprar(5);
console.log(sabonete.quantidade);