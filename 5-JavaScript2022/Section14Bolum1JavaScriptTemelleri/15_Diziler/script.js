// Diziler 

// let urun1 = "İphone 11";
// let urun2 = "İphone 12";
// let urun3 = "İphone 13";


let urunler = ["İphone 11","İphone 12","İphone 13"]; // Dizi tanımlayıp içerik ekleme
let fiyatlar = [9000,13000,20000];
let renkler = ["gold","siyah","beyaz"];

// farklı tipteki elemanarı da tek bir dizide saklayabiliyoruz.
let urun1 = ["İphone 11",9000,"Gold"]; // Dizi tanımlama farklı tiptekileri

// Dizi tanımlamasından sonra dizi içeriklerini ekleme.
let urun2 = [];
urun2[0] = "İphone 12";
urun2[1] = 13000;
urun2[2] = "Siyah";

urun2[2] = "Mavi"; // dizi elemanını güncelleme farklı bir değer atama
console.log(urun2)

// Okunurabilirlik açısından alt alta sıralama.
let urun3 = [
    "İphone 13",
    20000,
    ["siyah","beyaz","mavi",["kırmızı","gold"]] // dizi içerisine dizi ekleme eklediğimiz dizinin de altına dizi ekleme
];

console.log(urun3[2]); 
console.log(urun3[2][0]);
console.log(urun3[2][1]);
console.log(urun3[2][2]);
console.log(urun3[2][3][0]);
console.log(urun3[2][3][1]);

console.log(typeof urun3[2]);



console.log(urunler[0]); // Dizi içerisindeki elemanları çağırma
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`); // Farklı dizilerdeki elemanları birleştirme
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")[3]); // string karakterlerimizi boşluklardan ayırarark dizi haline getirip 3 index'e karşılık gelen değeri aldık.

