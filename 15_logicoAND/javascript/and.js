var nome = "bruno";
var idade = 22;

if (nome === "bruno" && idade === 22) {
  console.log("Pode entrar brunão");
} else {
  console.log("Vixe você não é ele");
}

//ACIMA É O CASO BÁSICO DE OPERADOR LÓGICO

if (3 > 1 && 1 == 1 && 1) {
  console.log("passou, pois tudo é verdade");
}

//ACIMA É O EXEMPLO DE QUE PODEMOS UTILZIAR VARIOS &&

//caso 1

if (3 > 1 && 1 == 1 && true) {
  console.log("passou ");
}

//isolar operação pra validar primeiro os dois casos e depois ir pro terceiro
if ((3 > 1 && 1 == 1) && 1) {
  console.log("passou 2 ");
}

//isolar operação pra validar primeiro os dois casos e depois ir pro terceiro

//SLINT
