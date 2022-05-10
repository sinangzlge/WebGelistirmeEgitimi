// Element Silme & Güncelleme : Removing & Changing

const taskList = document.querySelector('#task-list');

// *** remove element : Element Silme
// taskList.remove(); // listenin kendisini bu şekilde sileriz.
// taskList.childNodes[7].remove(); // liste elemanından her hangi birini silme text node'ları da göz önünde bulundurmalıyız.
// taskList.children[3].remove(); // liste elemanı silme text node ile uğraşmak istemezsek.
// taskList.removeChild(taskList.children[3]); // ulaştığımız elemanın alt elemanından 3. index elemanını sildik.



// *** removing attribute : Attribute silme
// taskList.children[1].removeAttribute('class'); // 1. elemanın attribute sildik.

// for (let i = 0; i < taskList.children.length; i++){ // for ile bütün eleman attribute'larını silebiliriz.
    // taskList.children[i].removeAttribute('class');
// }


// console.log(taskList);



// *** Replacing Elements : Elementleri değiştirme
// const cardHeader = document.querySelector('.card-header');

// creating element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);


// *** Classes 
let val;

link = taskList.children[0].children[0];

// val = link.className; // link üzerindeki class'lara ulaştık.
// val = link.classList; // class'ları listeler ve dizi içerisinde getirir.
// // val = link.classList[0]; // ilk class
// // val = link.classList[1]; // ikinci class

// link.classList.add('new'); // new adında yeni bir class ekledik.
// link.classLink.remove('new'); // new class'ını sildik.

// Attributes 
val = link.getAttribute('data-id'); // data-id attribute çağırdık
val = link.getAttribute('href'); // href attribute çağırdık.
val = link.setAttribute('href','https://www.sadikturan.com'); // href attribute'umuza link ekledik.
val = link.hasAttribute('href'); // attribute var mı yok mu diye kontrol ediyoruz. dönen değer boolean tipinde var ise true yok ise false cevabı döner.
val = link.hasAttribute('data-val'); // false




console.log(val);






