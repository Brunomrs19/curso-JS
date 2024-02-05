var teste = 5;

console.log(teste);

teste = "brunao";

console.log(teste);

//O problema da tipagem fraca é essa ai, mudamos a tipagem da variável "teste" e isso pode resultar problemas em manutenções de softwares futuras;
//Não tem problema em mudar o valor, mas a tipagem dá ruim;

nome = "bruno";

console.log(nome);

//Declarar variável desta maneira não é viável e não deve ser declarada assim porque ela pode sobrescrever variáveis no escopo global.
//Ela pode sobrescrever uma outra variável com o mesmo nome no nosso código. (declarar variável sem o VAR é uma declaração global)

var _idade = 16;
var $paixao = "ninguem";

console.log(_idade);
console.log($paixao);

// Variáveis não pode começar com numeros e nem contém caracteres especiais, com exceção de $ e _.

var ultimoNome = "silva";

console.log(ultimoNome); //camelCase

var testando;

testando = "string";

console.log(testando);
