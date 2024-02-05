//criei a tag p

let novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

//criei um nó de texto pro paragrafo
let frase = document.createTextNode("Oi eu sou a frase adicionada");

//adicionei o nó de texto no paragrafo
novoParagrafo.appendChild(frase);

//selecionei o body 
let body = document.querySelector("body");

console.log(body);

//adicionei o paragrafo no body
body.appendChild(novoParagrafo);

//quero adicionar um span na div

let caixa = document.getElementById("container");

console.log(caixa);

let el = document.createElement("span");

el.appendChild(document.createTextNode("texto span"));

caixa.appendChild(el);


