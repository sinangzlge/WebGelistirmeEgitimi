// Functions application : Fonksiyonlar Uygulama


// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
// function kelimeYazdir(kelime, adet) {
//     for (let i = 0; i < adet; i++) {
//         console.log(kelime);
//     }
// }

// kelimeYazdir("Merhaba", 5);



// ************************************************************************************
// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
// function alanCevreHesapla(kisa, uzun) {
//     let alan = kisa * uzun;
//     let cevre = (kisa + uzun) * 2;
//     return `alan : ${alan} - çevre : ${cevre} `;
// }

// let sonuc = alanCevreHesapla(7, 10);
// sonuc = alanCevreHesapla(5,15);
// console.log(sonuc);





// ************************************************************************************
// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

// function yaziTuraAt(){
//     let random = Math.random();

//     if(random < 0.5){
//         console.log("yazi");
//     }else{
//         console.log("tura");
//     }
//     console.log(random);
// }

// yaziTuraAt();
// yaziTuraAt();
// yaziTuraAt();
// yaziTuraAt();



// ************************************************************************************
// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

// function tamBolenler(sayi){
//     let sayilar = [];

//     for(let i = 2; i < sayi; i++){
//         if(sayi % i == 0){
//             sayilar.push(i);
//         }
//     }

//     return sayilar;
// }

// console.log(tamBolenler(10)); // 2 , 5
// console.log(tamBolenler(15)); // 3 , 5
// console.log(tamBolenler(35)); // 5 , 7




// ************************************************************************************
// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.


function toplam() {
    let sonuc = 0;

    for (let i = 0; i < arguments.length; i++) { // arguments :  kaç tane parametre gelirse o kadar parametreyi function'a tanımlar
        sonuc += arguments[i];
    }

    return sonuc;

}

console.log(toplam(2, 5));
console.log(toplam(5, 10));
console.log(toplam(5, 10, 15));
console.log(toplam(5, 10, 15, 30));