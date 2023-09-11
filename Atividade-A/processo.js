const dados = require("./entrada_dados");

let i = 0, j = 0, k = 0;

let idade = dados.Arr_idade;
let cidade = dados.Arr_cidade;
let opiniao = dados.Arr_opiniao;

let contIdade = 0, contLei = 0, contPorc = 0, MedIdade = 0;
let saveCidade = [k], saveNumCidade = [k], procCidade = [saveCidade.length];

for(i=0;i<16;i++){

    if(opiniao[i] == 3){
        MedIdade += idade[i];
        contIdade++;
    }
    
    if(opiniao[i] == 1){
        contLei++
    }

    if(opiniao[i] == 2){
        contPorc++
    }   

    if(saveCidade[k] == null){
        saveCidade[k] = cidade[i];
        saveNumCidade[k] = 1;
        k++;

    }else if(function(){
        let confere = false;

        for(j = 0; confere = false || j < saveCidade.length; j++){
            if(cidade[i]==saveCidade[j]){
                confere = true;
            }
        }
        return confere;
    }){
        for(j = 0; j < saveCidade.length; j++){
            if(cidade[i]==saveCidade[j]){
                saveNumCidade[j] += 1;
            }
        }

    }else{
        k++;
        saveCidade[saveCidade.length] = cidade[i];
        saveNumCidade[saveCidade.length] = 1;
    }

}

function Proc1(){
    return MedIdade/contIdade;

}

function Proc2(){
    return (contPorc/16)*100;

}

void function(){
    for(i = 0; i < saveCidade.length; i++){
        procCidade[i] = (saveNumCidade[i]/16)*100;

    }
    return procCidade;
}

let processo1 = Proc1();
let processo2 = Proc2();

module.exports = {processo1,contLei,processo2,procCidade,saveCidade};