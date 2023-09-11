let dados = require("./dados.js");

function data(){
let situ = "";

if(dados.pergunta[0] >= 70 && dados.pergunta[1] >= 70 && dados.pergunta[2] >= 70 && dados.pergunta[3] >= 70 && dados.pergunta[4] >= 70){
    situ = "Aprovado, classificado em A";

}else if(dados.pergunta[0] >= 70 && dados.pergunta[1] >= 70 && dados.pergunta[2] >= 70 && dados.pergunta[3] >= 70){
    situ = "Aprovado, classificado em C";

}else if(dados.pergunta[0] >= 70 && dados.pergunta[1] >= 70 && dados.pergunta[3] >= 70){
    situ = "Aprovado, classificado em B";

}else{
    situ = "Reprovado";

}

return situ;
}

let situ = data();

module.exports = {situ};