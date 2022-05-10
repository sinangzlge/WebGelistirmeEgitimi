// Keyboard Events

const input = document.querySelector('#txtTaskName');

const form = document.querySelector('form');

const select = document.querySelector('#select');

// keydown : tuşa tıklanıldığında
// input.addEventListener('keydown', eventHandler);
// // keyup : tuştan elini çektiğinde
// input.addEventListener('keyup',eventHandler);
// // keypress
// input.addEventListener('keypress',eventHandler);

// focus : obje üzerine geldiğinde
// input.addEventListener('focus',eventHandler);
// // blur : obje üzerinde çıktığında
// input.addEventListener('blur',eventHandler);

// // cut : değer kesiminde 
// input.addEventListener('cut',eventHandler); 
// // paste : değer yapıştırdığımızda
// input.addEventListener('paste',eventHandler);

// select : değer seçiminde : girilen değerin her hangi bir kısmını seçtiğimizde
// input.addEventListener('select', eventHandler);

// change : değer değiştirdiğimizde
select.addEventListener('change',eventHandler);



// form içinde events işlemleri
// submit
// form.addEventListener('submit', eventHandler);




function eventHandler(e) {
    console.log('event type : ' + e.type); // event tipi
    // console.log('key code : '+e.keyCode); // girilen değerin kodu
    console.log('value : '+e.target.value); // elemana gidip girilen değeri alıyoruz. 
    // e.target.style.backgroundColor='yellow'; // focus olduğunda ilgili elemana renk verebiliriz.


    e.preventDefault(); // form submit'te form gönderilir sayfa refresh olmaz
};


