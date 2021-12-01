// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS


// 1 
/*
a) V && F = FALSO
b) V && F && V = FALSO
c) V && V = VERDADEIRO
d) Boolean
*/


// 2
/* A operação não foi considereada uma soma, mas sim uma concatenação por conta da função prompt() que é 
sempre uma string.
Para ser considerado uma soma a variavel precisa ser identificada como "tipo número"
EXEMPLO: const soma = Number(primeiroNumero) + Number(segundoNumero)
 */


// 3
/* 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/


// EXECERCÍCIOS DE ESCRITA DE CÓDIGOS

// 1
const suaIdade = Number(prompt("Qual idade você tem?"));
const seuAmigo = Number(prompt("Quantos anos tem o seu (sua) melhor amigo (a)?"));

const maisVelho = suaIdade >= seuAmigo

console.log("Sua idade é maior que a do seu (sua) amigo (a)?", maisVelho)


// 2
const par = Number(prompt("Digite um número par"));
const divisao = par % 2;

console.log("Resto da divisão:", divisao)

//Se o usuário inserir um número ímpar haverá resto da divisão, pois número ímpar não é divisível por 2


// 3
const qualIdade = Number(prompt("Quantos anos você tem?"));
const anos = qualIdade;
const meses = anos * 12;
const dias = meses * 30;
const horas = dias * 24;

console.log("Você tem:", anos, "anos");
console.log("Você tem:", meses, "meses");
console.log("Você tem:", dias, "dias");
console.log("Você tem:", horas, "horas");


// 4 
const numero1 = Number(prompt("Digite um número qualquer"));
const numero2 = Number(prompt("Digite outro número qualquer"));

const pergunta1 = numero1 > numero2;
const pergunta2 = numero1 === numero2;
const pergunta3 = numero1 / numero2;
const pergunta4 = numero2 / numero1;

console.log("O primeiro número é maior que o segundo?", pergunta1);
console.log("O primeiro número é igual ao segundo?", pergunta2);
console.log("O primeiro número é divisível pelo segundo?", pergunta3);
console.log("O segundo número é divisível pelo primeiro número?", pergunta4);