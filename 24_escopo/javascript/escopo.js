var x = "bruno";
var y = "mario";

console.log(x, y);

function nome() {
    var l = 10;
    console.log(l);
}

nome()

//console.log(l);
//não tenho acesso a variável L no escopo local aqui no global;


//if não é um escopo local
if (true) {
    var b = 15;
}
console.log(b);


//var no escopo global da pra usar tranquilamente no escopo local
function teste() {
    var m = 26;
    console.log(x, m, "(eu sou o teste 1)");
}

teste()

function teste2() {
    var m = "mesma variável do teste 1 mas com valores diferentes";
    console.log(m);
}

teste2()

