// Exercícios de interpretação de código //
/*
 1.a) O código realiza o teste de números divisiveis por 2. 
   b) Se o número que o usuário digitar for par imprime "Passou no teste". 
   c) Se o número digitado pelo usuário for ímpar imprime "Não passou no teste".

 2. a) O código serve para retornar o valor da fruta digitada pelo usuário.
    b) O preço da fruta mação é R$ 2.25  
    c) O preço da fruta Pêra é R$ 5.5  5

 3. a) A primeira linha está pedindo para o usuário digitar um número.
    b) Digitando 10 a mensagem seria: Esse número passou no teste".
       Digitando -10 não havaria nenhuma mensagem
    c) Não haverá retorno no console, pois a função nao foi chamada.   

*/  

// Exercícios de escrita de código //

/* 
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela
 pode dirigir (apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir.
*/

const respostaDoUsuario = prompt("Qual a sua idade?")
const idadeDoUsuario = Number(respostaDoUsuario)

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

/* 
2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou
 V (Vespertino) ou N (Noturno).
 Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
 */

 const turnoDoAluno = prompt("Digite M se você estuda de manhã, digite V se você estuda de tarde ou N se estuda de noite").toUpperCase()
 const turno = (turnoDoAluno)

 if (turno === "M") {
    console.log("Bom dia!")

 } else if (turno == "V") {
     console.log("Boa tarde!")
     
 } else if (turno === "N") {
     console.log("Boa noite!")
 }


 /*
 3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
 */
const turnoDoAluno = prompt("Digite M se você estuda de manhã, digite V se você estuda de tarde e N você estuda de noite").toUpperCase()
 
switch (turnoDoAluno) {
     case "M":
         console.log("Bom dia!")         
         break
     case "V":
         console.log("Boa tarde!")
         break
     case "N":
         console.log("Boa noite!")
         break      
      default:
         break;
 }

 /*
 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com 
 você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao 
 qual o gênero de filme que vão assistir e outra  pergunta  sobre o preço do ingresso, então verifique se seu
  amigo ou amiga vai topar assistir o filme.  Caso positivo, imprima no console a mensagem: "Bom filme!", 
  caso contrário, imprima "Escolha outro filme :("
 */


const filme = prompt("Qual o genero do filme") 
const preco = Number(prompt("Qual o valor do ingresso?"))

if (filme === 'Fantasia' && preco <= 15) {
console.log("Bom filme!")
}else {
    console.log("Escolha outro filme : (")
}
  