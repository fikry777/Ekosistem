//input nilai > KKM ke variabel localstorage
// localStorage.setItem("nkuis1",80);
// localStorage.setItem("nkuis2",80);
// localStorage.setItem("nkuis3",80);
// localStorage.setItem("nkuis4",80);
// localStorage.setItem("nkuis5",80);

//input nilai 0 ke variabel localstorage
// localStorage.setItem("nkuis1",0);
// localStorage.setItem("nkuis2",0);
// localStorage.setItem("nkuis3",0);
// localStorage.setItem("nkuis4",0);
// localStorage.setItem("nkuis5",0);

//hapus variabel dari localstorage
// localStorage.removeItem("nkuis1");
// localStorage.removeItem("nkuis2");
// localStorage.removeItem("nkuis3");
// localStorage.removeItem("nkuis4");
// localStorage.removeItem("nkuis5");

//hapus semua variabel dari localstorage
// localStorage.clear();

console.log(localStorage);

/*subbab 2*/
function materi2(){
    var skor = localStorage.getItem("nkuis1");
    if (skor>=72){
      window.location.href='Simbiosis 1.html';
    } else{
      alert('Maaf, Kamu belum bisa membuka materi ini!');
    }
}

function materi22(){
    var skor = localStorage.getItem("nkuis1");
    if (skor>=72){
      window.location.href='Penggolongan 1.html';
    } else{
      alert('Maaf, Kamu belum bisa membuka materi ini!');
    }
}

function kuis2(){
    var skor = localStorage.getItem("nkuis1");
    // var skor = 72;
    if (skor>=72){
      window.location.href='Latihan 2.html';
    } else{
      alert('Maaf, Kamu belum bisa membuka kuis ini!');
    }
}

/*subbab 3*/
function materi3(){
  var skor = localStorage.getItem("nkuis2");
  if (skor>=72){
    window.location.href='Rantai Makanan 1.html';
  } else{
    alert('Maaf, Kamu belum bisa membuka materi ini!');
  }
}

function materi32(){
    var skor = localStorage.getItem("nkuis2");
    if (skor>=72){
      window.location.href='Piramida Makanan 1.html';
    } else{
      alert('Maaf, Kamu belum bisa membuka materi ini!');
    }
  }

function kuis3(){
  var skor = localStorage.getItem("nkuis2");
  if (skor>=72){
    window.location.href='Latihan 3.html';
  } else{
    alert('Maaf, Kamu belum bisa membuka kuis ini!');
  }
}

/*evaluasi*/
function evaluasi(){
  var skor = localStorage.getItem("nkuis3");
  if (skor>=72){
    window.location.href='Evaluasi.html';
  } else{
    alert('Maaf, Kamu belum bisa membuka Evaluasi ini!');
  }
}