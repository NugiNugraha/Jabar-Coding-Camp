/*Soal 1
 

buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini*/

 
function luasPersegi(panjang, lebar) {
  return panjang * lebar;
}

function kelilingPersegi(panjang, lebar) {
  return 2 * (panjang + lebar);
}

function hitungPersegi(panjang, lebar) {
  const luas = luasPersegi(panjang, lebar);
  const keliling = kelilingPersegi(panjang, lebar);
  return { luas, keliling };
}

const { luas, keliling } = hitungPersegi(5, 4);

console.log('luas persegi adalah', luas);
console.log('keliling persegi adalah', keliling);


//SOAL No 2
/* Ubahlah code di bawah ke dalam arrow function dan object literal es6 yang lebih sederhana

 

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName()  */

//Jawaban NO 2
const newFunction = function literal(firstName, lastName){
 return {
 firstName,
 lastName,
 fullName(){
 console.log(firstName + " " + lastName)
 return 
 }
 }
}
newFunction("William", "Imoh").fullName()

/*Soal 3
Diberikan sebuah objek sebagai berikut:

const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
}
dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:

const firstName = newObject.firstName;
const lastName = newObject.lastName;
const address = newObject.address;
const hobby = newObject.hobby;
Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)

// Driver code
console.log(firstName, lastName, address, hobby) */


//Jawaban NO 3
//object
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
}

const {firstName, lastName, address, hobby} = newObject

console.log(firstName, lastName, address, hobby)


/*soal 4
Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
//Driver Code
console.log(combined)*/

//Jawaban N0 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined =  [...west, ...east]
console.log(combined)

/*soal 5
 

sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

 

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet  */

//Jawaban No 5

const planet = "earth" 
const view = "glass" 
const before = `lorem ${view} dolor sit amet,consectetur adipiscing elit,${planet}`
console.log(before)
