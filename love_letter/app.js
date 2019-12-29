let letter = document.querySelector('.emoji');
let login = document.querySelector('.login');


function showLogin() {
  login.style.visibility = 'visible';
}

function openLetter() {
  let code = document.getElementById("password").value;
  console.log(code);
  if(code == "kikker123") window.open("html/letter.html", "_blank", "scrollbars=yes, resizable=no, top=150, left=800, width=100, height=300, titlebar=no, location=no");
  if(code == "Mariaiscool1") window.open("html/ddw.html", "_blank", "scrollbars=yes, resizable=no, top=120, left=80, width=200, height=200, titlebar=no, location=no");
  if(code == "1d4_2") window.open("html/brief_aan_de_klas.html", "_blank", "scrollbars=yes, resizable=no, top=120, left=80, width=250, height=200, titlebar=no, location=no");
}

letter.addEventListener('click', showLogin);
