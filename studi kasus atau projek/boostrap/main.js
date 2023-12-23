//  ini untuk ke ig ku
function tIG() {
  window.open("https://www.instagram.com/ysssyf_fyrs/", "_blank");
}

// ini untuk ke no wa
function tWA() {
  const noWa = "6287755507938";
  window.open("https://wa.me/" + noWa, "_blank");
}

// ini terhubung ke tombol tang mengambang
function wa() {
  window.open("https://wa.me/628975828050", "_blank");
}


// ini dark mode
let toggler = document.getElementById("switch");
toggler.addEventListener("click", () => {
  if(toggler.checked ===true) {
    document.body.style.backgroundColor ='rgba(32, 30, 27, 0.99)'
    document.body.style.color ='white'
  } else {
    document.body.style.backgroundColor ='white'
    document.body.style.color ='black'
  }
});
