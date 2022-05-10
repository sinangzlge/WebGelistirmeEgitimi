// Döngüler :


// for döngümüz parantezler içerisindeki koşul true olduğu sürece dönüp süslü parantezler içerisindeki kodları çalıştırır. false olduğunda durur.
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }



// let toplam = 0;
// for (let i = 1; i <= 10; i++) {
//     toplam += i;
//     // console.log(toplam); // her toplandığında ekrana yazdırılır çünkü döngü dönüyor.
// }
// console.log(toplam); // döngü bittikten sonra toplamı ekrana yazdırılır.



// bu şekilde sayıların içerisindeki elemanları for döngüsü ile ekrana yazdırabiliyoruz.
// let sayilar = [1,4,5,8,4,3];
// for(let i = 0; i < sayilar.length; i++){
//     console.log(sayilar[i]);
// }

// Sayıların toplamını almak için for döngüsünü kullanalım.
// let sayilar = [1,4,5,8,4,3,12,5,3,5];
// let toplam = 0;
// for(let i = 0; i < sayilar.length; i++){
//     toplam += sayilar[i]; 
// }
// console.log(toplam);



// buradaki sayilar'ın index numaralarını indexNumber içerisine tek tek (in) ile aktarıyoruz.
// let sayilar = [1,4,5,8,4,3,12,5,3,5];
// for (let indexNumber in sayilar){ 
//     console.log(indexNumber);
// }

// Bu şekilde de toplama işlemi yapabiliriz.
// let sayilar = [1,4,5,8,4,3,12,5,3,5];
// let toplam = 0;
// for (let i in sayilar){ 
//     toplam += sayilar[i]; 
// }
// console.log(toplam);




// buradaki sayilar'ın içerisindeki değerleri sayi içerisine tek tek (of) ile aktarıyoruz. (of) ile index numarası ile uğraşmadan direk sayıları sırasıyla getirir.
// let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];
// for (let sayi of sayilar) {
//     console.log(sayi);
// }

// Toplama işlemi
// let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];
// let toplam = 0;
// for (let sayi of sayilar) {
//     toplam += sayi;
// }
// console.log(toplam);



// objelerimizi for içerisinde çağıralım
let user = {
    "name": "Sadık Turan",
    "username": "sadikturan",
    "password": "12345",
    "email":"info@sadikturan.com"
};  

for (let key in user){
    console.log(key);
    console.log(user[key]);
}

