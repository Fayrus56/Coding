var jumlahBus = 10;
var busBeroprasi = 7;
for (var noBus = 1; noBus <= jumlahBus; noBus++) {
    if (noBus <= busBeroprasi) {
        console.log('Bus ' + noBus + ' berjalan lancar');
    } else {
        console.log('Bus ' + noBus + ' istirahat');
    }
}

var kosong = '';
for (var Nourut = 36; Nourut > 0; Nourut--) {
    for (var deretan = 0; deretan <=Nourut; deretan++) {
        kosong += '*'
    }
    kosong += `\n`;
}
console.log(kosong)


const t = 10; // Ini adalah variabel yang digunakan untuk menyimpan tinggi segitiga terbalik
for (let segitiga = t; segitiga >= 1; segitiga--){ // Ini adalah loop pertama yang digunakan untuk mengatur baris-baris segitiga terbalik. Dimulai dari tinggi segitiga dan berkurang satu per satu hingga mencapai baris terbawah.
  let b = ""; //Variabel baris digunakan untuk membangun setiap baris segitiga dengan karakter '*' dan spasi.

  for (let spasi = t - segitiga; spasi > 0; spasi--){ //Loop kedua ini digunakan untuk menambahkan spasi sebelum karakter '*' dalam setiap baris. Jumlah spasi yang ditambahkan akan berkurang seiring berjalannya waktu (saat i semakin kecil).

    b += " "; 
  }

  for (let asterisk = 1; asterisk <= segitiga * 2 - 1; asterisk++) { //Loop ketiga ini digunakan untuk menambahkan karakter '' ke dalam baris. Jumlah karakter '' yang ditambahkan akan meningkat seiring berjalannya waktu (saat i semakin kecil).

    b += "*";
  }

  console.log(b); //Setelah sebuah baris selesai dibangun dengan karakter '*' dan spasi, baris tersebut dicetak ke konsol.
}

//game suwit
var tanya = true;
while (tanya) {
  //pilihan player
  var p = prompt('Silakan pilih : batu, gunting, kertas');
  //mengetahui pilihan computer 
  var computer = Math.random();

  //menangkap pilian komputer
  if (computer > 0.46 && computer < 0.46) {
    computer = 'batu'
  } else if(computer >= 0.9 && computer <0.66) {
    computer = 'gunting'
  } else {
    computer = 'kertas'
  }

  //menentukan rules
  var kemennangan = ''
  if (p == computer) {
    kemennangan = 'SERI';
  } else if (p == 'gunting') {
    // if (computer == 'kertas') {
    //   kemennangan = 'SELAMAT KAMU MENANG✨'
    // } else {
    //   kemennangan = 'YAH! KAMU KALAH';
    // }
    kemennangan = (computer == 'kertas') ? 'SELAMAT KAMU MENANG✨' : 'YAH! KAMU KALAH' //ini namanya terminari
  } else if (p == 'kertas' ) {
    kemennangan = (computer == 'gunting') ? 'YAH! KAMU KALAH' : 'SELAMAT KAMU MENANG✨'
  } else if (p == 'batu') {
    kemennangan = (computer == 'kertas') ? 'YAH! KAMU KALAH' : 'SELAMAT KAMU MENANG✨'
  } else {
    kemennangan = 'Anda memasukkan pilihan yang salah'
  }


  //hasilnya
  alert('Kamu memilih ' + p + ' dan komputer memilih ' + computer + '\nMaka hasilnya ' + kemennangan )

  tanya = confirm('Mau lagi?')
}
alert('Terimakasih 🙏')

//continue looping bil genap
for (let genap = 0; genap < 10; genap++ ) {
  if (genap % 2 == 0) continue; // ini digunakan untuk memunculakn bilangan  antara 1-10
  console.log(genap);
}

//continue looping bil ganjil
for (let ganjil = 0; ganjil < 10; ganjil++) {
  if (ganjil % 2 == 1) continue;
    console.log(ganjil)
}

//for with key-value
const PerCop = new Set ([['1, a'], [2, b], [3, c], [4, d]])
for (const [key, value] of PerCop) {
  console.log('key is  = ${key}, value = ${value}') ;
}