// Scopes :

var isim = "Ahmet"; // Global scope // her yerden çağırılabilir.
// console.log("Global scope : ",isim);

const adres = "İstanbul"; // const tanımlamalarımızı başka yerde içeriğini değiştiremiyoruz.
// adres = "Kocaeli"; // bunda hata alırız.
console.log(adres);


// fonksiyonlar kendi scope alanlarını oluşturur.
function yazdir() {
    var isim = "Ayşe";
    var yas = 20;
    console.log("function scope : ", isim, yas);
}
yazdir();
// console.log(yas); // function içindeki oluşturulan değişkeni dışardan çağıramıyoruz.



// block içerisinde yeni scope oluşmaz (let, const). (if - for vs.)  
// if blockları içerisinde let ile tanımlama yaparsak tanımlamayı block dışarısından çağıramayız.
if (true) { // if bloğu içerisinde oluşturduğumuz değişkenler global scope olarak geçer her yerde kullanılabilir.
    // var isim = "zeynep"; // global scope
    let isim = "zeynep"; // block scope
    let cinsiyet = "Kadın";
    console.log(isim, cinsiyet)
}
console.log(isim)
// console.log(cinsiyet); // let olduğundan dolayı hata alırız.



