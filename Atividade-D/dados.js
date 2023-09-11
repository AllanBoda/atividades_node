let dados = require('readline-sync');

let carne = 0, quantidade = 0.0, pagamento = 0;

console.log("Informe o tipo da carne:\nFilé Duplo - 1\nAlcatra - 2\nPicanha - 3\n");
carne = dados.questionInt();
console.log("\nInforme a quantidade que em KG que deseja comprar:\n");
quantidade = dados.questionFloat();
console.log("Informe o tipo de pagamento:\nDinheiro - 1\nCartao de Credito/Debito - 2\nCartao Tabajara - 3\n");
pagamento = dados.questionInt();

module.exports = {carne, quantidade, pagamento};