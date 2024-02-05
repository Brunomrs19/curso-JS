//obj é {}
var array1 = [
  1,
  2,
  3,
  4,
  "matheus",
  {
    nome: "bruno",
    idade: 22,
  },
];

console.log(array1);

//alterar a o value da key nome dentro do objeto que está inserido no array
array1[5].nome = "mathias";

//por no console o valor do primeiro indice
console.log(array1[0]);

console.log(typeof array1);
