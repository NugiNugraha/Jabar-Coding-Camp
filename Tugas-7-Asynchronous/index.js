// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
/*books.forEach(element => readBooks(10000, element, (callbackFn) => {
    console.log(callbackFn)
  }))*/

  function baca(time,books,i) {
      if (i<books.length) {
          readBooks(time,books[i], function(sisa){
            if (sisa >0){
                i += 1;
                baca(sisa, books, i);
            }
      })
  }
}
baca(10000, books, 0)