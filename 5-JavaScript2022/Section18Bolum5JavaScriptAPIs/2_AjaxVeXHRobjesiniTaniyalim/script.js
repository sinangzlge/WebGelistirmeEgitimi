// Ajax Ve XHR Objesini Taniyalim : Ajax & XHR Object (Ajax : Asynchronous Javascript And XML)

var xhr = new XMLHttpRequest();



// xhr.onreadystatechange = function() { // her hangi bir durum değiştiğinde onreadystatechange tetikleniyor.
//     if( xhr.readyState === 4 && xhr.status ===200){
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('GET','msg.txt',true);
// xhr.send();



/*
// ReadyState özellikleri :
0 : request not initialized => istek başlatılmadı
1 : server conection established => sunucu bağlantısı kuruldu
2 : request received => istek alındı
3 : processing request => işleme isteği
4 : request finished and response is ready => istek tamamlandı ve yanıt hazır


Status : 
200 : "OK" =>  tamamlandı
403 : "Forbidden" => (Yasaklı) talep onaylanmadı
404 : "Not Found" => Bulunamadı

*/


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {

        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }else if(xhr.status === 404){
            console.log('Kaynak Bulunamadı');
        }
    }
}

xhr.onprogress= function(){
    console.log('On Progressing');
}


xhr.open('GET', 'msg.txt', true);
xhr.send();


console.log('hello');