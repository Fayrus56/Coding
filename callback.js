// * contoh callback
function menyapa(nama) {
  alert("Halo ", nama);
}

function prosesUserInput(n) {
  let nama = prompt("Tolong masukan nama");
  n(nama);
}

prosesUserInput(menyapa);
console.log("🚀 ~ prosesUserInput:", prosesUserInput(menyapa('yusuf')));
