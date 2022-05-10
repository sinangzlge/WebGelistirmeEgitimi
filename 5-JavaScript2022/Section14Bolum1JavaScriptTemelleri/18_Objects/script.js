// Objects : 

// Tekli obje tanımı
let kullaniciA = {
    "ad": "Sadık",
    "soyad": "Turan",
    "yas": 38,
    "adres": {
        "sehir": "Kocaeli",
        "ilce": "izmit",
    },
    "hobiler": ["sinema", "spor"]
}

let kullaniciB = {
    "ad": "Sinan",
    "soyad": "Gezelge",
    "yas": "20",
    "adres": {
        "sehir": "İstanbul",
        "ilce": "Şişli"
    },
    "hobiler": ["Kitap", "Müzik"]
}


let sonuc;

// oluşturduğumuz object'in içerisinden veri çağırma
sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA.yas;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

// objectleri dizi içerisinde tanımlama
let kullanicilar = [
    kullaniciA,
    kullaniciB
];

// Dizi içerisinden object'imizi çağırma
// sonuc = kullanicilar[1];
sonuc = kullanicilar[1].ad;


// çoklu object tanımlama dizi içerisine birden fazla object tanımalama
let urunler = [
    {
        "urun_adi": "Samsung s19",
        "urun_fiyat": 10000
    },
    {
        "urun_adi": "Samsung s20",
        "urun_fiyat": 15000
    }
]


// sonuc = urunler[0];
sonuc = urunler[1].urun_adi;

console.log(kullaniciA);
console.log(sonuc);
