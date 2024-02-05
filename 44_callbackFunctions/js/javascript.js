function exibir(num) {
    console.log(`O valor da da operação é: ${num}`)
};

function soma(x, y, callback) {
    let op = x + y;
    callback(op);
};

function produto(x, y, cb) {
    let op = x * y;
    cb(op);
};

soma(2, 8, exibir);
produto(2, 8, exibir);
