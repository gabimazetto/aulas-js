// Estruturas de seleção

let lang = "pt"; // pt, es, en..

/*if(lang === "pt") {
    console.log("Olá, mundo!");
}else if(lang === "es") {
    console.log("Hola, mundo!");
} else if(lang === "en") {
    console.log("Hello, World!");
} else {
    console.log("Não há suporte para este idioma!");
}*/


// Switch-case = escolha-caso
switch(lang) {
    case "pt":
        console.log("Olá, Mundo");
        break;
    case "es":
        console.log("Hola, Mundo");
        break;
    case "en":
        console.log("Hello, World");
        break;
    default://caso não encontre nenhuma
        console.log("Não há suporte para este idioma: " + lang);
}













