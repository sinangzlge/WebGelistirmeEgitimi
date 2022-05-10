// Numbers (Sayısal değerler)

// NaN : Not a number : sayısal bir değer değil

sonuc = 10; // number (sayısal) değerleri bu şekilde atıyoruz.
sonuc = "10"; // string değer

sonuc = Number("10"); // String'den number'a çevirmek için Number metodunu kullanabiliriz.
sonuc = parseInt("10.6"); // parseInt ile de dönüştürme işlemi yapabiliriz dönen değer tam sayı olur ondalıklı kısım yazılmaz.
sonuc = parseFloat("10.6"); // ondalıklı string değeri number'a çeviriyoruz.
sonuc = parseInt("10a"); // sonunda farklı bir karakter varsa da sayısal değeri alıp dönüştürür.
sonuc = parseInt("a10"); // başında farklı bir karakter varsa dönüştürme işlemi gerçekleşmez. NaN değer döner yani tanımsız.

sonuc = isNaN("10a"); // Sayısal bir değer değil mi sorgusu yapıyoruz değilse true sayısal değer ise false cevabını alırız.

let sayi = 15.1235678;

sonuc = sayi.toPrecision(5); // sayının 5 basamağını ekrana yazdırır. 6. basamaktaki sayı 5'in üzerindeyse, 5. basamağını yuvarlar değil ise 5'in altında ise yuvarlamaz.
sonuc = sayi.toFixed(5); // Ondalıklı kısımdan 5 basamak alır. aynı şekilde yuvarlama işlemi yapar.

sonuc = Math.round(2.4); // Girdiğimiz değeri en yakın sayıya yuvarlar. 5'in altı ise aşağıya
sonuc = Math.round(2.6); // 5'in üzerinde ise yukarı yuvarlar.
sonuc = Math.ceil(2.2); // Her zaman yukarı yuvarlar.
sonuc = Math.floor(2.6); // Her zaman aşağı yuvarlar.
sonuc = Math.sqrt(25); //  Girilen değerin karekökünü alır.
sonuc = Math.pow(2,3); // 2'in 5 üssünü alır. üs alma işlemi.
sonuc = Math.abs(-10); // Girilen negatif değerleri pozitif yapar.
sonuc = Math.min(4,6,8,3,9); // Girilen değerlerin en küçüğünü alır.
sonuc = Math.max(4,6,8,3,9); // Girilen değerlerin en büyüğünü alır.
sonuc = Math.random(); // 0 - 1 arasında random ondalıklı sayılar üretir.
// sonuc = Math.random() * 10; // çarpı 10 ile 0 ile 10 arasında rastgele sayı üretir.
// sonuc = Math.floor(Math.random() * 100); // ondalıklı kısmı almadan 1 - 100 arasında sayı üretiyoruz.
sonuc = Math.floor(Math.random() * 100) + 50; // +50 ile 50'den başlatıyoruz. yani 50 ile 150 arasında sayı üretiyoruz. 1 ile 100'ü çarpıp 50 ekliyor.


console.log(typeof sonuc);
console.log(sonuc);