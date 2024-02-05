//keydown

document.addEventListener("keydown", function(event) 
{
  if (event.key === "Enter") {
    console.log("você apertou enter");
  }
})

//keyup
document.addEventListener("keyup", function(e) 
{
  if (e.key === "Enter") {
    console.log("soltou a tecla");
  };
});