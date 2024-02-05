//Hoisting - içamento (significa que todas as variáveis e funções são levadas ao topo do código antes de ser interpretado)
//Por esse motivo o console.log na sexta linha sabe que a variável "sobrenome" (tecnicamente ainda não declarada por estar na linha abaixo) existe
//Apenas faz uma pré inicialização, ele apenas declara a variável e não inicializa ela, dai acaba não atribuindo valor;
//o Hoisting está presente em todos os softwares do javascript

console.log(sobrenome);

var nome = null;
var sobrenome = "mario";

console.log(nome);
console.log(sobrenome);

nome = "bruno";

console.log(nome);
