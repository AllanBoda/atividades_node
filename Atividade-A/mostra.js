const resultado = require("./processo")

i = 0;

function mostra() {

    console.log("A media das idades dos leitores que responderam etimo e: ", resultado.processo1);
    console.log("A quantidade de leitores que responderam regula e: ", resultado.contLei);
    console.log("A porcentagem de leitores que responderam bom entre todos os leitores e: ", resultado.processo2,"\n");
    for(i=0; i < 16; i++){
    console.log("O leitor ", i+1," porcentagem de leitores para cidade ", resultado.saveCidade[i]," e ", resultado.procCidade[i],"\n");
    }
}

module.exports = {mostra};