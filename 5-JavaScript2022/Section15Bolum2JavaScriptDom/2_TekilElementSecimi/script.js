// Selecting Elements : Eleman Seçimleri

// *** Single elements : Tekli Eleman Seçimi
// document.getElementById();
// document.querySelector(); id seçiminde (#) | class seçiminde (.)





// document.getElementById();
let val;

// val = document.getElementById('header'); // istediğimiz id değerine sahip elemanı alabiliriz.
// val = document.getElementById('header').id; // seçtiğimiz id elemanının id'sini alabiliriz.
// val = document.getElementById('header').className; // className'ini alabiliriz. seçilen id elemanının class ismini alıyoruz.


// val = document.getElementById('header'); 
// val = val.id; // bu şekilde de seçtiğimiz elemanın id'sini alabiliriz.
// val = val.className; // className'ini aldık.


// aşağıdaki gibi ulaştığımız id'nin style'ına ulaşıp css ataması yapabiliyoruz.
// val = document.getElementById('header'); 
// val.style.fontSize='45px';  // font-size: yazı boyutunu 45px yaptık.
// val.style.color='red'; // color : yazı rengini kırmızı yaptık.
// val.style.fontWeight='bold'; // font-weight : yazı tipini kalın yaptık.
// // val.style.display='none'; // bu şekilde display none ile ekrandan değeri kaybettik.


// document.getElementById('header').innerText='my ToDo Application'; // innerText : ulaştığımız id'inin text'ini değiştirebiliyoruz.
// document.getElementById('header').innerText='<b> MY TO Do </b>'; // innerText'e etiket eklerdek etiketi de text olarak algılayıp işlevi çalışmaz. 
// document.getElementById('header').innerHTML='<b> MY TO Do Appl...</b>'; // innerHTML : ulaştığımız id'inin text'ini değiştirip etiket ekleyebiliyoruz. burada b etiketi ile kalın yapıp text'i değiştirdik. 

// console.log(val);





// document.querySelector(); id seçiminde (#) | class seçiminde (.)

console.log(document.querySelector('#header')); // id'ye göre seçim (#)
console.log(document.querySelector('.card-header')) // class'a göre seçim (.) birden fazla aynı class var ise bulduğu ilk elemanı seçer
console.log(document.querySelector('h1')); // etiket seçiminde direk etiket ismini yazıyoruz.
console.log(document.querySelector('div')); // seçtiğimiz etiketten birden fazla var ise bulduğu ilk etiketi getirir.

console.log(document.querySelector('li').style.color='red'); // seçtiğimiz li etiketinin style ile rengini kırmızı yaptık birden fazla li varsa ilk li bu rengi alır. tekli eleman seçimi yapıyoruz.

console.log(document.querySelector('li:last-child').style.color='blue'); // :last-child ile son elemana css ataması yaptık.

console.log(document.querySelector('li:nth-child(2)').style.color='yellow'); // :nth-child(2) ile index numarasına göre css ataması yapabiliriz. burada ikinci elemana sarı rengi verdik.

document.querySelector('li:nth-child(3)').textContent='task item 3'; // ulaştığımız üçüncü li elemanına textContent ile text ataması yaptık. içeriğini task item 3 olarak değiştirdik.

document.querySelector('li:nth-child(4)').textContent='task item 4'; // 4. elemanın text'ini değiştirdik. //textContent : her hangi bir etiketin text'ini değiştirmemizi sağlar.

// document.querySelector('li').className='list-group-item list-group-item-secondary'; // className : ile yeni bir class eklediğimizde olan class'ları siler ve bizim yazdığımız class'ları ekler.

document.querySelector('li').classList.add('active'); // classList.add : var olan class'ların yanına yeni bir class ekliyoruz. olan class'lar silinmez.




// *** Multiple Elements : Çoklu eleman


