/*soal 1
 

buatlah variabel seperti di bawah ini

 

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
 

urutkan array di atas dan tampilkan data seperti output di bawah ini (dengan menggunakan loop):

 

1. Tokek
2. Komodo
3. Cicak
4. Ular
5. Buaya */

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();
console.log("jawaban nomer 1");
console.log(daftarHewan);

/*soal 2
 

Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]" !

 

*/ 
console.log("jawaban nomer 2");
function processSentence(name_param, age_param, address_param, hobby_param) {
    console.log("Nama saya " + name_param + ", umur saya " + age_param + ", alamat saya di " + address_param + ", dan saya punya hobby yaitu " + hobby_param);
  }
  
  var name = "John";
  var age = 30;
  var address = "Jalan Pelesiran";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby); 
  console.log(fullSentence);

    //Tulis kode function di sini
/*
 
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming"  */

//SOAL NO 3
/*Tulislah sebuah function dengan nama hitung_huruf_vokal() yang menerima parameter sebuah string, kemudian memproses tersebut sehingga menghasilkan total jumlah huruf vokal dalam string tersebut.

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2) // 3 2 */

//JAWABAN NO 3
var hitung_1 = "Muhammad";
var hitung_2 = "Iqbal";
function hitungVokal(){
    // variabel utk menyimpan nilai dlm textarea
    var teks = document.getElementById("kotakTeks").value;
    // pecahkan teks per karakter dan simpan dalam sebuah var 
    var teksArray = teks.split("");
    // lakukan looping dengan mengecek vokal / tidaknya karakter yg menjadi nilai dlm array
    var jumlahVokal = 0;
    for(var n=0;  n < teksArray.length; n++){
        // tambah nilai jumlah vokal jika hanya fungsi isVowel mereturn nilai true
        if(isVowel(teksArray[n]) === true) jumlahVokal++;
    }
    // print var jumlahVokal 
    document.getElementById("jumlahVokal").innerHTML=jumlahVokal;
}

// fungsi untuk mengecek vokal/tidaknya karakter
function isVowel(c) {
    // jika karakter terindeks dalam array [a,i,u,e,o]
    // return true
    // === -1 >> karakter tidak terindex dlm array
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

function reset(){
    document.getElementById("kotakTeks").value = "";
    document.getElementById("jumlahVokal").innerHTML=0;
}

/*soal 4

Buatlah sebuah function dengan nama hitung() yang menerima parameter sebuah integer dan mengembalikan nilai sebuah integer, dengan contoh input dan otput sebagai berikut.

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8 */

//JAWABAN NO 4
var nilai =[0,1,2,3,5];
function hitung(){
    if (nilai = 0){
        console.log(nilai[0] - 2);
    }else if (nilai = 1) {
        console.log(nilai[1] - 1);
    }else if (nilai = 2 ){
        console.log(nilai[2] + 0);
    }else if (nilai = 3){
        console.log(nilai[3] + 1);
    } else {
        console.log(nilai[4] + 3);
    }
}