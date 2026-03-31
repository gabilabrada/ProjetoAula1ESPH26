// Declarações e Variáveis

// var, let e const

//var x = 10;
//console.log(x);
//var x = 20
// console.log(x);

// var - pode redeclarar e acessar fora do escopo
// let - não pode redeclarar e não consegue acessar fora do escopo

// if(true){
    //var nome = "Fiap";
//}

// console.log(nome)

// const 
// const taxaJuros = 0.85;
// taxaJuros = 0.50;
// console.log(taxaJuros);

// var exemplo1 = "Olá dev var";
// console.log(exemplo1);

// let exemplo2 = "Olá dev let";
// console.log(exemplo2);

// const exemplo3 = "Olá dev const";
// console.log(typeof exemplo3);

// let exemplo4 = 20;
// console.log(exemplo4);

// let exemplo5 = true;
// console.log(exemplo5);

// let exemplo6 = {nome:"fiap"};
// console.log(typeof exemplo6);

// let exemplo7 = ['Java', 'Python', "C#"];
// console.log(exemplo7);
// console.log(typeof exemplo7);

// // variável indefinida
// let exemplo8;
// console.log(exemplo8);

// let exemplo9 = null;
// console.log(exemplo9);

// OPERADORES ARITMÉTICOS

// const valor1= 20;
// const valor2 = 10;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// // OPERADORES LÓGICOS

// console.log(valor1 > valor2);
// console.log(valor1 > 10 && valor2 != 20);
// console.log(valor2 > 5 || valor1 > 50);

// // OPERADORES DE COMPARAÇÃO
// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);
// console.log("O valor é", valor1);

// Exercício 1
const p = 100;
const v = 15

const precoFinal = p - v;
console.log("O preço final com desconto é: R$", precoFinal);

// Exercício 2
const usuarioLogado = 1;
const token = 100;
const transacaoAutorizada = usuarioLogado === 1 && token>=100;
console.log("Transação Autorizada com sucesso!", transacaoAutorizada);