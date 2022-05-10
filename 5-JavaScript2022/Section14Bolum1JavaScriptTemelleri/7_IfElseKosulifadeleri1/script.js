// İf / Else Koşul İfadeleri - 1 

/* // if else kullanımı 
let isLoggedin = true;

// if'de () parantez içerisindeki koşul true ise if süslü parantezler arasındaki kodlar çalışır 
if (isLoggedin) {
    console.log("uygulamaya giriş yapıldı.");
}
// birden fazla da if kullanabiliriz.
// if (!isLoggedin) {
//     console.log("merhaba");
// }

// if () parantezi false ise else süslü parantezler arasındaki kodlar çalıştırılır.
else {
    console.log("Uygulamaya Giriş yapılmadı");
}

*/


/*  // if else kullanımı 2
let username = "sadikturan";
let isLoggedin = (username == "sadikturan"); 

if (isLoggedin){ 
    console.log("uygulamaya giriş yapıldı.");
}
else {
    console.log("uygulamaya giriş başarısız");
}

*/


// if else kullanımı 3 if içerisinde if else kullanımı
let username = "sadikturan";
let password = "1234";

if (username == "sadikturan") {
    if (password == "1234") {
        console.log("uygulamaya giriş yapıldı.");
    } else {
        console.log("parola yanlış");
    }
}
else {
    console.log("kullanıcı adı yanlış;");
}