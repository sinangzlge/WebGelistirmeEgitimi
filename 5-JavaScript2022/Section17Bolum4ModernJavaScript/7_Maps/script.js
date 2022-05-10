// Maps : key/value pairs (collection)

let val;

const numbers = new Map();

numbers.set(1, 'one');
numbers.set('2', 'two');
numbers.set(3, 'three');
numbers.set('four', 'four');

val = numbers;


val = numbers.get(1); // değerleri almak için get method'unu kullanıyoruz key değerlerine göre alır.
val = numbers.get('2');
val = numbers.get('four');


val = numbers.size; // kaç tane değer olduğunu söyler.

val = numbers.has(1); // key değeri ile içeride eleman olup olmadığını kontrol ederiz. varsa true yoksa false döner

val = numbers.delete('four'); // eleman silebiliyoruz.
val = numbers.has('four'); // değeri sildiğimizden false cevabı döner.

// numbers.clear(); // bütün değerleri siler.

console.log(val);


for (var [key,value] of numbers) { // for ile değerleri ekrana yazdırabiliriz.
    console.log(key + ' = ' + value);
}

for (var [key,value] of numbers.entries()) { // for ile entries metodu ile de değerleri ekrana yazdırabiliriz.
    console.log(key + ' = ' + value);
}

for (var key of numbers.keys()){ // ekrana sadece key değerlerini yazdırırız.
    console.log(key); 
}

for (var value of numbers.values()) { // sadece value değerlerini yazdırırız.
    console.log(value);
}

numbers.forEach (function (key,value) { // foreach ile de key ve value değerlerimizi yazdırabiliriz.
    console.log(key+ ' - '+value);
});




var first = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);

var second = new Map([
    [4,'four'],
    [5,'five']
]);

var merged = new Map([...first,...second]); // yukarıda tanımladığımız iki diziyi birleştiriyoruz.

console.log(merged);