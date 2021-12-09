// Exercícios de interpretação de código //
/*
1. a) Executa o comando 3x por conta da quantidade das variáveis e imprime 
um novo array com os mesmos elementos por conta da funçao "map". O valor do 
elemento (item), o valor do indice do elemento(index) e o array no tamanho 
do original:

[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]    

2. a) Vai imprimir um novo array apenas com com o valor do elemento "item":

['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']


3. a) Neste caso será impresso um novo array com valores diferentes do 
valor "Chijo". Foi usado para essa operação o comando "filter":

[
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' }
]

*/

// Exercícios de escrita de código // 

/*
1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize 
as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

a) Crie um novo array que contenha apenas o nome dos doguinhos
b) Crie um novo array apenas com os cachorros salsicha
c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que 
são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar 
o/a [NOME]!"
*/



/*
2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

a) Crie um novo array que contenha apenas o nome de cada item
b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
aplicando 5% de desconto em todos eles
c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
*/
