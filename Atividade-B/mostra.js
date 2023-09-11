let process = require("./processo.js");
let dados = require("./dados.js");

i = 0;

function mostra(){
    console.log("Baseado nas sua notas:\n");
    for(i = 0; i < 5; i++){
        switch(i){
            case 0:
                console.log("I:",dados.pergunta[i],"\n");
            break
            case 1:
                console.log("II:",dados.pergunta[i],"\n");
            break
            case 2:
                console.log("III:",dados.pergunta[i],"\n");
            break
            case 3:
                console.log("IV:",dados.pergunta[i],"\n");
            break
            case 4:
                console.log("V:",dados.pergunta[i],"\n");
            break
        }
    }
    console.log("Voce foi classificado como: ",process.situ);
}

mostre = mostra();

module.exports = {mostre};