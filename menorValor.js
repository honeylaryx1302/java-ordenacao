const livros = require('./listarLivros')

function menorValor(arrProdutos,posicaoInicial ){

let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial;atual < arrProdutos.length; atual++){
        if (arrprodutos[atual].preco < arrprodutos[maisBarato].preco){
         maisBarato = atual;
    }
  };
  return maisBarato;
}

module.exports = menorValor 