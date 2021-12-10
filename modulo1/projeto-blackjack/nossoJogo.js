/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vidas ao jogo BlackJack!')

let iniciarJogo = confirm('Gostaria de iniciar o jogo?')

confirm === true(iniciarJogo)

const carta = comprarCarta()

if (iniciarJogo) {

let usuarioPrimeiraCarta = comprarCarta()
let usuarioSegundaCarta = comprarCarta()

let computadorPrimeiraCarta = comprarCarta()
let computadorSegundaCarta = comprarCarta()

let pontuacaoUsuario = usuarioPrimeiraCarta.valor + usuarioSegundaCarta.valor
let pontuacaoComputador = computadorPrimeiraCarta.valor + computadorSegundaCarta




} else {
   console.log('Fim do Jogo!')
}
   
