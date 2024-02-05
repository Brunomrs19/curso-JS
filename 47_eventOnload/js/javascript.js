window.onload = function ()
  {
    console.log("Esse será o último lido porque tem que esperar a página HTML carregar");
    
    let titleFuncional = document.querySelector('#title');
    console.log(titleFuncional);   

}

let title = document.getElementById('title');
console.log(title);


console.log("JS será lido primeiro");