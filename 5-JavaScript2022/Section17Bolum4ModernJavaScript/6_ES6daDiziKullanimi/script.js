// ES6'da Dizi Kullanımı : Arrays in ES6

const boxes = document.querySelectorAll('.box');

// ES5
// let boxesES5 = Array.prototype.slice.call(boxes);
// boxesES5.forEach(function(box){
//     box.style.backgroundColor='green';
// });


// ES6
// Array.from(boxes).forEach(box => box.style.backgroundColor='green');



// ES5
// let boxesES5 = Array.prototype.slice.call(boxes);
// for(let i = 0; i<boxesES5.length;i++){
//     if(boxesES5[i].className=='box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor='blue';
// }


// ES6
// var boxesES6 = Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }
//     box.textContent="I'm changed";
//     box.style.backgroundColor='green';
// }


// from
// let arr = Array.from['Modern JavaScript'];
// console.log(arr); //  arr içerisindeki bütün karakterleri tek tek dizi halinde ekrana yazdırır.

const products = [
    { name: 'Samsung S8', price: 3000 },
    { name: 'Samsung S8', price: 3000 },
    { name: 'Samsung S7', price: 2000 },
    { name: 'Samsung S6', price: 1000 }
]

// console.log(Array.from(products,prd =>prd)); // Dizi elemanlarını yazdırırız.
// console.log(Array.from(products,prd =>prd.name)); // Dizi elemanlarının name'ini yazdırırız.
console.log(Array.from(products, prd => prd.name == 'Samsung S8')); // Samsung S8 name'ine karşılık gelen değeri true gelmeyen değeri false olarak boolean türünde döndürür.
console.log(products.find(prd => prd.name == 'Samsung S8')); // istediğimiz değeri bulup alabiliriz. object olarak gelir.
console.log(products.filter(prd => prd.name == ' Samsung S8')); // objeyi bize dizi içerisinde getirir.
console.log(products.findIndex(prd => prd.price == 2000)); // bize 2000'e karşılık gelen değerin index numarasını getirir.
console.log(products.findIndex(prd => prd.price == 5000)); // olmayan bir değer aradığımızda -1 değeri gelir.



let numbers = ['a', 'b', 'c'];

let entries = numbers.entries();
for (let i of entries) {
    console.log(i);
}

let keys = numbers.keys();
for (let i of keys){
    console.log(i);
}

let values = numbers.values();
for (let i of values){
    console.log(i);
}


