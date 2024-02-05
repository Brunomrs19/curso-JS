const x = 25;
console.log(x);

//x = 10; 
//console.log(x); ERRO POIS, CONST NÃO PODE SER REATRIBUIDO.

let y = 100

if (10 > 0) {
    let y = 1500;
    console.log("let y dentro do IF " + y)
}

console.log("O valor do let fora do if não alterado " + y)

//console.log(b);  A variável b é acessada mas dada como undefined (hoisting)
//var b = 25;


//console.log(c);  Com let não pode acessar a variável antes de ser declarada (hoisting)
//let c = "bruno";


//console.log(d);  Com const não pode acessar a variável antes de ser declarada (hoisting)
//const d = "mario"


if (10 < 50) {
    const x = 96;

    console.log(x);
}
