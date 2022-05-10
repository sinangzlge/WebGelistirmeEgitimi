// Functions : Fonksiyonlar

function yasHesapla(dogumYili){
    return 2020 - dogumYili;
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);


function EmekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} bey emekli olmanıza ${emeklilik} yıl kaldı `);
    }else{
        console.log("Zaten emekli oldunuz");
    }
}

EmekliligeKacYilKaldi(2012,"Ada");
EmekliligeKacYilKaldi(2010,"Yiğit");
EmekliligeKacYilKaldi(2017,"Çınar");
EmekliligeKacYilKaldi(1950,"Ahmet");
