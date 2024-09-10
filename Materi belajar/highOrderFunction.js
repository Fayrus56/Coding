//! penjelasan perbedaan map, reduce, dan filter
// TODO: map => Mengubah setiap elemen dalam array menjadi elemen baru berdasarkan fungsi yang diberikan.
// todo: filter =>  Menghasilkan array baru yang hanya berisi elemen-elemen yang memenuhi kondisi tertentu/syarat.
// TODO: reduce => untuk menggabungkan semua elemen menjadi satu nilai tunggal.

//* contoh map => tidak menghilangkan arry asli/awal
// CONTOH:
const angka3 = [2, 4, 5];
const newAngkaKali2 = angka3.map((a) => a * 2);
console.log("🚀 ~ newAngkaKali2: AAA", newAngkaKali2);
console.log("🚀 ~ angka3:", angka3); // arry awal tetap tak berubah

const numberss = [1, 2, 3, 4];
const doubledNumberss = numberss.map((number) => number * 2);
console.log("🚀 ~ doubledNumberss:", doubledNumberss)
console.log("🚀 ~ numberss:", numberss)
// Hasil: [2, 4, 6, 8]

// * contoh filter
const angkaRandom = [1, 2, 3, 4, 5, 6];
const cariBilGenap = angkaRandom.filter(number => number % 2 === 0);
console.log("🚀 ~ cariBilGenap:", cariBilGenap)
console.log("🚀 ~ angkaRandom:", angkaRandom)
// Hasil: [2, 4, 6]

// * contoh reduce (memiliki 2 argument => akumulator dan currentValue/nilai saat ini)
const numbers1 = [1, 2, 9, 4];
const sum = numbers1.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log("🚀 ~ sum: hasil penjumlahan semauanya", sum)
console.log("🚀 ~ numbers1: var awal", numbers1)
// Hasil: 16
