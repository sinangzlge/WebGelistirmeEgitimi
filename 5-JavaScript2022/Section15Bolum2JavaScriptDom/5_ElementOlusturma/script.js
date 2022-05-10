// Element Oluşturma : Creating Elements

// create element
const li = document.createElement('li');

// add class
li.className='list-group-item list-group-item-secondary';
// li.className='list-group-item list-group-item-secondary';

// attribute
li.setAttribute('title','new item');
li.setAttribute('data-id','5');

// text node
const text = document.createTextNode('new item');
li.appendChild(text); // li etiketine oluşturduğumuz text node'u appendChild ile aktarabiliyoruz.

// a etiketini oluşturalım
const a = document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>';

// append a to li
li.appendChild(a); // oluşturduğumuz a etiketini li içerisine attık.

// append li to ul
document.querySelector('#task-list').appendChild(li); // ul etikeini çağırıp li etiketini ul içerisine aktardık.



console.log(li);