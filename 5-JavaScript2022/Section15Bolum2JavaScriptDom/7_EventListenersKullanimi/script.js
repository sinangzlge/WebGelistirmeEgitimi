// Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');


// function içerde tanımlama tekli function kullanımında
// btn.addEventListener('click',function(){ // butona click ekledik tıklandığında fonksiyonumuz çalışacak.
//     console.log('btn clicked');
// });



// function dışarda tanımlayıp çağırma çoklu funcion çağırma
// function btnClick() {
//     console.log('btn clicked');
// }
// function btnClick2() {
//     console.log('btn 2 clicked');
// }

// btn.addEventListener('click', btnClick);
// btn.addEventListener('click', btnClick2); // aynı buttona birden fazla click olayı atayabiliriz.
// btn2.addEventListener('click', btnClick);




// btn.addEventListener('click', function (e) { // function'a parametre verip
//     console.log('btn clicked');
//     e.preventDefault; // parametreye ulaşıp bunu yazdığımızda a etiketindeki link (href) çalışmayacak.
// });




btn.addEventListener('click', function (e) { 
    
    let val;

    val = e;

    val = e.target; // hangi buttonun tıklandığının etiketini getirir.
    val = e.target.id; // click olan objenin id bilgisini alabiliriz.
    val = e.target.classList; // tıklanılan objenin yani etiketin class'larını listeler.
    val = e.type; // type'nı yazdırırız : bu butonun type'ı click.




    console.log(val);
    
    
    e.preventDefault; 
});




