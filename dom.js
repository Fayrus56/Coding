//untuk mengatur title
console.log(document.title); //cek dl apa title nya
document.title = "Yusuf Fayrus"; //ini untuk mengubah title
console.log(document.title); //mengecek title apakah sdh masuk console

//untuk mengatur body
const body = document.body; //untuk mempermudah bisa langsung bikin var
//untuk menambahkan isi di broser
body.append("helllo world");
//untuk menambahkan element
const h1 = document.createElement('h1') //ini akan menambahkan element h1 <h1></h1>
h1.textContent = '<marguee>INI H1 BROOO!!!</marguee>' //INI UNTUK MENGISI H1

body.append(h1) //ini untuk memasukkan h1 k body 

//misal ini saya akan menambahakan element p
const Para = document.createElement('p')
Para.textContent = 'ini paragraf' //sama seperti innerText tp dia bisa mengakses elemen yg tersembunyi css
body.append(Para)

//ini pake inner html
//inner html menambah & mengganti element/tag html di dalam element yg diproses
const para2 = document.createElement('p')
para2.innerHTML = '<marquee>ini aku</marquee>' //marquee in untuk membuat text berjalan
body.append(para2)

//ini pake innet taxt
const text = document.createElement('p') //ini bisa menambahkan semua element html
text.innerText = '<marquee>ini paragraf kedua</marquee>' //inner text akan mengbaikan tag html & sekedar menanipulasinya
body.append(text)

//selector
const btn2 = document.getElementById('btn2') //ini untuk menghubungkan k id btn2 di html
const btn1 = document.getElementById('btn1') //ini untuk menghubungkan k id btn1 di html

//ini untuk style halaman html
btn1.style.fontSize = '15px'
btn1.style.background='blue'
btn1.style.color='white'
btn2.style.background='blue'
btn2.style.color='white'
btn2.style.fontSize='15px'