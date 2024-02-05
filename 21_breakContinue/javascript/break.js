for (var x = 0; x < 10; x++) {
    if (x == 5) {
        continue;
    }
    console.log(x);
}

console.log("---------------")

//continue com while
//sintaxe abaixo pra não iniciar a impressão com 
let k = 0;

while (k < 10) {
    if ( k === 5) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}