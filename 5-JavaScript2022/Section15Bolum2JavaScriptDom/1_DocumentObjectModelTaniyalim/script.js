// Document Object Model'i Tanıyalım (Dom) :

let val;

val = window.document; // ekrandaki dökümanları alırız.
val = document.all; // bütün dökümanları collection aracılığıyla getirir.
val = document.all.length; // kaç tane döküman olduğunu gösterir.
val = document.all[10]; // 10. elemanını getirir.
val = document.head; // head etiketi ve arasındaki kodları getirir.
val = document.body; // body etiketi ve arasındaki kodları getirir.
val = document.anchors; // sayfadaki linkleri htmlCollection aracılığıyla alabiliyoruz.
val = document.URL; // sayfa url'sini getirir.
val = document.domain; // sayfanın domainini getirir.
val = document.images; // sayfadaki images'ları getirir.
val = document.title; // sayfanın title bilgisini alırız.
val = document.forms; // sayfadaki formları alırız. htmlCollection şeklinde gelir.
val = document.forms[0]; // 0. index'e karşılık gelen formu alırız.
val = document.forms[0].id; // 0. index'e karşılık gelen formun id'sini alabiliriz.
val = document.forms[0].method; // 0. index'e karşılık gelen formun method'unu alabiliriz.
val = document.forms[0].action; // 0. index'e karşılık gelen formun action'unu alabiliriz. yoksa url'i getirir.
val = document.scripts; // sayfadaki scriptleri alabiliriz.
val = document.scripts[2]; // 2. index'e karşılık gelen script'i alabiliriz. 
val = document.scripts[2].getAttribute('src'); // script'in attribute'ını alabiliriz (src) attribute'nın içeriğini alabiliriz.
val = document.getElementById('txtTaskName'); // bununla txtTaskName'e karşılık gelen id tanımlamasını alabiliriz.


console.log(val);