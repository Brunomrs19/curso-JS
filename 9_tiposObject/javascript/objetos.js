var obj = {
  nome: "bruno",
  idade: 23,
  casado: false,
  profissão: "programador",
};

//conferindo o tipo de dado e rodando o obj
console.log(obj);
console.log(typeof obj);

//chamando apenas uma key por vez
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.casado);
console.log(obj.profissão);

//concatenando
console.log("Meu nome é " + obj.nome);

//Criar ou alterar uma key do obj
obj.nome = "Joao";
console.log(obj.nome);

obj.solteiro = true;
console.log(obj);
