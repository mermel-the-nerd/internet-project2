/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */

let catImage = document.getElementById("catImg");

async function getCat() {
  let response = await fetch('https://api.thecatapi.com/v1/images/search');
  if (response.ok) {
    let data = await response.json();
    let imageUrl = data[0].url;
    displayCat(imageUrl);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

function displayCat(response) {
  catImage.src = response;
}
let monster1_obj = document.getElementById("monster1");
let monsterwidth = monster1_obj.clientWidth;
let monsterheight = monster1_obj.clientHeight;

let monsterinterval = 0;
let monstertime = 0;
let screenWidth = document.documentElement.clientWidth;
let screenHeight = document.documentElement.clientHeight;

function randomSpawn(objectwidth, objectheight, objectname) {
    //randomly moves an object within the bounds of the screen
    
    randx = Math.floor(Math.random() * (screenWidth - objectwidth));
  
    randy = Math.floor(Math.random() * (screenHeight - objectheight));
  
    moveImage(randx, randy, objectname);
}
function moveImage(x, y, object) {
    //moves an images
  console.log('testing')
    object.style.left = x + "px";
    object.style.top = y + "px";
}


function monsterSpawn() {
    
    randomSpawn(monsterwidth, monsterheight, monster1_obj); //randomly moves clock
   
}

//monsterinterval = setInterval(monsterSpawn, 1500);
//ok i want o bobooboboba
// HELLO!