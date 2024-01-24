// * contoh callback
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}
// Fungsi JavaScript dijalankan sesuai urutan pemanggilannya.

myFirst(); // ini yang akan ditampilakan
mySecond();

//* contoh kedua
function Calculator(angka1, angka2) {
  this.a = angka1;
  this.b = angka2;
  return a * b;
}

let result = Calculator(5, 5);
myDisplayer(result);

// studi kasus
function getColor() {
  let getColor = prompt("warna apa yang kamu inginkan?")
  return getColor
}

function changeColor(element, color) {
  element.style.color = color;
}

const heading = document.getElementById("heading");

const userColor = getColor();
changeColor(heading, userColor);
