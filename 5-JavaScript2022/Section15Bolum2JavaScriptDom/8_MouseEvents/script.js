// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


// click events (tıklama): click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);



// double click events (çift tıklama) : dblclick
// btn.addEventListener('dlbclick',eventHandler);



// mouse down : tıklandığında
// btn.addEventListener('mousedown',eventHandler); 
// // mouse up : tıklama bırakıldığında
// btn.addEventListener('mouseup',eventHandler);



// mouseenter : belirtilen objenin üzerine geldiğinde
// ul.addEventListener('mouseenter',eventHandler);
// // mouseleave : üzerinden çıktığında
// ul.addEventListener('mouseleave',eventHandler);



// // mouseover : nesnenin alt elemanları arasında geçiş yaptığında üzerine gelindiğinde
// ul.addEventListener('mouseover',eventHandler);
// // mouseout : alt elemanlardan li üzerinde iken onun alt veya başka li'ye geldiğimizde
// ul.addEventListener('mouseout',eventHandler);



// mouse move : mouse üzerinde gezdiği sürece çalışır ve koordinat bilgilerini verir.
// ul.addEventListener('mousemove',eventHandler);


// h5 üzerine koordinatlarımızı yazdıralım
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);


function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent= `Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`; 
    // event.offsetX : sağ'dan sola koordinat
    // event.offsetY : üst'ten alta koordinat
};
