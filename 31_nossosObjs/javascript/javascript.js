let obj = {
    nome: "bruno",
    idade: 22,
    falar: function() {
        console.log("Oi meu nome é falar");
    },
    soma: function(a, b) {
        return a + b;  
    },
}

console.log(obj);
obj.falar();

let valor = obj.soma(25, 10);
console.log(valor);


//falar: function ---- soma: function =  eu estou criando um objeto com método e propriedade um chamado "soma" e outro "falar".