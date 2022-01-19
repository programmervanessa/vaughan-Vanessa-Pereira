// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')
  var resultado = altura * largura;
  console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade () {
  const anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Digite o ano do nascimento')
  var resultado = anoAtual - anoDeNascimento;  
  console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome');
  const idade = prompt('Digite sua idade');
  const email = prompt('Digite seu email');
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Qual a sua cor favorita?');
  const cor2 = prompt('Qual a sua segunda cor favorita?');
  const cor3 = prompt('Qual a sua terceira cor favorita?');
  const arrayDeCores = [cor1, cor2, cor3];
  
  console.log(arrayDeCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1 ]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  var primeiroElemento = retornaPrimeiroElemento(array);
  var ultimoElemento = retornaUltimoElemento(array);
  array[0]=ultimoElemento
  array[array.length - 1 ]=primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase();

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt('Qual o ano atual?');
  const anoDeNascimento = prompt('Qual o ano do seu nascimento?');
  const anoDeEmissaoRG = prompt('Qual o ano de emissão do seu RG?');
  const idade = anoAtual - anoDeNascimento
  const idadeRG = anoAtual - anoDeEmissaoRG

  if (idade <= 20){
    if (idadeRG >= 5){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  if (idade > 20 && idade <= 50){
    if (idadeRG >= 10){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  if (idade > 50){
    if (idadeRG >= 15){
      console.log(true)
    } else {
      console.log(false)
    }

  }


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0);

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt('Tem mais de 18?');
  const ensinoMedioCompleto = prompt('Tem ensino médio completo?');
  const disponibilidadeDeHorarios = prompt('Tem disponibilidade de horários?');

  const resp1 = (maiorDeIdade.toLocaleUpperCase() === "SIM") ? true : false
  const resp2 = (ensinoMedioCompleto.toLocaleUpperCase() === "SIM") ? true : false
  const resp3 = (disponibilidadeDeHorarios.toLocaleUpperCase() === "SIM") ? true : false

  console.log(resp1 && resp2 && resp3)
}