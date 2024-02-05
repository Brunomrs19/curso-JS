let itensTag = document.getElementsByTagName("li");

console.log(itensTag);

//querySelectorAll
let itensQuery = document.querySelectorAll("#lista1 li")

console.log(itensQuery);

let itensQuery2 = document.querySelectorAll("#lista2 .item");

console.log(itensQuery2);

//querySelector (uso unitário)

//uso "errado"
let primeiroUl = document.querySelector("ul");

console.log(primeiroUl);

//uso correto
let firstLista = document.querySelector("#lista1");

console.log(firstLista);

//utilizando querySelector

let span = document.querySelector("#paragrafo span");

console.log(span);