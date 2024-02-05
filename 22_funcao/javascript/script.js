function primeiraFuncao() {
    console.log("Hello world das funções")
}

primeiraFuncao()

function dizerNome(nome) {
    console.log("Meu nome é: " + nome)
}

dizerNome("Brunao");
dizerNome("Tiago");


function segundoNome(sobrenome) {
    console.log("Meu segundo nome é: " + sobrenome);
}

var titulo = "Mario";

segundoNome(titulo)


function produto(a, b) {
    var produto = a * b;
    return produto;
}

var produtoUm = produto(2, 6);
console.log(produtoUm);

var produtoDois = produto(10, 5);
console.log(produtoDois);

console.log(produto(10, 10))