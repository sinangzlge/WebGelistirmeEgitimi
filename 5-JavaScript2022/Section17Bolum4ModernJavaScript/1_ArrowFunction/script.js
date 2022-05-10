// Arrow Functions

// ES5
let welcomeES5 = function () {
    console.log('Hello from ES5');
}
welcomeES5();

// ES6
let welcomeES6 = () => {
    console.log('Hello from ES6');
}
welcomeES6();


// *****************************************************

// with parameters 
//ES5
let multiplyES5 = function (x, y) {
    return x * y;
}
console.log(multiplyES5(10, 5));

// ES6
// let multiplyES6 = (x, y) => {return x * y}; // parantezli
let multiplyES6 = (x, y) => x * y; // parantezsiz kullanımda return yazmamıza gerek yok

console.log(multiplyES6(20, 5));

// *****************************************************


// ES5
let splitES5 = function (text) {
    return text.split(' ');
}
console.log(splitES5('Modern Javascript Kursu'));

// ES6
let splitES6 = text => text.split(' ');
console.log(splitES6('Modern Javascript Kursu'));

// *****************************************************

// Object Literals

// ES5
let getProductES5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5('1', 'Samsung S8'));

// ES6
let getProductES6 = (id, name) => (
    {
        id: id,
        name: name
    }
);
console.log(getProductES6('1', 'IPhone 7'));

// *****************************************************

const phones = [
    { name: 'IPhone 8', price: 3000 },
    { name: 'IPhone 6', price: 2000 },
    { name: 'IPhone 5', price: 1000 },
    { name: 'IPhone 7', price: 2500 }
];

// ES5
let priceES5 = phones.map(function (phones) {
    return phones.price;
});
console.log(priceES5);

// ES6
let priceES6 = phones.map(phones => phones.price);
console.log(priceES6);

// *****************************************************

const arr = [1, 2, 3, 6, 10, 20, 30, 50, 55, 61, 79];

// ES5
let evenES5 = arr.filter(function (a) {
    return a % 2 == 0;
});
console.log(evenES5);

// ES6
let evenES6 = arr.filter(a=>a%2==0);
console.log(evenES6); 