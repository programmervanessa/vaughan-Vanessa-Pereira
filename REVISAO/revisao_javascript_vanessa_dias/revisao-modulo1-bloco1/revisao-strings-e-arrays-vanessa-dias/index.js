/* Exercícios Strings e Arrays

 INTERPRETAÇÃO DE CÓDIGO

Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para 
 analisar e pensar sobre o resultado. 

1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


let array
console.log('a. ', array)    ========== a. undefined

array = null
console.log('b. ', array)    ========== b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  ======== c. 11

let i = 0
console.log('d. ', array[i])  ======= d. 3

array[i+1] = 19
console.log('e. ', array)  ===== e. undefined

const valor = array[i+6]
console.log**('f. ', valor)**  ===== f. 19


2. Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

SUBI NUM ONIBUS EM MIRROCOS 27
 */

// ESCRITA DE CÓDIGIO

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt(`Qual o seu nome?`);
const emailDoUsuario = prompt(`Qual o seu e-mail?`);

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo (a), ${nomeDoUsuario}.`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, 
//siga os passos:

const comidasPreferidas = [ "Lasanha", "Sushi", "Macarrão", "Temaki", "Taco" ];

//a) Imprima no console o array completo

console.log(comidasPreferidas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//console.log(`Essas são minha comidas preferidas: ${comidasPreferidas}`) ===== COMO EU FIZ NA TENTATIVA SEM VER EXERCICIO DE RESOLUÇÃO

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas [0]);
console.log(comidasPreferidas [1]);
console.log(comidasPreferidas [2]);
console.log(comidasPreferidas [3]);
console.log(comidasPreferidas [4]);

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. 
//Imprima no consolea nova lista

//const comidaPreferidaDoUsuario = prompt("Qual a sua comida preferidas?");

//comidasPreferidas.splice(1, 1);
//comidasPreferidas.push(1, '${comidaPreferidaDoUsuario}');

//console.log(comidasPreferidas) === COMO EU FIZ NA TENTATIVA ANTES DE OLHAR O EXERCÍCIO RESOLVIDO

const comidaPreferidaDoUsuario = prompt("Qual a sua comida preferidas?");
comidasPreferidas[1] = comidaPreferidaDoUsuario

console.log(comidasPreferidas)

// 3. Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas = [];

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const primeiraTarefaDoUsuario = prompt("Qual a primeira tarefa que você precisa realizar?");
const segundaTarefaDoUsuario = prompt("Qual a segunda tarefa que você precisa realizar?");
const terceiraTarefaDoUsuario = prompt("Qual a terceira tarefa que você precisa realizar?");

// listaDeTarefas[1] = primeiraTarefaDoUsuario;
// listaDeTarefas[2] = segundaTarefaDoUsuario;
// listaDeTarefas[3] = terceiraTarefaDoUsuario; ==== COMO EU FIZ SOZINHA SEM OLHAR EXERCICIO RESOLVIDO

listaDeTarefas.push(primeiraTarefaDoUsuario);
listaDeTarefas.push(segundaTarefaDoUsuario);
listaDeTarefas.push(terceiraTarefaDoUsuario);

//c) Imprima o array no console

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const indiceDaTarefaRealizada = Number(prompt("Digite o indice de uma tarefa já realizada de 0 para tarefa 1, 1 para tarefa 2 e 2 para tarefa 3"));

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice([`${indiceDaTarefaRealizada}`]); // COMO EU FIZ SEM VER A RESOLUÇÃO //NÃO ENTENDI A FORMA DE RESOLVER NO EXERCICIO RESOLVIDO


//f) Imprima o array no console

console.log(listaDeTarefas)