// Exercícios de interpretação de código//

//1
/*
a) 10, 50
b) A função funciona normalmente, porém nada é impresso para visuaização do usuário.
*/

//2
/*
a) Essa função determina se um conjunto de caracteres pode ser encontrado dentro de outra
 string, retornando VERDADEIRO ou FALSO. Neste caso o caractere é a palavra "cenoura",
 sendo assim todas as saídas abaixo são verdadeira.
b)
i. Verdade
ii. Verdade
iii. Verdade
*/

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)