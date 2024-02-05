//splice
//usada para adicionar ou remover elementos de um array

let arr = [
    0,
    1,
    2,
    3,
    5,
]
console.log(arr)

//adicionar
arr.splice(2, 0, "splice");
console.log(arr);

//remover
arr.splice(2, 1)
console.log(arr);


//indexOf
//encontra o índice do elemento

console.log(arr.indexOf(5));

//join
//Transforma array em string

let arr2 = [
    "O",
    "rato",
    "roeu",
    "a",
    "roupa",
    "do",
    "rei",
    "de",
    "roma",
]

console.log(arr2.join(" "))

//reverse
//altera os indices dos elementos
 
let arr2Copy = [...arr2];

console.log(arr2Copy.reverse()); //criei uma copia pra não alterar o arr2
console.log(arr2); //o arr2 segue inalterado


