// Sets (Collection - Unique value)

let val;
var mySet = new Set();

// tekil bilgiler tutabiliyoruz aynı değerden ekleme yaparsak aynı değeri eklemez.
mySet.add(1);
mySet.add(2);
mySet.add(2); // aynı value değeri üstte de eklediğimizden dolayı bu değeri eklemez.
mySet.add(4);
mySet.add('iki');
mySet.add({ a: 1, b: 2 }); // objelerimizi de set içerisine ekleyebiliriz.

var obj = { a: 1, b: 2 };
mySet.add(obj);

val = mySet.has(1); // 1 değeri var mı yok mu kontrolü yapıyoruz var ise true yok ise false cevabı alırız.
val = mySet.has(3);
val = mySet.has(obj);

val = mySet.size; // kaç değer olduğunu öğreniriz.
mySet.delete(1); // eleman siler


console.log(val);
console.log(mySet);


// for ile elemanları ekrana yazdırma.
for(let item of mySet){
    console.log(item);
}

// key değeri value değerleri ile birlikte yazılır.
for(let item of mySet.keys()){
    console.log(item);
}

// value değeri de keylerle birlikte yazılır.
for(let item of mySet.values()){
    console.log(item);
}

// key ve value değerleri aynıdır.
for(let [key,value] of mySet.entries()){
    console.log(key,value);
}


console.log(Array.from(mySet)); // array (dizi)'lere çevirebiliriz.


let mySet2 = new Set([1,2,3,4]);
console.log(mySet2);


// interect : kesişimleri

// iki farklı set içerisinde aynı olan değerleri alırız.
// var interect = new Set(Array.from(mySet).filter(x=>mySet2.has(x))); // 1.yol
var interect = new Set([...mySet].filter(x=>mySet2.has(x))); // 2.yol


console.log(interect);


// difference : farkları
// iki farklı set içerisinde farklı olan değerleri alırız.
var difference = new Set([...mySet].filter(x=>!mySet2.has(x)));

console.log(difference)
