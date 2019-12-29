let pc = document.querySelector('.pc');
let audio = new Audio('beach.mp3');
let click = new Audio('click.wav');

audio.play();

function myKeyboard() {
  click.play();
  let x = Math.floor(Math.random() * 10);
  switch (x) {
    case 0:
      pc.src = "images/coke4.png"
      break;
    case 1:
      pc.src = "images/coke.png"
      break;
    case 2:
      pc.src = "images/coke1.png"
      break;
    case 3:
      pc.src = "images/coke2.png"
      break;
    case 4:
      pc.src = "images/pepsi.png"
      break;
    case 5:
      pc.src = "images/pepsi1.png"
      break;
    case 6:
      pc.src = "images/pepsi2.png"
      break;
    case 7:
      pc.src = "images/pepsi3.png"
      break;
    case 8:
      pc.src = "images/pepsi4.png"
      break;
    case 9:
      pc.src = "images/coke3.png"
      break;
    default: pc.src="images/blackScreen.png";
  }
}

pc.addEventListener('click', myKeyboard)
