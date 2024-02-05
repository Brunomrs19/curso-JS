var x = 2;

var y = 3;

console.log(x = x + y);

//X é igual a 5 por que o Y(3) foi atribuido ao X(que antes valia 2);
//então pra atribuir um valor (Y) a X utilizamos os operadores de atribuição

console.log(x += y);

console.log(x -= y);

console.log(x *= y);

console.log(x /= y);

//só pra separar
console.log("----------------")
//só pra separar

//mais usado em loops

var c = 99;
c++;

console.log(c);

//PRÉ-INCREMENTO

var a = 10;
var b = ++a;

console.log(a);
console.log(b);

//PÓS INCREMENTO

var m = 26;
var r = m++;

console.log(m);
console.log(r);

//Só pra separar
console.log("---------------");
//Só pra separar

while(x < 100) {
    console.log(x);
    x *= 2;
}

console.log(x);

while ( x > 0) {
    console.log(x);
    x -= 20;
}