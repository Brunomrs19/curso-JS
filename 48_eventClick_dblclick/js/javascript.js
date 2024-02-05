//click

//o click funciona pra tudo não é só pra button etc...
let title = document.querySelector("#title");

console.log(title);

title.addEventListener("click", function()
 {
  console.log("Aperta o titulo ae");
})



//usando no padrão

let botao = document.querySelector("#btn");

botao.addEventListener("click", function() 
{
  console.log("apertou o botão");
  console.log(this);

  this.style.backgroundColor = "red";
});

//o this dentro do evento se refere ao próprio elemento

//doubleclick

let paragrafo = document.querySelector("#paragrafo");

paragrafo.addEventListener("dblclick", function () 
{
  console.log("Double click");
  this.style.display = "none";
});