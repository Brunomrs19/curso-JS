//selecionando por ID
let titulo = document.querySelector("#title");
console.log(titulo);

//selecionando por class
let subtitulo = document.querySelector(".subtitle");
console.log(subtitulo);

//innerHTML 

titulo.innerHTML = "Utilizando o innerHTML.";

//textContent -> mais comum, recomendado e utilizado

subtitulo.textContent = "utilizando a melhor forma (textContent)";