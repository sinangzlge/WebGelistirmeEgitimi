// String Metotları

let kursAdi = "   Komple Uygulamalı Web Geliştirme Eğitimi"; 

let sonuc;

sonuc = kursAdi.toLowerCase(); // bütün string karakterlerini küçük yapar
sonuc = kursAdi.toUpperCase(); // bütün string karakterlerini büyük yapar
sonuc = kursAdi.length; // string içerisindeki bütün karakterleri sayıp kaç karakter olduğunu söyler.
sonuc = kursAdi[1] // parantez içerisine yazdığımız index numarasına karşılık gelen string karakteri bize getirir. ilk karakter 0'dan başlar
sonuc = kursAdi.slice(0,5); // string karakter içeriğiğimizin belli karakterinden belli karaktere kadaar almak için onlara karşılık gelen index numarasını yazarak alabiliriz 0 : başlangıç index'i. 5 : bitiş index'i. 5 dahil olmaz. kesmek istediğimiz bölüm.
sonuc = kursAdi.slice(10); // bitiş index'i belirtmeden de kullanabiliriz. index'e karşılık gelen 10'dan itibaren bütün karakterleri al.
sonuc = kursAdi.slice(-10); // Terstende alabiliriz. negatif değerde sondan başlayarak alır.
sonuc = kursAdi.slice(-10, -5); // Sondan başlayarak alır. istediğimiz bellirli kısımları bize getirir.

sonuc = kursAdi.substring(0,6); // slice gibidir. 0'dan başla 6'ya kadar index'e karşılık gelen değerleri al
sonuc = kursAdi.substring(10); // 10'dan itibaren bütün karakterleri al.

sonuc = kursAdi.replace("Eğitimi","Kursu") // Olan içeriği istediğimiz içerikle değiştirebiliyoruz. İstediğimiz karakteri bulup istediğimizle çevirebiliyoruz. Eğitimi karakterlerini bulup, Kursu karakterleri ile değiştirdik.

sonuc = kursAdi.trim(); // Sağ başlangıç ve sol başlangıçtaki bütün boşluk karakterlerini siler.
sonuc = kursAdi.trimEnd(); // Sondaki boşluk karakterlerini sil.
sonuc = kursAdi.trimStart(); // Baştaki boşluk karakterlerini sil.

sonuc = kursAdi.indexOf("Komple"); // Aradığımız kelimeyi bulur ve başlangıç index'ini getirir.

sonuc = kursAdi.split(" "); // Vermiş olduğumuz karakter ile bize bir string dizisi gönderir. burada boşluklardan ayırarak dizi elemanlarını belirlemiş oluyoruz.
sonuc = kursAdi.split(" ")[0]; //// oluşturduğumuz dizinin elemanlarına ulaşabiliyoruz. 0'ı index'e karşılık gelen string karakterleri getiriyoruz
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);

