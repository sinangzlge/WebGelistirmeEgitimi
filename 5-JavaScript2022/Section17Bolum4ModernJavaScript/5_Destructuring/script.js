// Destructuring


// Destructuring assignment
var a, b, rest;

[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 10, b: 20 });
console.log(a);
console.log(b);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a);
console.log(b);
console.log(rest);


// **************************************************


// Array destructuring

const arrConfig = ['localhost', '8080', '900'];

// ES5
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];
// console.log(server,port,timeout);



// ES6

// const [server,port,timeout] = arrConfig;
// console.log(server,port,timeout);



// **************************************************


// Object destructuring

// const objConfig = {
//     server : 'localhost',
//     port : '8080',
//     timeout : '900'
// }
// ES5
// var server = objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;
// console.log(server,port,timeout);


// ES6
// const [server,port,timeout] = objConfig;
// console.log(server,port,timeout);


// let {timeout : t} = objConfig; // timeout'u alır t'ye aktarır.
// console.log(t);



// *******

// const objConfig = {
//     server : 'localhost',
//     port : '8080',
//     timeout: 800;
// }

// let {server,port,timeout=900} = objConfig; // timeout'ta değer yok ise undefined olarak döner biz burada timeout'a değer verebiliriz. burada değer versekte yukarıda timeout'a farklı bir değer atandıysa atanan değeri alır.
// console.log(server,port,timeout);



// *******
const days = ['Monday', 'Thueday', 'Wednesday', 'Thursday', 'Friday'];

const [, , wed, , fri] = days; // burada boş geçmek istediğimiz değerleri virgül (,) ekleyerek geçebiliriz. bu sayede wed = Wednesday fri = Friday atanmış olur.

console.log(wed,fri);