// Exercícios de interpretação de código //
/*
1. a) O valor impresso no console será "10".

2. a) Serão impressos os valores maiores de 18, sendo assim 19, 21, 23, 25, 27 e 30.
   b) Sim o for of seria o suficiente. Seria necessário remover a condição "if" e o
      codigo irá percorrer por todos os números que estão dentro do array.

3. a) *
      **
      ***
      ****       

*/


// Exercícios de escrita de código // 

/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
   um por um, e guarde esses nomes em um array.
c) Por fim, imprima o array com os nomes dos bichinhos no console.
*/

const quantosBichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))

if(quantosBichinhosDeEstimacao ===0){
  console.log("Que pena! Você não sabe o que está perdendo, adote um bichinho!")
console.log(quantosBichinhosDeEstimacao)
}

/* 
2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente
   de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações
   pedidas:
a) Escreva um programa que **imprime** cada um dos valores do array original.
b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e
   imprima esse novo array.
d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex 
   i é: numero". Depois, imprima este novo array.
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
*/

