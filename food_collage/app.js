let ingredient1 = document.querySelector('.first_ingredient');
let ingredient2 = document.querySelector('.second_ingredient');

function firstIngredient() {
  let val = ingredient1.value;
  let img = document.querySelector('.img1');

  if (val == 1) img.src = "images/rice.jpg";
  else if (val == 2) img.src = "images/fish.jpg";
  else if (val == 3) img.src = "images/salad.PNG";
  else if (val == 4) img.src = "images/sillabebe.PNG"
  else if (val == 5) img.src = "images/soup.jpg"
  else if (val == 6) img.src = "images/icecream.PNG";
  else if (val == 7) img.src = "images/frozenfood.jpg"
}

function secondIngredient() {
  let val = ingredient2.value;
  let img = document.querySelector('.img2');

  if (val == 1) img.src = "images/chicken.png";
  else if (val == 2) img.src = "images/tomato.png";
  else if (val == 3) img.src = "images/eggs.png";
  else if (val == 4) img.src = "images/gelatine.png";
  else if (val == 5) img.src = "images/glass.png";

}

ingredient1.addEventListener('change', firstIngredient);
ingredient2.addEventListener('change', secondIngredient);
