// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

// load items
loadItems();

// call event listeners
eventListeners();


function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);

}

// load items
function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    })
}

// get items from Local Storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// set item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('item',JSON.stringify(items));
}

// delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(items === text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}

// create item 
function createItem(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));


    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);
}

// add new item
function addNewItem(e) { 
    if (input.value === '') {
        alert('add new item');
    }

    // create (item
    createItem(items.value);

    // save to Local Storage
    setItemToLS(input.value);


    // clear input
    input.value = '';


    console.log(li);


    e.preventDefault();
}

// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();

            // delete item from Local Storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);

        }
    }

    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {

    if (confirm('Are You Sure?')) {
        //1.yol : alternatif
        // taskList.innerHTML='';
        // 2.yol : 
        // taskList.childNodes.forEach(function (item) {
        //     if (item.nodeType === 1) {
        //         item.remove();
        //     }
        // });
        // 3.yol
        while (taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        };
        localStorage.clear();
    }



    e.preventDefault(); // sayfa refresh olmasın diye
}