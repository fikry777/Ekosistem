//----------------------------konfigurasi----------------------------------

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyDh5H9DJD4wimxp9hTkq9rVxFvfehBx0aU",
        authDomain: "nilaisiswa-1a7de.firebaseapp.com",
        databaseURL: "https://nilaisiswa-1a7de-default-rtdb.firebaseio.com",
        projectId: "nilaisiswa-1a7de",
        storageBucket: "nilaisiswa-1a7de.appspot.com",
        messagingSenderId: "866058052446",
        appId: "1:866058052446:web:ea8fd61b028b397cb865cf",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

window.onload=function(){
    dataKkm();
    dataKuis1();
}

//==================================menambahkan KKM=====================

//----------------------------------------------------------------------
kkm1= document.getElementById("kkm1");
kkm2= document.getElementById("kkm2");
kkm3= document.getElementById("kkm3");
kkm4= document.getElementById("kkm4");

function km1(){
    firebase.database().ref('KKM/1/').update(
        {kuis1:kkm1.value});
        alert("KKM Kuis 1 berhasil diperbaharui");
        location.reload();
}
function km2(){
    firebase.database().ref('KKM/1/').update(
        {kuis2:kkm2.value});
        alert("KKM Kuis 2 berhasil diperbaharui");
        location.reload();
}
function km3(){
    firebase.database().ref('KKM/1/').update(
        {kuis3:kkm3.value});
        alert("KKM Kuis 3 berhasil diperbaharui");
        location.reload();
}
function km4(){
    firebase.database().ref('KKM/1/').update(
        {evaluasi:kkm4.value});
        alert("KKM Evaluasi berhasil diperbaharui");
        location.reload();
}


//mengambil data KKM di firebase

//--------------------------Ambil semua data KKM          
function dataKkm(){
    firebase.database().ref('KKM/').once('value',
    function(AllRecords1){
        AllRecords1.forEach(
            function(CurrentRecord){
                var kuis1=CurrentRecord.val().kuis1;
                var kuis2=CurrentRecord.val().kuis2;
                var kuis3=CurrentRecord.val().kuis3;
                var evaluasi=CurrentRecord.val().evaluasi;

                datak(kuis1,kuis2,kuis3,evaluasi);
            }
        );
    });
}
function datak(kuis1,kuis2,kuis3,evaluasi){
    if(kuis1!=""){
        isi1=document.getElementById("isi1");
        isi1.innerText=kuis1;
    }
    if(kuis2!=""){
        isi2=document.getElementById("isi2");
        isi2.innerText=kuis2;
    }
    if(kuis3!=""){
        isi3=document.getElementById("isi3");
        isi3.innerText=kuis3;
    }
    if(evaluasi!=""){
        isi4=document.getElementById("isi4");
        isi4.innerText=evaluasi;
    }
}





// mengambil data KKM
// function dataKkm(){
//     firebase.database().ref('KKM/').once('value',
//     function(AllRecords1){
//         AllRecords1.forEach(
//             function(CurrentRecord){
//                 var kuis1=CurrentRecord.val().kuis1;

//                 datak(kuis1);
//             }
//         );

//     });
// }
// function datak(kuis1){
//    kkm=kuis1;
//     console.log(kkm);
// }
