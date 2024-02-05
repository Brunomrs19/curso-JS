var nome = "bruno";

if (nome == "bruno") {
  console.log("Vamos começar a carteira");
}

if (nome != "pedro") {
  console.log(
    "Como só tem bruno e pedro, e você é diferente de lucas, você só pode ser um..."
  );
}

var idade = 22;

if (idade >= 18) {
  console.log("Pode tirar a carteira");
}

if (idade <= 17) {
  console.log("Ainda não pode tirar a carteira");
}

//note a diferença de = e == (um atribui valor e o outro é operador de comparação)
var sobrenome = "mario";

if (sobrenome == "mario") {
  console.log("Nem precisa tirar você é o bruno mario");
}
