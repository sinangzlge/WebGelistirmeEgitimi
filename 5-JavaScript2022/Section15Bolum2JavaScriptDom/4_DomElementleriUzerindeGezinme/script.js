// Dom Elemenleri Üzerinde Gezinme : Traversing the Dom

// not : parent : üst kapsayıcı etiket element
// child - children : alt etiket element

let val;

let list = document.querySelector('.list-group'); // list group class'ımıza ulaştık. *querySelector'dan dönen değerler NodeList olarak döner

val = list; // list'i val'e attık

// childnodes : ul altındaki li'leri listeledik listelerken li'ler arasındaki boşlukları text node olarak alır.
val = list.childNodes; // bütün elemanlara ulaştık.
val = list.childNodes[0]; // 0. index'e ulaştık.
val = list.childNodes[0].nodeName; // nodename'ine ulaştık. yani ismine
val = list.childNodes[0].nodeType; // tipine ulaştık. : text
val = list.childNodes[1].nodeType; // tipine ulaştık. : element


// children : liste elemanları getirir.
val = list.children; // bütün elemanlara ulaştık
val = list.children[0]; // listenin 0. index elemanını getirir.
val = list.children[2]; // 2. indexe karşılık gelen element

val = list.children[2].textContent='new item'; // 2 index'teki elemanın text'ini değiştirdik text değiştirirken içinde etiket vs varsa hepsini siler bizim parantezler arasında yazdığımız içerik getirilir.
val = list.children[3].children; // 3 index'e karşılık gelen element'in altındaki elemente ulaştık.

val = list.firstChild; // listenin ilk elementi : text
val = list.firstElementChild; // listenin ilk elementi : etiket

val = list.lastChild; // listenin son elementi : text
val = list.lastElementChild; // listenin son elementi : etiket 

val = list.childElementCount; // listenin kaç elementi var?

val = list.parentNode; // listenin bir üst kapsayıcı etiketine ulaşırız.  
val = list.parentElement; // üst kapsayıcı etiket elementini getirir.
val = list.parentElement.parentElement; // üst kapsayıcı element'in de kapsayıcı elementine gidiyoruz.

// sonraki
val = list.children[0].nextSibling; // 0. index'ten sonraki elemana gideriz text node gelir.
val = list.children[0].nextElementSibling; // 0.index'ten sonraki element'e direk sonraki etikete gideriz.

// önceki
val = list.children[1].previousSibling; // 1. index'ten önceki elemena gideriz : text 
val = list.children[1].previousElementSibling; // 1. index'ten önceki element'e gideriz önceki etiket.

// console.log(val);



// bütün alt elemanları ekrana for ile yazdırabiliriz.
// for(let i = 0; i < list.children.length;i++){
//     console.log(list.children[i]);
// }



// ulaştığımız alt elemanların text node olup olmadığını kontrol edebiliriz.
for(let i = 0; i< list.childNodes.length;i++){
    if(list.childNodes[i].nodeType===3){
        console.log(list.childNodes[i]);
    }
}