let dados = require('readline-sync');

let Arr_idade = [15];
let Arr_cidade = [15];
let Arr_opiniao = [15];
let i = 0;

for(i==0;i<16;i++){
    console.log("Opniao do leitor "+(i+1));
    Arr_idade[i] = dados.questionInt("Qual sua idade? \n");
    Arr_cidade[i] = dados.question("Qual sua cidade? \n");
    Arr_opiniao[i] = dados.questionInt("Qual sua opiniao sobre o livro? \n15 - Otimo\n2 - Bom\n1 - regular\n\n");

}

module.exports = {Arr_idade, Arr_cidade, Arr_opiniao};