// Date & Times

let simdi = new Date(); // Şimdiki tarih - saat'i getirir.

sonuc = simdi; 

// Get Methods : Olan tarih bilgilerini alırız.
sonuc = simdi.getDate(); // Gün bilgisini alırız. sayıısal olarak.
sonuc = simdi.getDay(); // gün bilgisini hangi günde isek onu alır 0 : pazar 6 : cumartesi
sonuc = simdi.getFullYear(); // Yıl bilgisini alırız.
sonuc = simdi.getMonth(); // Ay bilgisini alırız. 0 : Ocak
sonuc = simdi.getHours(); // Saat bilgisini alırız.
sonuc = simdi.getTime(); // saat bilgisini milisaniye cinsinden alırız.


// Set Methods : Olan tarihi istediğimiz bilgilerle değiştirebiliriz.
// simdi.setFullYear(2025); // olan tarih yılını 2025 ile değiştirdik.
simdi.setMonth(7); // ay bilgisini 7. ay olarak değiştirdik ay başlangıcı 0 : Ocak olarak tanımlıdır.
simdi.setDate(15); // Gün bilgisini 15 olarak değiştirdik.

sonuc = simdi;

let dogumTarihi = new Date(1990,5,15); // olan zamanı kendi istediğimiz tarihlerle değiştirdik. Ek olarak saat bilgilerini de ekleyebilirdik.

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); // simdi zamanından dogumTarihi zamanını çıkardık. yıl olarak
// sonuc = simdi - dogumTarihi; // Bu şekilde çıkarırsak bize milisaniye cinsinden çıkarılmış değeri getirir.

let milisecond = simdi - dogumTarihi; // milisaniye  olarak döndü
let saniye = milisecond / 1000; // milisaniye'yi saniye olarak alma 
let dakika = saniye / 60; // saniye'yi dakika olarak alma
let saat = dakika / 60; // dakika'yı saat olarak alma
let gün = saat / 24; // saatten gün alma 




console.log(gün);
console.log(typeof sonuc);

