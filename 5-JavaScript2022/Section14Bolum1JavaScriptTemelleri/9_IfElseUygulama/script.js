// İf / Else Koşul İfadeleri - Uygulama

// 1 - Bir sayının 10 - 50 arasında olup olmadığını kontrol ediniz.

    // let sayi1 = 49;
    // if(sayi1>10 && sayi1<50){
    //     console.log("Sayı 10-50 arasındadır.");
    // }else{
    //     console.log("Sayı 10-50 arasında değildir.");
    // }


// 2 - Bir sayının pozitif ya da tek sayı olup olmadığını kontrol ediniz.

    // let sayi = 21;
    // if (sayi % 2 == 1 || sayi > 0){
    //     console.log("sayı pozitif tek sayıdır");
    // }


// 3 - x , y , z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)

    // let x = 10, y = 20, z = 30;

    // Ayrı Ayrı if kullanımı
        // if(x > y && x > z){
        //     console.log("X en büyük");
        // }
    
        // if(y > x && y > z){
        //     console.log("Y en büyük");
        // }

        // if(z > x && z > y){
        //     console.log("Z en büyük");
        // }

    // birlikte if kullanımı if - else if - else
        // if (x > y && x > z){
        //     console.log("X en büyük");
        // }else if(y > x && y > z){
        //     console.log("Y en büyük");
        // }else if(z > x && z > y){
        // console.log("Z en büyük")
        // }else{
        //     console.log("sayılar eşit");
        // }

// 4 - 2 vize (40%) ve 1 final (60%) notuna göre hesaplanan ortalama için;
    let vize1 = 10;
    let vize2 = 10;
    let final = 70;

    let ortalama = (((vize1 + vize2) / 2) * 0.40) +( final * 0.6);
    
    console.log("Ortalamanız : " + ortalama);
   

    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
        // if(ortalama>=50){
        //     console.log("Geçtiniz");
        // }else{
        //     console.log("Kaldınız");
        // }


    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
        // if(ortalama>=50 && final >= 50){
        //     console.log("Geçtiniz");
        // }else{
        //     console.log("Kaldınız");
        // }



    // c- Finalden 70 alındığında ortalama 50'ninn altında olsa bile dersten geçilsin.
        if(ortalama >= 50 || final >= 70){
            console.log("Geçtiniz");
        }else{
            console.log("Kaldınız");
        }


