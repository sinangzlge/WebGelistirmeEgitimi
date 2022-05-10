


// Selecting Elements : Eleman Seçimleri

// *** Single elements : Tekli Eleman Seçimi
// document.getElementById();
// document.querySelector(); id seçiminde (#) | class seçiminde (.)



// *** Multiple Elements : Çoklu eleman


// class name
//document.getElementsByClassName();

let val;
// val = document.getElementsByClassName('list-group-item'); // burada list-group-item'a sahip bütün class'lar listelenir. HTMLCollection aracılığıyla gelir.

// val = document.getElementsByClassName('list-group-item')[0]; // burada index numarası ile class'lardan 0. index'e karşılık gelen class'ı alan etiketi getiriyor.
// val = document.getElementsByClassName('list-group-item')[2]; // 2. index numarasına karşılık gelen class'ı alan etiketi getiriyor.

// val = val[0]; // ulaştığımız collection üzerinden de istediğimiz elemanı index numarası ile alabiliyoruz.


// val[1].style.color='blue'; // ulaştığımız class'ın 1. index'ine karşılık gelen değerin css'ini değiştirdik.
// val[1].style.fontSize='25px';
// val[2].textContent='new item'; 



// // for döngüsü ile elemanlara ulaşıp ekrana yazdırdık. ve css değerlerini vs değiştirdik.
// for(let i = 0; i < val.length; i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent('new items'));
// }




// document.getElementsByTagName(); // Etiket isimleri ile elementlere ulaşma

// val = document.getElementsByTagName('li'); // li etiketlerini alıyoruz.
// val = document.getElementsByTagName('a'); // a etiketlerini alırız. hepsini


// sadece task-list altındaki a etiketlerine ulaştık.
// val = document.getElementById('task-list'); 
// val = val.getElementsByTagName('a'); 
// val = document.getElementById('task-list').getElementsByTagName('a'); // sadece task-list altındaki a etiketlerine ulaştık. 



// document.querySelectorAll();

// val = document.querySelectorAll('li'); 

// val.forEach(function(item){ // foreach ile ultaştığımız li elemanlarını tek tek yazdırabiliriz.
//     console.log(item);
// });

// val.forEach(function(item,index){
//     item.textContent = `${index} - hello`; // li elemanlarını item içerisine atıp text content ile index numaları ve hello yazısını li etiketlerine yazdırdık.
// });

// val = document.querySelectorAll('li:nth-child(odd)'); // :nth-child(odd) : tekil (tek) elemanlara ulaşır.

val = document.querySelectorAll('li:nth-child(even)'); // :nth-child(even) : çiftli (çift) elemanlara ulaşır.

val.forEach(function(item){
    item.style.background='#fff'; // tekli elemanlara ulaşıp arka plan rengini değiştirdik. css ile
})






console.log(val);










