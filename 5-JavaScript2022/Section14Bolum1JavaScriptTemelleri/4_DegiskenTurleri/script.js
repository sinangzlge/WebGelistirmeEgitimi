// Değişkenler Türleri : 
    // Değişken tanımlarken aynı isimde birden fazla değişken tanımlayamayız.


// string : tırnaklar içerisindeki karakterler topluluğudur
    var urunAdi  = "İphone 13";  // string
    let urunFiyati = "15000";    // string 

    console.log(typeof urunAdi);  // typeof : değişkenin tipini gösterir.
    console.log(typeof urunFiyati);

// Number : 
    let urunFiyati2 = 15000; 
    console.log(typeof urunFiyati2);

        
// number toplama 
    let sayi3 = 10;
    let sayi4 = 20;

    console.log(sayi3 + sayi4);


// String toplama : 
    let sayi1 = "10";
    let sayi2 = "20";

    console.log(sayi1 + sayi2); // string toplamada topladığımız değerleri birleştirir. yan yana yazar.

    // string to number 
    console.log(Number(sayi1)+ Number(sayi2)); // Number ile string değişkenin içeriğini number değişkeni yapabiliyoruz ancak string değişken içerisindeki değer sayısal olmalı.


    // number to string 
    let sayi5 = 10;
    let sayi6 = 20;

    console.log(sayi1.toString() + sayi2.toString()); // numberdan string'e çevirmek için .toString()  ile yapabiliriz.

    let isim = "Sena";
    let soyad = "Turan";
    console.log(isim +" "+soyad);


// boolean : evet-doğru ise True , hayır-yanlış ise False 
    let = sinavNotu = 70;
    let basarilimi = (sinavNotu >= 50);
    console.log(basarilimi); 
    console.log(typeof basarilimi); 


// undefined : Tanımsız değer
    let yas; // değişkenimize her hangi bir değer tanımlamazsak undefined olarak atanır. tanımsız değer.

    console.log(yas);
    console.log(typeof yas);

    yas = ""; // bu şekilde tırnak atama yaparsak boşluk olur ve string tipini alır.
    console.log(yas);
    console.log(typeof yas);

