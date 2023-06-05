function komensalisme0(){
    cekk.src = "benar.png";
    document.getElementById('aa1').style.display = 'none';
    document.getElementById('aa3').style.display = 'none';
    document.getElementById('aa4').style.display = 'none';
    document.getElementById('aa5').style.display = 'block';
}
  
function mutualisme0(){
    cekk.src = "salah.png";
    document.getElementById('aa4').style.display = 'block';
}
  
function parasitisme0(){
    cekk.src = "salah.png";
    document.getElementById('aa4').style.display = 'block';
}

function mutualisme(){
    cek1.src = "salah.png";
    document.getElementById('ab4').style.display = 'block';
}

function komensalisme(){
    cek1.src = "salah.png";
    document.getElementById('ab4').style.display = 'block';
}

function parasitisme(){
    cek1.src = "benar.png";
    document.getElementById('ab1').style.display = 'none';
    document.getElementById('ab2').style.display = 'none';
    document.getElementById('ab4').style.display = 'none';
    document.getElementById('ab5').style.display = 'block';
}

function mutualisme2(){
    cek2.src = "benar.png";
    document.getElementById('ac2').style.display = 'none';
    document.getElementById('ac3').style.display = 'none';
    document.getElementById('ac4').style.display = 'none';
    document.getElementById('ac5').style.display = 'block';
}

function komensalisme2(){
    cek2.src = "salah.png";
    document.getElementById('ac4').style.display = 'block';
}

function parasitisme2(){
    cek2.src = "salah.png";
    document.getElementById('ac4').style.display = 'block';
}

function mutualisme3(){
    cek3.src = "benar.png";        
    document.getElementById('ad2').style.display = 'none';
    document.getElementById('ad3').style.display = 'none';
    document.getElementById('ad4').style.display = 'none';
    document.getElementById('ad5').style.display = 'block';
}

function komensalisme3(){
    cek3.src = "salah.png";
    document.getElementById('ad4').style.display = 'block';
}

function parasitisme3(){
    cek3.src = "salah.png";
    document.getElementById('ad4').style.display = 'block';
}

function mutualisme4(){
    cek4.src = "salah.png";    
    document.getElementById('ae4').style.display = 'block';
}

function komensalisme4(){
    cek4.src = "benar.png";
    document.getElementById('ae1').style.display = 'none';
    document.getElementById('ae3').style.display = 'none';
    document.getElementById('ae4').style.display = 'none';
    document.getElementById('ae5').style.display = 'block';
}

function parasitisme4(){
    cek4.src = "salah.png";    
    document.getElementById('ae4').style.display = 'block';
}

function negatif5(){
    cek5.src = "salah.png";
  document.getElementById('ae3').style.display = 'block';
}

function positif5(){
    cek5.src = "benar.png";        
  document.getElementById('ae2').style.display = 'none';
  document.getElementById('ae3').style.display = 'none';
}

$('.inputan').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
);