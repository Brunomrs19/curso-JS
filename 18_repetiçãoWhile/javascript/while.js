var x = 0;

while (x <=3) {
    console.log("testando " + x);

    // incrementador x++ é igual a x = x +1
    x++;
}

//novamente
var y = 0;

while (y <3) {
    console.log("O valor é " + y);
    y++;
}

//outra caso com array

var arr = [
    "bernabeu",
    "hiago",
    "campnou",
    "sansiro",
]
var k = 0;

//INDO ATÉ O ÍNIDICE (3) SANSIRO!
while (k < 4) {
   console.log(arr[k])
   k++;
}

/*
var arr = [...];: Declara e inicializa um array chamado arr com quatro elementos de texto.
var k = 0;: Inicializa uma variável k com o valor 0. Essa variável será usada como um índice para acessar os elementos do array.
while (k < 4) {: Inicia um loop while. O loop continuará enquanto a condição (k < 4) for verdadeira.
console.log(arr[k]);: Imprime no console o elemento do array na posição k.
k++;: Incrementa o valor de k em 1, movendo o índice para o próximo elemento do array.
*/

var nome = "bruno";
var l = 0;

while (l < 5) {
    console.log(nome[l])
    if (l === 2) 
    l++;
}