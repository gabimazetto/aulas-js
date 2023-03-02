/* 
Arrow = flecha
Arrow function = Sintaxe mais curta

(a, b) => {
    console.log("oi")
    return a + b;
}

*/  


// function ola(){
//     console.log("Hello!");
// }


// First-class citzen = funções são tratadas como valor;
// Posso passar função como parâmetro de outra função;
// Posso retornar uma função dentro de outra função;


const ola = () => {
    console.log("Hello!");
}

ola(); // invocação

const soma = (a, b) => {
    console.log(`A soma é ${a + b}`);
    return a + b;
}

let resultadoSoma = soma(3, 4);









