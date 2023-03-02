// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let nums1 = [4, 5, 214, 54, 34, 2, 4, 7, 5, 36]

let soma = 0 

for(let i = 0; i < nums1.length; i++){
    soma += nums1[i]
}

console.log(`I: ${soma}`);



// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

function media(){
    let notas = [7.3, 4.5, 8.4, 6.6, 7.1];
    
    let media;
    let soma = 0;

    for(let i = 0; i < notas.length; i++){
        soma = soma + notas[i];
    }

    media = soma / notas.length;

    console.log(`II: ${media}`)
}


// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.


function qualMaior (){
    let num2 = [0, 1, 25, 73, 4, 5, 6];
    let maior = num2[0];
    for (let i = 0; i < num2.length; i++){
        if(num2[i] > maior){
            maior = num2[i]
        }
    }
    console.log(`III: ${maior}`)
}

qualMaior()



// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

let frutas =["maçã","pera", "banana", "abacaxi"]
for(let fruta of frutas){
    console.log(`${fruta} tem ${fruta.length}`)
}


// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

function exercicio5() {
    let numeros = [];
  
    for (let i = 0; i < 5; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }
  
    let pares = [];
    for (let num of numeros) {
      if (num % 2 === 0) {
        pares.push(num);
      }
    }
  
    let somaPares = 0;
    for (let par of pares) {
      somaPares += par;
    }
  
    console.log(somaPares);
  }
exercicio5();



// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)


function verificarTipoArquivo(nomeArquivo){
    if( nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav") ){
        return true
    } else{
        return false
    }
}
console.log(verificarTipoArquivo("Linkin Park - In The End.mp3"));





// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

const extrairDigitosVerificadores = (cpf) => {
    const digitosVerificadores = cpf.slice(-2);
    return digitosVerificadores;
  };
  
  // console.log(extrairDigitosVerificadores("056.985.990-23"));
  


// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverterString(string) {
    var stringInvertida = "";
    // do ultimo indice até 0
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
      console.log(stringInvertida);
    }
    return stringInvertida;
  }
  
  console.log(inverterString("BATATA"));

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

const inverteArray = (array) => {
    // let array = [num1, num2, num3, num4];    
    array.reverse();
    console.log("A ordem invertida é: " + array);
    return array;
}
inverteArray([1,2,3,4]);