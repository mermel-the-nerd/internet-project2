/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */

let catImage = document.getElementById("catImg");
let catCount = 0;
let catNum = document.getElementById("catNum");
let winTxt = document.getElementById("winTxt");

async function getCat() {
  let response = await fetch('https://api.thecatapi.com/v1/images/search');
    
  if (response.ok) {
    let data = await response.json();
    let imageUrl = data[0].url;
    displayCat(imageUrl);
  } else {
    alert("HTTP-Error: " + response.status);
  }
  catCount++;
  catNum.innerHTML = ("Cats Clicked: " + catCount);
    
  if (catCount >= 3) {
    winTxt.innerHTML = ("YAY you clicked 3 cats! You win! Feel free to keep going ;)");
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

function updateTimer(timeRemaining) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(seconds).padStart(2, '0');

  const timerText = `${minutesStr}:${secondsStr}`;
  document.getElementById("timer").innerHTML = timerText;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Countdown Expired!";
    if(catCount<3){
      winTxt.innerHTML = ("Oh no! you didnt click enough cats in time. You lose :(");
    }
  } else {
    timeRemaining--;
  }
}

function startTimer(initialTime) {
  let timeRemaining = initialTime;
  updateTimer(timeRemaining);

  timerInterval = setInterval(function () {
    updateTimer(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
    } else {
      timeRemaining--;
    }
  }, 1000);
}
monster1_obj.onclick = getCat;
monsterinterval = setInterval(monsterSpawn, 1500);
startTimer(10)
//ok i want o bobooboboba
// HELLO!

