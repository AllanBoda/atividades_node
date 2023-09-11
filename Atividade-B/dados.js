let dados = require('readline-sync');

let i = 0;

let pergunta = [4];

for(i = 0;i < 5; i++){

    switch(i){
        case 0:
            pergunta[i] = dados.questionFloat("Nota do aluno na prova I? \n");
        break
        case 1:
            pergunta[i] = dados.questionFloat("Nota do aluno na prova II? \n");
        break
        case 2:
            pergunta[i] = dados.questionFloat("Nota do aluno na prova III? \n");
        break
        case 3:
            pergunta[i] = dados.questionFloat("Nota do aluno na prova IV? \n");
        break
        case 4:
            pergunta[i] = dados.questionFloat("Nota do aluno na prova V? \n");
        break
    }

}

module.exports = {pergunta};