let kid = document.querySelector('.kid');
let search = document.querySelector('.search');

window.onload = init;

function init() {

  if(window.Event){
    document.captureEvents(Event.MOUSEMOVE);
  }

  document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
  kid.style.left = (window.innerWidth - 200) * e.clientY / window.innerHeight + "px";
  kid.style.top = (window.innerHeight - 180) * e.clientX / window.innerWidth + "px";
}

function surf() {
  console.log("surf");
  window.location.assign("../../surf/main.html");
}

search.addEventListener('click', surf);
