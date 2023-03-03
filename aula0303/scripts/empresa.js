// Elementos de dados digitados pelo usuário 
const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");

//Saber qando o botão foi clicado
const addBtn = document.getElementById("btn-add");

// Montar o corpo de linhas da tabela 
const conteudoTab = document.getElementById("conteudo-tabela");

// Event Listener = ouvinte (fofoqueiro)

addBtn.addEventListener("click", () => {
    // 1) Coletar dos inputs o que foi digitado;
    let usuario = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocalidade.value,
        telefone: campoTelefone.value,
    };
    console.log(usuario);

    // 2) Concatenar na Tabela;
    conteudoTab.innerHTML += `
        <tr>
            <td>${usuario.email}</td>
            <td>${usuario.cep}</td>
            <td>${usuario.uf}</td>
            <td>${usuario.localidade}</td>
            <td>${usuario.telefone}</td>
        </tr>
    `
});















