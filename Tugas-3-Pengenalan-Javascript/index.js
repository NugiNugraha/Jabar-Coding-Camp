//soal 1

//buatlah variabel-variabel seperti di bawah ini

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
//gabungkan variabel-variabel tersebut agar menghasilkan output

//saya senang belajar JAVASCRIPT
var gabungan1 = pertama.slice(0, 19);
var gabungan2 = kedua.slice(0, 18);
console.log(gabungan1 + gabungan2);
//soal 2

//buatlah variabel-variabel seperti di bawah ini

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
//ubahlah variabel diatas ke dalam integer dan lakukan operasi matematika semua variabel agar menghasilkan output 24 (integer).
//*catatan :
//1. gunakan 3 operasi, tidak boleh  lebih atau kurang. contoh : 10 + 2 * 4 + 6
//2. Boleh menggunakan tanda kurung . contoh : (10 + 2 ) * (4 + 6)
var intpertama = parseInt(kataPertama);
var intkedua = parseInt(kataKedua);
var intketiga = parseInt(kataKetiga);
var intkeempat = parseInt(kataKeempat);
console.log(intkedua * intketiga + intpertama + intkeempat);
//soal 3

//buatlah variabel-variabel seperti di bawah ini

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(14,18);  // do your own! 
var kataKeempat = kalimat.substring(18,24); // do your own! 
var kataKelima = kalimat.substring(24,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
//selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:

//Kata Pertama: wah
//Kata Kedua: javascript
//Kata Ketiga: itu
//Kata Keempat: keren
//Kata Kelima: sekali