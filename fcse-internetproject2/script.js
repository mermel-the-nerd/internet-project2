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

//ok i want o bobooboboba
// HELLO!