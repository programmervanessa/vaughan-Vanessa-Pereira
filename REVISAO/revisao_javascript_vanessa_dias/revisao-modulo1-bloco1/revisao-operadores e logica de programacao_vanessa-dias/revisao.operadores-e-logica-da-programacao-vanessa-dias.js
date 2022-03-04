
// Exercício de Interpretação de Código

/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo. Indique todas as mensagens impressas no console, 
**SEM EXECUTAR o programa**.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)                 FALSO

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)                 FALSO

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)                 FALSO

console.log("d. ", typeof resultado)          Booleano



2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)
    
    RESPOSTA:
    Será necessário primeiramente transformar o valor digitado pelo usuário em um NUMBER

    let primeitoNumero = Number(prompt("Digite um número!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso
     no console seja, de fato, a soma dos dois números.
    
    RESPONDIDO NO EXECÍCIO ANTERIOR 


    - **Exercícios de escrita de código**

    1. Faça um programa que:
        
        a) Pergunte a idade do usuário
        
        b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
        
        c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
        
        d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/


const idadeUsuario = prompt("Digite sua idade");
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));

const idadesIguais = idadeUsuario > idadeAmigo
const diferencaIdade = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadesIguais);
console.log(diferencaIdade)

//2. Faça um programa que:
    
//a) Peça ao usuário que insira um número **par**

const numeroPar = Number(prompt("Insira um número par"));
    
//b) Imprima na console **o resto da divisão** desse número por 2.

const restoDivisao = numeroPar % 2
console.log(restoDivisao)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// Quando o número for par o resto será sempre 0

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// Se o usuário inserir um número ímpar o resto da divisão será sempre 1


// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
   
//a) A idade do usuário em meses

const idadeDoUsuario = Number(prompt("Digite sua idade"));

const idadeDoUsuarioEmMeses = idadeDoUsuario * 12;
console.log("Sua idade em meses é:", idadeDoUsuarioEmMeses);
    
//b) A idade do usuário em dias

const idadeDoUsuarioEmDias = idadeDoUsuario * 365;
console.log("Sua idade em dias é:", idadeDoUsuarioEmDias);

//c) A idade do usuário em horas

const idadeDoUsuarioEmHoras = idadeDoUsuario * 365 * 24;
console.log("Sua idade em horas é:", idadeDoUsuarioEmHoras);

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações 
//e imprima no console as seguintes mensagens seguidas pelo true ou false:

const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número número"));

//O primeiro numero é maior que segundo? true

 const maiorNumero = numero1 > numero2
 console.log("o primeiro número é maior que o segundo número?", maiorNumero);

//O primeiro numero é igual ao segundo? false

const numerosIguais = numero1 === numero2
console.log("o primeiro número é igual ao segundo número?", numerosIguais);

//O primeiro numero é divisível pelo segundo? true

const primeiroDivisivel = numero1 % numero2 === 0
console.log("o primeiro número é divisível pelo segundo número?",primeiroDivisivel);


// segundo numero é divisível pelo primeiro? true

const segundoDivisivel = numero2 % numero1 === 0
console.log("o primeiro número é divisível pelo segundo número?",segundoDivisivel);
//obs: O true ou false vai depender dos números inseridos e do resultado das operações.




