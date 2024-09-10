// TODO: INI BERISI MATERI YANG BEERISI MATERI REGULAR EXPREISSION
// * REGEX adalah uruta karaker yang membeentuk pola pencarian, ini berguna untuk menpatkan hasil pencrian sesuai yang iinginkan

// ! coontoh pengggunaan regex modifirs /i/
let a = "halo nama saya Yusuf";
//* ini akan melakkukann pencarian 
// seacc akan melakukan pencarian 
let b = a.search(/usuf/i); // penambahan /i/ supaya menjadi tdk peka hurf besar kecil
console.log("🚀 ~ file: regex.js:8 ~ b:", b)

//! contoh pennggunaan regex modifiers
// * g
let text = "Dimana saya sekarang berada, saya sekarang dirumah";
let result = text.match(/saya/g); // match itu funinya mirip dengn seacch, bedanya ada di return niainya klo matcch akan mengembalikan dalam bentuk string
console.log("🚀 ~ file: regex.js:15 ~ result dari regexx modifiers 'g':", result)
document.getElementById("demo2").innerHTML = result;

//! contoh pennggunaan regex modifiers
// * m
let text2 = "\nDimana \nsaya???"; // ! /n -> baris baru
let result2 = text2.match(/^saya/m); //m ->bisa melakukan pencarian baris baru
document.getElementById("demo3").innerHTML = "Result is: " + result2;

//* method test -> meencari pola(pettern) dari sebuah string  ini akan megngembalikan niali bolean
const pattern = /e/;
let y = pattern.test("The best things in life are free!");
console.log("🚀 ~ file: regex.js:27 ~ hsil dari tetss:", y)

// TODO: conttoh penggunaan regex dggn method test -> untuk melakukan peengecekan dengan pola tertenti
let pola = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-=_+]{8,}/g
let t = 'Psdsjkdnfk123#23';
console.log("🚀 ~ file: regex.js:31 ~ pola:", pola.test(t))


//* menggunakan parameter thisArg di objct
const obk = {
  name: "Yusuf",
  age: 14,
};
const ary = [1, 2, 3];
ary.forEach(function (element) {
  console.log(element + this.age);
});
