var idade = 16;
var idadeMinima = 18;

if (idade >= 18) {
  console.log("Você pode tirar carteira");
}

if (idade < idadeMinima) {
  console.log("Você não pode tirar carteira");
}

//em caso de falso ele só pula e le o codigo

if (true) {
  console.log("Antes do false...");
}

if (false) {
  console.log("Isso não existe");
}

if (true) {
  console.log("Depois do false, podemos ver que não funciona");
}
