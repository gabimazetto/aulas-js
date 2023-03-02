// Aula 02-03
// Tópicos : objetos aninhados e arrays de objetos 

// Objetos aninhados = objeto dentro de outro

let pessoa = {
    nome: "Gabriela",
    cpf: "999.999.999-99",
    contato: {
        telefone: "(41) 99999-9999",
        email: "emaildagabi@gmail.com",
    },
    endereco: { //agrupar propriedades
        cidade: "Curitiba",
        estado: "PR",
        cep: "82900-548",
    },
    objetivosProfissionais: ["Home Office", "CLT", "Desenvolvedor Senior", "Ficar rica"],
    formacao: [
        { nome: "Ensino Médio", periodo: "2011-2013"},
        { nome: "Licenciatura", periodo: "2015-2050"},
        { nome: "Formada em sofrer", periodo: "1996- atualmente"},        
    ],
};

// console.log(pessoa.contato.telefone);
// console.log(pessoa.objetivosProfissionais[0]);
console.log(pessoa.formacao[2]);
console.log(pessoa.formacao[2].periodo);
