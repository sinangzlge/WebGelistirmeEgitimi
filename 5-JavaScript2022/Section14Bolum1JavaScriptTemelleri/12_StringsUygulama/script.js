// Strings Uygulama :

let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

let sonuc;

// 1- url kaç karakterlidir?

    sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

    sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

    sonuc = url.startsWith("https"); // stringimizin aradığımız kelime ile başlıyor mu başlamıyor mu sorgusu yapabiliyoruz. https ile başlıyorsa true başlamıyorsa false cevabı gelir.
    
    if(sonuc){
        console.log("Evet başlıyor");
    }else{
        console.log("Hayır başlamıyor.");
    }




// 4- kursAdi içerisinde Eğitimi kelimesi var mı?

    if(kursAdi.indexOf("Eğitimi") > -1){ // -1 dediğimiz indexOf ile arama yaparken bize dönecek değer number sayısal değerdir. başlangıç 0 olduğundan her hangi bir değer yoksa -1 olarak geçer. -1'den büyük ise var küçük ise yok yazdırılır.
        console.log("Evet var");
    }else{
        console.log("Hayır yok");
    }

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
    // https://www.sadikturan.com/komple-web-geliştirme-kursu

    kursAdi = kursAdi.toLowerCase(); // bütün karakterleri küçük yaptık.
    kursAdi = kursAdi.replaceAll(" ","-"); // replaceAll ile bütün boşluk( ) karakterlerini tire(-) ile değiştirdiik..
    kursAdi = kursAdi.replace("ş","s").replace("ı","i"); // istediğimiz karakterleri değiştirdiks

    sonuc = `${url}/${kursAdi}`;
    



console.log(sonuc);