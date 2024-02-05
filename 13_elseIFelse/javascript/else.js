var nome = "bruno";

if (nome == "bruno") {
  console.log("olá bruno");
} else if (nome == "Mario") {
  console.log("Olá Mario");
} else {
  console.log("Seu invasor, retire-se.");
}

//Não é necessário colocar o else, como veremos abaixo!

var idade = 25;

if (idade >= 18) {
  console.log("Você pode entrar na festa");
} else if (idade < 18) {
  console.log("Infelizmente você ainda não pode entrar na festa.");
}

//assim como também não precisamos de else tbm n precisamos de else if

var altura = 1.78;

if (altura >= 1.5) {
  console.log("você está apto");
} else {
  console.log("você está inapto");
}
