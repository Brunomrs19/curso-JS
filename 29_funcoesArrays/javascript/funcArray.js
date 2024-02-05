//length

let arr = [
    1,
    2,
    3,
    4,
]

console.log(arr.length);

//push
//serve pra adicionar um último elemento

arr.push(5);
console.log(arr);


//pop
//serve pra remover o último elemento

arr.pop()
console.log(arr);


//unshift
//serve pra adicionar um elemento no inicio

arr.unshift(0);
console.log(arr);

//shift
//serve pra remover o primeiro elemento

arr.shift()
console.log(arr);


//length - 1
//serve pra acessar o último elemento

console.log(arr.length - 1);


//Array.isArray
//verifica se é mesmo um array

console.log(Array.isArray(5)); //false
console.log(Array.isArray(arr)); //true