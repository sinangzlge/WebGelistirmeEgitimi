// Event Bubbling Ve Capturing Olayları


// Event Bubbling : İçten dışa doğru olayları aktarır.

// const form = document.querySelector('form');
// const cardBody = document.querySelector('.card-body');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');


// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation(); // bir üst tetiklenmeler çalışmaz sadece bu function click olur. dıştaki olay aktarılmaz.
// });

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });


// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });


//*************************************************** 


// Event Capturing  : Dıştan içe doğru olayları aktarır.
    // 3. parametre default false'dır. biz true yaptığımızda olayları dıştan içe doğru olayları aktarır.

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation(); // bir üst tetiklenmeler çalışmaz sadece bu function click olur. dıştaki olay aktarılmaz. capturing'de dıştaki veya içteki aktarımları durdurduğumuzda ör: form'a tıkladık en üst olay aktarımı gelir ve durur.
// },true);

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });


// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });



//*************************************************** 


// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     });
// });


const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){

    if(e.target.className==='fas fa-times'){
        // console.log("icon"); // icona tıkladığında icon mesajını alır. 

        // console.log(e.target.parentElement); // bu ise fas-fa-times'a tıkladığında üst etiketini getirir.

        // console.log(e.target.parentElement.parentElement); // iki üst etiket (kapsayıcı) elemanını getirir.

        e.target.parentElement.parentElement.remove(); // icon'a tıkladığında bu şekilde iki üst etiketi remove metotu ile silebiliriz. burada x tıkladığında li elemanı o eleman silinir.

        e.preventDefault();

    }

});