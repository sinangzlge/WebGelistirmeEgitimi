// Tarayıcı'da Bilgi Saklama : Local & Session Storage : Kullanımları aynı farkları aşağıda yazıyor.


// Local Storage : Sakladığımız bilgiler tarayıcı kapansa bile sakladığımız bilgiler tarayıcıdan silinmez el ile silmemiz gerekiyor.

let = val;

// setItem : eleman atama
const firstName = localStorage.setItem('firstName','Sadık'); // setItem : ile ekleme yapıyoruz. ilk parametre key , ikinci value
const lastName = localStorage.setItem('lastName','Turan'); 
let hobies = ['sinema','araba','gezmek'];

// getItem : eleman almak için
// val = localStorage.getItem('firstName');
// val = localStorage.getItem('lastName');

// removeItem : eleman silmek için
// val = localStorage.removeItem('firstName');
// val = localStorage.removeItem('lastName');

// clear : bütün bilgiler silinir.
// localStorage.clear(); 



// set array to storage : dizi içerisindeki elemanları storage'e atma
localStorage.setItem('hobies',JSON.stringify(hobies)); // JSON.stringify ile dizimisi localStorage'e aktarabiliyoruz. objeye dönüştürmüş oluyoruz.

val = JSON.parse(localStorage.getItem('hobies')); // bu şekilde dizimizi çağırabiliyoruz. obje'den tekarar diziye çevirip alıyoruz.


console.log(val);
console.log(localStorage);





// Session Storage : Sakladığımız bilgiler tarayıcı açık olduğu sürece saklanır sekme kapandığı anda bilgiler gider.

// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');


// console.log(sessionStorage);
