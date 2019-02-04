// Print the first p tag to the console using the ID, class, and tag selectors.

var pTag1 = document.getElementById("first");
var pTag2 = document.getElementsByClassName("special");
var pTag3 = document.getElementsByTagName("p");
console.log(pTag1.textContent);
console.log(pTag2[0].textContent);
console.log(pTag3[0].textContent);




// Print the special class using both the query selector and query all selector.


var classSpec2 = document.querySelectorAll(".special");
for(var i=0; i < classSpec2.length; i++)
{
    console.log(classSpec2[i].textContent);
}



//Change the color of the h1 statement to blue.

var hColor = document.querySelector("h1");
hColor.style.color = "blue";



//Change the color of the last p tag to yellow.

var pYellow = document.getElementById("last");
pYellow.style.color = "yellow";
