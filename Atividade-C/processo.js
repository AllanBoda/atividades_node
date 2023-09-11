let dados = require("./dados.js");

function data(){
let situ = "";

    if(dados.ano % 100 != 0 && dados.ano % 4 == 0){
        situ = "E um ano bissexto";
    }else if(dados.ano % 100 != 0 && dados.ano % 400 == 0){
        situ = "E um ano bissexto";
    }else{
        situ = "Nao e um ano bissexto"
    }

return situ;
}

let situ = data();

module.exports = {situ};