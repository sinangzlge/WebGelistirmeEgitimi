// Strings : karakter topluluğu

let ad = "Sadık";
let soyad = "Turan";
let yas = 39;
let sehir = "Kocaeli";


    let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + ". " + sehir + '\'de yaşıyorum.' + 'Emekliliğie ' + (65 - yas) + ' yılım kaldı. (1)';
    console.log("1. Mesaj : " + mesaj);


    // backtick (``)
    let mesaj2 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğime ${65 - yas} yılım kaldı. (2)`;
    console.log(`2. Mesaj : ${mesaj2}`);


    // ternary operators (?)
    let emeklilik = (65 - yas > 0 ) ? "Emekliliğe " + (65-yas) +" yıl kaldı." : "Zaten emekli oldunuz." // true gelirse eğer (:) önceki kodlar çalışır. False gelirse (:)'dan sonraki kodlar çalışır.

    let mesaj3 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik} (3)`;
    console.log("3. Mesaj : "+mesaj3);
