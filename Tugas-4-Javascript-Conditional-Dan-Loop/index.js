/*
Hari ke-4 | Tugas Javascript : Conditional & Loop
Petunjuk Pengerjaan
 

Ikutilah langkah-langkah pengerjaan di bawah ini
 

1. Menambahkan Folder Baru dan file baru
 

Buatlah folder baru dengan nama "Tugas-4-Javascript-Conditional-Dan-Loop", lalu buat file baru di dalam folder tersebut dengan nama "index.js".

 

2. Kerjakan Soal di bawah ini
 

kerjakan soal di bawah ini dan masukkan semua kode jawabannya ke dalam file "index.js"

 

kerjakan soal ini tanpa menggunakan kode-kode ES6 (bagi yang sudah paham ES6), jadi kerjakan dengan kode-kode sesuai materi
*/
 

//soal 1

 

//buatlah variabel seperti di bawah ini

 

//pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi
 

/*nilai >= 85 indeksnya A
nilai >= 75 dan nilai < 85 indeksnya B
nilai >= 65 dan nilai < 75 indeksnya c
nilai >= 55 dan nilai < 65 indeksnya D
nilai < 55 indeksnya E
*/


   var nilai = 75;

  
  if(nilai >= 85) {
        "Selamat! Anda mendapatkan nilai A."
  } else if(nilai >= 75) {
      "Anda mendapatkan nilai B."
  } else if(nilai >= 65) {
      "Anda mendapatkan nilai C."
  } else if(nilai >= 55) {
       "Anda mendapatkan nilai D."
  }  else if(nilai < 55) {
       "Anda mendapatkan nilai E."
  }
  
  
  console.log("soal nomer 1 jawabannya " + nilai); 

/*soal 2

buatlah variabel seperti di bawah ini

var tanggal = 22;
var bulan = 7;
var tahun = 2020;
ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing) */

var tanggal = 30; // assign nilai variabel tanggal disini!
var bulan = 6; // assign nilai variabel bulan disini! (dengan huruf awal kapital)
var tahun = 1997; // assign nilai variabel tahun disini!

switch (bulan) {
  case 1 :
    bulan = 'Januari';
    break;
  case 2 :
    bulan = 'Februari';
    break; 
  case 3 :
    bulan = 'Maret';
    break;
  case 4 :
    bulan = 'April';
    break;
  case 5 :
    bulan = 'Mei';
    break;
  case 6 :
    bulan = 'Juni';
    break;
  case 7 :
    bulan = 'Juli';
    break; 
  case 8 :
    bulan = 'Agustus';
    break;
  case 9 :
    bulan = 'September';
    break;
  case 10 :
    bulan = 'Oktober';
    break;
  case 11 :
    bulan = 'November';
    break;
  case 12 :
    bulan = 'Desember';
    break;
     
 
}
console.log("soal nomer 2 jawabannya " + tanggal +" " +  bulan +" " + tahun);
 

/*soal 3
 

Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi n dan alas n. Looping boleh menggunakan syntax apa pun (while, for, do while).

Output untuk n=3 :

 

#
##
###
 

Output untuk n=7 :

 

#
##
###
####
#####
######
####### */
 
var s = '';
var pola = 3;

for (var i = 1; i <= pola ; i++) {
    
    for (var j = 1; j <=i; j++){
        s += '#';
    }
    s += '\n';
}
console.log('soal nomer 3A jawabannya' + s   );

var s = '';
var pola = 7;

for (var i = 1; i <= pola ; i++) {
    
    for (var j = 1; j <=i; j++){
        s += '#';
    }
    s += '\n';
}
console.log('soal nomer 3B jawabannya' + s   );


// soal 4
 

/* berilah suatu nilai m dengan tipe integer, dan buatlah pengulangan dari 1 sampai dengan m, dan berikan output sebagai berikut.
contoh :

Output untuk m = 3

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===

Output untuk m = 5

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===
4 - I love programming
5 - I love Javascript

Output untuk m = 7

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===
4 - I love programming
5 - I love Javascript
6 - I love VueJS
======
7 - I love programming


Output untuk m = 10

1 - I love programming
2 - I love Javascript
3 - I love VueJS
===
4 - I love programming
5 - I love Javascript
6 - I love VueJS
======
7 - I love programming
8 - I love Javascript
9 - I love VueJS
=========
10 - I love programming */