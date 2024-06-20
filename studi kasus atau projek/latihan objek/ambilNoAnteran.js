// unutuk mengelola no antrean
class noAntrean {
    constructor (number) {
        this.number = number
        this.isPanggil = false
    }
    call () {
        this.isPanggil = true
        console.log(`Nomor antrean ${this.number} sudah dipanggil`);
    }
}
// untuk menwakili pelanggan yang ingin mengambil no antrean
class pelanggan {
    constructor (nama) {
        this.nama = nama
        this.noAntrean = null
    }
    mengambilNoAntrean (sistemPengambilanNO) {
        this.noAntrean = sistemPengambilanNO.BuatNoAntrean ();
        console.log(`${this.nama} telah mengambil nomor antrean ${this.noAntrean.number}`);
    }
}
// Class ini akan mengelola antrean, termasuk menambah nomor antrean baru dan memanggil nomor antrean berikutnya.
class sistemPengambilanNO {
    constructor () {
        this.noSaatIni = 0;
        this.antrean = [];
    }
    BuatNoAntrean () {
        this.noSaatIni += 1
        const noAntreanBaru = new noAntrean(this.noSaatIni);
        this.antrean.push(newNoAntrean);
        return newNoAntrean;
    }
    Panggil () {
        const noSelanjtnya = this.antrean.find(number => !number.isPanggil);
        if (nextNumber) {
            nextNumber.call();
        } else {
            console.log("No more queue numbers to call.");
        }
    }
}
// Membuat instance QueueSystem
const queueSystem = new sistemPengambilanNO();

// Membuat instance Customer
const customer1 = new pelanggan("Alice");
const customer2 = new pelanggan("Bob");

// Pelanggan mengambil nomor antrean
pelanggan.mengambilNoAntrean(sistemPengambilanNO); // Alice mengambil nomor antrean
pelanggan.mengambilNoAntrean(sistemPengambilanNO); // bob mengambil nomor antrean


// Memanggil nomor antrean berikutnya
sistemPengambilanNO.Panggil(); // Memanggil nomor antrean 1
sistemPengambilanNO.Panggil(); // Memanggil nomor antrean 2
sistemPengambilanNO.Panggil(); // Memanggil nomor antrean 3
