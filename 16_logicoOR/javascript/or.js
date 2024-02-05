var nome = "gabriel";
var idade = 32;

if (nome == "gabriel" || idade == 36) {
    console.log("Passou pois, o nome OU idade está correto");
}

//Podemos também associar && e ||

if ((nome == "bruno" || idade == 32) && 36 >32) {
    console.log("Correto");
} else {
    console.log("Infelizmente é falso")
}