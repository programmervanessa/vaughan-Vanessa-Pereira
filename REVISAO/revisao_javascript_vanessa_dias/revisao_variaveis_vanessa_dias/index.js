
//saídas

const a = 7
const b = 7
const soma = a + b

console.log(" a soma é:", soma)

// entradas do usuário

const aa = Number(prompt("Insira o primeiro número da soma"))
const bb = Number(prompt("Insira o segundo item da soma"))
const somar = aa + bb

console.log("o resultado da soma é:", somar)

//variáveis - exercícios


//1. Construa um programa, seguindo os seguintes passos:

//a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nomme;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let iddade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

console.log(typeof nomme);
console.log(typeof iddade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// Porque não foi definido nenhum valor

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

 nomme = prompt("Qual o seu nome?");
 iddade = Number(prompt("Qual a sua idade?"));
 console.log(nomme);
 console.log(iddade);

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nomme);
console.log(typeof iddade);

// a variável nomme recebeu o tipo number porque foi definido como um número pelo código

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.

console.log("Olá", nomme, "você tem", iddade, "anos");

// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
//     a) Crie três novas variáveis, contendo as respostas

let perguntaCorDoCabelo = prompt("A cor do seu cabelo é verde?");
let perguntaNacionalidade = prompt("Você nasceu no Brasil?");
let perguntaFalaPortugues = prompt("Você fala Português");
    
//     b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

console.log(" A cor do seu cabelo é verde?", perguntaCorDoCabelo);
console.log(" Você nasceu no Brasil?", perguntaNacionalidade);
console.log("Você fala Português?", perguntaFalaPortugues);

// Suponha que temos duas variáveis a e b, cada uma com um valor inicial

// let a = 10
// let b = 25

// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let d = 10
let e = 25


// // Aqui faremos uma lógica para trocar os valores

let f = d  //e=10
let d = d // c= 25
let e = f // e = 10
console.log("d = ", d);
console.log("e =", e)

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10

// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 


// DESAFIOS
// Essa seção é OPCIONAL e só deve ser feita se você terminou todos os exercícios propostos anteriormente!

// 1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
    
//     ```
//     1. O primeiro número somado ao segundo número resulta em: x.
//     2. O primeiro número multiplicado pelo segundo número resulta em: y.
//     ```
    
//     - 💡  Dica
        
//         <aside>
//         ☝ Se os resultados das operações não estiverem corretos, reflita sobre o **tipo dos valores recebidos pelo prompt.**
        
//         </aside>
// */
