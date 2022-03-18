/*
- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **
    para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo

    function minhaFuncao(variavel) {
        return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

    a) O que vai ser impresso no console?

    SERÁ IMPRESSO NO CONSOLE OS NÚMEROS 10 (2*5) E 50 (10*5)

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
    O que apareceria no console?

    APARECERIA UNDEFINED

    2. Leia o código abaixo

    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    a. Explique o que essa função faz e qual é sua utilidade

    A FUNÇÃO PEDE PARA O SUSÁRIO INSERIR UM TEXTO E DEPOIS TRANSFORMA O TEXTO TODO EM LETRAS MINÚSCULAS E VERIFICA SE A PALAVRA 
    "CENOURA" ESTÁ NA LISTA RETORNANDO UM BOOLEANO.

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

     i.   Eu gosto de cenoura

        SAÍDA:  eu gosto de cenoura 
        true

     ii.  CENOURA é bom pra vista

        SAÍDA: cenoura é bom para a vista
        true

     iii. Cenouras crescem na terra
     
         SAÍDA: cenouras crescem na terra
         false
     
     */

     
   
//** EXERCÍCIOS DE ESCRITA DE CÓDIGO **


    /*1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."    
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, 
    apenas imprime essa mensagem.
    */

    let informacoesSobreMim = () => {
        let nome = "Vanessa"
        let idade = 34
        let cidade = "São José dos Campos"
        let estudanteOuNao = "estudante"
        
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudanteOuNao}.`)
    }

    informacoesSobreMim()

    /*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), 
    a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
        
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    */

     let informacoesDeUmaPessoa = ( nome, idade, cidade, profissão) => {
      return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`    
     }
     
     let frase = informacoesDeUmaPessoa("Vanessa", 34, "São José dos Campos", "contadora")

     console.log(informacoesDeUmaPessoa)
     console.log(informacoesDeUmaPessoa("Vanessa", 34, "São José dos Campos", "contadora"))

    /* 
    O segundo console.lo eu coloquei somente depois de ver a resolução pra ver funcionando. Porém pra ser sincera não entendi.

    informacoesDeUmaPessoa()  COMO EU FIZ ANTES DE VER RESOLUÇÃO DOS EXERCÍCIOS
    */
    
    /* 2. Escreva as funções explicadas abaixo:
    */

    /*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o 
    resultado. Invoque a função e imprima no console o resultado.
    */
    
     const doisNumeros = (numero1, numero2)  =>  {

        return numero1 + numero2
     }

     const somaNumeros = doisNumeros(10, 20)
     console.log(somaNumeros)
     doisNumeros()


    /* b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    */

     const numerosMaiorOuIgual = ( numero3, numero4) => {
       return numero3 >= numero4   
     }

     const booleano = numerosMaiorOuIgual(10, 12)
     console.log(booleano)
     numerosMaiorOuIgual()

    /*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    */

    const parOuImpar = (numero5) => {
        return numero5 % 2 === 0
    }
    const resposta = parOuImpar(15)
    console.log(resposta)
    parOuImpar()

    /* d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão 
    dela em letras maiúsculas.
    */

    const formatarMensagem = (mensagem) => {

        mensagem = mensagem.toLowerCase()
        mensagem = mensagem.length()
        return mensagem
    }
    formatarMensagem()
    
    const formatar = formatarMensagem("Olá, tudo bem?")
    console.log(formatar(formatarMensagem))
    
    // IZA E FLAVIO, essa questão D não ficou clara pra mim, tentei entender o exercício resolvido mas tive algumas dúvidas, 
    // então resolvi deixar assim a minha resolução para que vocês possam acompanhar minha linha de raciocínio e depois podemos
    // discutir sobre minhas indagações

    /* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário 
    inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no 
    console o resultado das operações:
    
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
    */

    const soma = (numero6, numero7) => {

        return numero6 + numero7
    }
    soma()

    const subtracao = (numero6, numero7) => {

        return numero6 - numero7
    }
    subtracao()

    const multiplicacao = (numero6, numero7) => {

        return numero6 * numero7
    }
    multiplicacao()

    const divisao = (numero6, numero7) => {

        return numero6 / numero7
    }
    divisao()

    const primeiroNumero = Number(prompt("Digite o primeiro número"))
    const segundoNumero = Number(prompt("Digite o segundo número"))
  
    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    console.log(divisao)

    // Apesar das minhas respostas não estarem muito diferentes do exercício resolvido (raciocínio) o meu código não funcionou.
    // Acreito que precisarei de maior suporte com o exercício de funções para proseguir com segurança para a lista de exercícios JS 1