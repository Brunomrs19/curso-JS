//setTimeout

console.log("coloquei antes do setTimeout");

setTimeout(function () {
    console.log("Esse é meu timeout de 1 segundos");
}, 1000); 

console.log("coloquei depois do setTimeout");

//setInterval

setInterval (function() {
    console.log("Apareça setInterval")
}, 1500);