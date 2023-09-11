let process = require("./processo.js");
let dados = require("./dados.js");

function car(){
    let carne = "";
    switch(dados.carne){
        case 1:
        carne = "Filé Duplo";

        break
        case 2:
        carne = "Alcatra";

        break
        case 3:
        carne = "Picanha";
    
        break
    }
    return carne;
}

function pag(){
    let pag = "";
    switch(dados.pagamento){
        case 1:
        pag = "Dinheiro";

        break
        case 2:
        pag = "Cartao de Credito/Debito";

        break
        case 3:
        pag = "Cartao Tabajara";
    
        break
    }
    return pag;
}

function mostra(){
    console.log("\nNota Fiscal: \n");
    console.log("Tipo de Carne: ", car());
    console.log("Quantidade de carne: ",dados.quantidade);
    console.log("Preço total: ",process.total);
    console.log("Tipo de pagamento: ", pag());
    console.log("Valor do desconto: ",process.valDisc);
    console.log("Valor final: ",process.final);

}

mostre = mostra();

module.exports = {mostre};