let el = document.createElement("div"); //criei uma div

el.classList = "div-criada"; //atribui class a variável el

let container = document.querySelector("#container"); //acessei a div id=container

container.appendChild(el); //adicionei a div dentro da container

console.log(container);

//insert-Before

let el2 = document.createElement("div");

el2.classList = "div-before";

let el3 = document.querySelector("#container .div-criada"); //somente pra imprimir e mostrar a class

console.log(el3); //

container.insertBefore(el2, el);

