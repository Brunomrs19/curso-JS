console.log(this);

let pessoa = {
    nome: "bruno",
    idade: 22,
    falar: function() {
        console.log("Olá, joia?");
    },
    dizerNome: function() {
        console.log("Olá meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr." + this.nome;
    }
};

pessoa.dizerNome();

//Aqui temos a function atribuindo um ano de idade por ter invocado a função
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade);


//concatenamos uma string com uma function de saudação usando o this.nome
sdc = "Olá " + pessoa.saudacao()

console.log(sdc)

