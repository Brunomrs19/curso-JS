//mouseover

let title = document.querySelector("#title");

title.addEventListener("mouseover", function() 
{
  this.style.cssText = "color: green";
})

//mouseout

title.addEventListener("mouseout", function()
{
  this.style.cssText = "color: black";
})


//mexendo com outro elemento

let paragrafo2 = document.querySelector("#paragrafo2");

let subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function () 
{
  paragrafo2.classList.remove("hide");
})

subtitle.addEventListener("mouseout", function() 
{
  paragrafo2.classList.add("hide");
})
