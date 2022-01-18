// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (array[j] > array[j + 1]) {
          let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
      }
    }
    return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i]);
    }
  }
  return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;
  let maiorDivididoPeloMenor;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  maiorDivididoPeloMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDividoPeloMenor: maiorDividioPeloMenor,
    diferenca: diferenca
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const numerosPares = [];
  for (let number = 0; numerosPares.length < n; number++) {
    if (number % 2 === 0) {
      numerosPares.push(number);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (a !== b && b !== c) {
    return "A";
  } else if (a === b && b === c) {
    return "B";
  } else {
    return "C";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let menor = Infinity;
  let maior = -Infinity;
  let segundoMenor = Infinity;
  let segundoMaior = -Infinity;
  let novoArray = [];

  for (let i of array) {
    if (i < menor) {
      menor = i;
    }
    if (i > maior) {
      maior = i;
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i;
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i;
    }
    
  }
  novoArray.push(segundoMaior);
  novoArray.push(segundoMenor);

  return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let atoresConcat = "";
  for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i];
    } else {
      atoresConcat += filme.atores[i] + ", ";
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  function anonimizaPessoa(pessoa) {
    return {
      ...pessoa,
      nome: "ANÔNIMO"
    };
  }


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = [];
    for (const pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        pessoasAutorizadas.push(pessoa);
      }
    }
    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = [];
  for (const pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoAutorizadas.push(pessoa);
    }
  }
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  function calculaSaldo(contas) {
    contas.forEach((conta) => {
      let totalDeCompras = 0;
      conta.compras.forEach((valor) => {
        totalDeCompras += valor;
      });
      conta.saldoTotal -= totalDeCompras;
    });
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  for (let i = 0; i < consultaNome.length; i++) {
    for (let j = 0; j < consultaNome.length - i - 1; j++) {
      if (consultaNome[j].nome > consultaNome[j + 1].nome) {
        const temp = consultaNome[j];
        consultaNome[j] = consultaNome[j + 1];
        consultaNome[j + 1] = temp;
      }
    }
}

return consultaNome;
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}