// Operatörler
let sonuc;

    // ayrı ayrı tanım
    // let a = 10;
    // let b = 20;
    // let c = 30;

    // birlikte tanım
    let a = 10, b = 20, c = 32, d = 10;


// 1 - Aritmatik Operatörler

    sonuc = a + b; // toplama
    sonuc = a - b; // çıkarma
    sonuc = a * b; // çarpma
    sonuc = a / b; // bölme
    sonuc = c % a; // mod alma : tek mi çift mi olduğunu anlamak için kullanırız 0 kalıyorsa çift, 1 kalıyorsa tektir.
    // sonuc = a++; // a + 1 ilk önce a sonuc'a yazdırıldıktan sonra arttırılır.
    // sonuc = ++a; // a + 1 a önce arttırılır sonra sonuc'a yazdırılır.
    // sonuc = a--; // a - 1 ilk önce a sonuc'a yazdırıldıktan sonra eksiltilir..
    // sonuc = --a; // a - 1 a önce eksiltilir sonra sonuc'a yazdırılır.




// 2 - Atama Operatörleri 
    sonuc = a;
    sonuc += a; // sonuc = sonuc + a
    sonuc -= a; // sonuc = sonuc - a
    sonuc *= a; // sonuc = sonuc * a 
    sonuc /= a; // sonuc = sonuc / a
    sonuc %= a; // sonuc = sonuc % a

    sonuc += (a + b); // sonuc = sonuc + a + b


// 3 - Karşılaştırma Operatörleri 
    sonuc = a == b; // a b'ye eşit mi?  gelen değer true veya false olarak boolean türünde değer getirecek. cevap : false
    sonuc = (a == d); // a d'ye eşit mi ? parantez içerisinde de yazabiliriz okunurluk açısından daha etkili. cevap true 
    sonuc = (a != b); // a b'ye eşit değil mi? eşit değil ise True eşitse false 
    sonuc = (3 === "3") // burada hep değer kontrolü hem de tip kontrolü yaptırıyoruz. cevap false gelir çünkü tipleri farklıdır. 
    sonuc = (a > b); // a b'den büyük mü? evet ise true değilse false
    sonuc = (a >= d); // a d'den büyük mü, eşit mi ? burada hem büyük mü büyük değilse eşit mi diye sorgularız. büyük ise true eşit ise de true cevabını alırız.
    sonuc = (a < b); // a b'den küçük mü? evet ise true değilse false
    sonuc = (a <= d); // a d'den küçük mü, eşit mi? burada hem küçük mü küçük değilse eşit mi diye sorgularız. küçükse de true eşit ise de true cevabını alırız.

// 4 - Mantıksal Operatörler

    // && (And - Ve) 

        // true  && true  => true
        // true  && false => false
        // false && false => false

        sonuc = (a>b) && (a>c) // sorduğumuz soruları birleştiriyoruz.


    // || (Or - Veya) 

        // true  && true  => true
        // true  && false => false
        // false && false => false

        sonuc = (a>b) || (a>c)   


    // ! (Not - Değildir) 

        // !true => false
        // !false => true
         
        sonuc = !(a>b) 




console.log(sonuc);
