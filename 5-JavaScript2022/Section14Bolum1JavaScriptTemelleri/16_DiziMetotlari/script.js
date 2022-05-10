// Dizi Metotları

let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// // array to string 
// sonuc = ogrenciler.toString(); // diziyi string'e çeviriyor. bütün diziyi tek yerden ulaşıyoruz aralarında virgül oluyor.
// sonuc = ogrenciler.join(" ");  // dizi aralarına boşluk ekledik ve dönen değer string oluyor.

// eleman silme 
// sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri döndürülür. yani bize silinen elemanı söyler.
// sonuc = ogrenciler.shift(); // ilk eleman silinir. ve silinen eleman geri döndürülür.

// // eleman ekleme
// sonuc = ogrenciler.push("sena"); // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena"); // dizinin başına eleman eklenir.



// let markalar1 = ["mazda", "toyota"];
// let markalar2 = ["opel", "renault"];
// let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3); // dizileri birleştirdik. markalar1'in içerisine markalar2 ve markalar3'ü ekledik birleştirdik. markalar1 dizisinin orjinal içeriği bozulmaz.
// sonuc = markalar1.splice(0, 0, markalar2); // hiç eleman silmeden 0. index'ten başlayarak eleman ekledik. 1 yerine 0 yazarsak eleman silmez.
// sonuc = markalar1.splice(0, 1, "bmw", "audi"); // splice ile dizi elemanı silip diziye yeni eleman ekleyebiliyoruz. burada 0. index'ten başla 1. index'e kadar sil, "bmw" ve "audi" elemanlarını ekle diyoruz.  eklenen elemanlar başlangıç index'ine eklenir.
// sonuc = markalar1.splice(0, 1); // eleman silme 0. index'ten başla 1 eleman sil

console.log(sonuc);
console.log(markalar1);
