// Değişkenler Uygulama

/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.

*/

// öğrenci1
let o1Ad = "Ada";
let o1Soyad = "Bilgi";
let o1DogumTarihi = "2012";
let o1matnot1 = 70;
let o1matnot2 = 70;
let o1matnot3 = 80;

// öğrenci 2 
var o2AdSoyad = "Yiğit Bilgi";
var o2DogumTarihi = "2010";
var o2matnot1 = 40;
var o2matnot2 = 40;
var o2matnot3 = 50;

// Öğrenci Yaş
// var o1yas = 2022 - Number(o1DogumTarihi);

var suankiYil = new Date().getFullYear(); // şimdiki zamanın Yılını alırız.
    // öğreni 1 yaş
    var o1yas = suankiYil - Number(o1DogumTarihi);
    console.log(o1yas);

    // öğrenci 2 yaş
    var o2yas = suankiYil - parseInt(o2DogumTarihi);
    console.log(o2yas);


console.log("********************************************")

// Öğrenci Ortalama Notu
    // Öğrenci 1 Not Ortalama
    var o1NotOrtalama = (o1matnot1 + o1matnot2 + o1matnot3) / 3;
    console.log(parseInt(o1NotOrtalama)); // ondalıklı kısmı istemiyorsak int türüne çeviriz.
    console.log(typeof o1NotOrtalama);

    // Öğrenci 2 Not Ortalama
    var o2NotOrtalama = (o2matnot1 + o2matnot2 + o2matnot3) / 3 ;
    console.log(parseFloat(o2NotOrtalama)); // Ondalıklı kısmı float'a alailiriz veya float ile gösterebiliriz.
    console.log(typeof o1NotOrtalama);



console.log("********************************************")


// Öğrenci 50 üzerinden geçti mi geçmedi mi

    // Öğrenci 1 Geçti mi 
    console.log(o1NotOrtalama >= 50); // geçti ise true geçmedi ise false

    // Öğrenci 2 Geçti mi 
    console.log(o2NotOrtalama >= 50);