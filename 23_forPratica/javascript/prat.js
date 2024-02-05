var lista = [
    "laranja",
    "maça",
    "banana",
    "uva",
]

var listaUl = document.createElement("ul");
var body = document.getElementsByTagName("body");

//console.log(body[0]);

body[0].appendChild(listaUl);

var listaBody = document.getElementsByTagName("ul");

console.log(listaBody[0])

for(i =0; i < lista.length; i++) {

    var liFor = document.createElement("li");
    var textLi = document.createTextNode(lista[i]);

    liFor.appendChild(textLi);

    console.log(liFor);

    listaBody[0].appendChild(liFor);
}

