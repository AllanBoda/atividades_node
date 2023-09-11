let dados = require("./dados.js");

let total = 0.0, valDisc = 0.0, final = 0.0;

function data(){

    switch(dados.carne){
        case 1:
            switch(dados.pagamento){
                case 3:
                    if(dados.quantidade <= 5){
                        total = dados.quantidade * 24.90;
                        valDisc = total * 0.05;
                        final = total - valDisc;
                    }else{
                        total = dados.quantidade * 25.80;
                        valDisc = total * 0.05;
                        final = total - valDisc;
                    }
                break

                default:
                    if(dados.quantidade <= 5){
                        total = dados.quantidade * 24.90;
                        final = total;
                    }else{
                        total = dados.quantidade * 25.80;
                        final = total;
                    }
                break
            }
        break

        case 2:
            switch(dados.pagamento){
                case 3:
                    if(dados.quantidade <= 5){
                        total = dados.quantidade * 25.90;
                        valDisc = total * 0.05;
                        final = total - valDisc;
                    }else{
                        total = dados.quantidade * 26.80;
                        valDisc = total * 0.05;
                        final = total - valDisc;
                    }
                break

                default:
                    if(dados.quantidade <= 5){
                        total = dados.quantidade * 25.90;
                        final = total;
                    }else{
                        total = dados.quantidade * 26.80;
                        final = total;
                    }
                break
            }
        break

        case 3:
            switch(dados.pagamento){
                case 3:
                    if(dados.quantidade <= 5){
                        total = dados.quantidade * 36.90;
                        valDisc = total * 0.05;
                        final = total - valDisc;
                    }else{
                        total = dados.quantidade * 37.80;
                        valDisc = total * 0.05;
                        final = total - valDisc;
                    }
                break

                default:
                    if(dados.quantidade <= 5){
                        total = dados.quantidade * 36.90;
                        final = total;
                    }else{
                        total = dados.quantidade * 37.80;
                        final = total;
                    }
                break
            }
        break
    }

}

let totalM = data();


module.exports = {total,valDisc,final};