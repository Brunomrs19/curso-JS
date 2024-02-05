//clearTimeout na prática em caso hipotético

let x = 0

let temporizador = setTimeout (function() {
    console.log(`O valor de X é 0`);
}, 1500);

x = 5

if (x > 0) {
    clearTimeout(temporizador);
    console.log(`O valor de X é maior que 0`);
};

//clearInterval na prática

let intervalo = setInterval(function(){
    console.log("Meu intervalo é este")
}, 500);


setTimeout (function() {
    console.log("Não precisamos mais do intervalo.");
    clearInterval(intervalo);
}, 3000)



