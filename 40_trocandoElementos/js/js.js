//criando um elemento
let el = document.createElement("h3");

el.appendChild(document.createTextNode("Este é o texto h3"));

el.classList = "testando-classe";

console.log(el);

//selecionando elemento que quero trocar
let title = document.querySelector("#title");

title.textContent = "eu sou o h1";

//selecionando o pai

let pai = title.parentNode; //sabendo o pai utilizo o document.querySelector("body"); mas o parentNode já me indica quem é o pai

//trocando elementos

pai.replaceChild(el, title);