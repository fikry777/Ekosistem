// //percobaan 1
// function cek01(){
//   let lp01= document.getElementById("lp01").value;
//   let lp02= document.getElementById("lp02").value;
//   let lp03= document.getElementById("lp03").value;
//   let lp04= document.getElementById("lp04").value;
  
//   if (lp01 == "Omnivora" && lp02 == "Karnivora" && lp03 == "Herbivora" && lp04 == "+" ) {
//     // document.getElementsByClassName('cek1')[0].style.display='none';
//     document.getElementsByClassName('lat01')[0].style.display='block';
//   } else {
//     document.getElementsByClassName('none01')[0].style.display='none'; 
//     document.getElementById("lp01").style="border: 3px solid red"; 
//     document.getElementById("lp02").style="border: 3px solid red"; 
//     document.getElementById("lp03").style="border: 3px solid red"; 
//     document.getElementById("lp04").style="border: 3px solid red";  
//   }
  
//   if (lp01 == "Omnivora"){
//     document.getElementById("lp01").style="border: 3px solid green";   
//   } else{
//     document.getElementById("lp01").style="border: 3px solid red";
//   }
  
//   if (lp02 == "Karnivora"){
//     document.getElementById("lp02").style="border: 3px solid green";   
//   } else{
//     document.getElementById("lp02").style="border: 3px solid red";
//   }
  
//   if (lp03 == "Herbivora"){
//     document.getElementById("lp03").style="border: 3px solid green";   
//   } else{
//     document.getElementById("lp03").style="border: 3px solid red";
//   }
  
//   if (lp04 == "+"){
//     document.getElementById("lp04").style="border: 3px solid green";   
//   } else{
//     document.getElementById("lp04").style="border: 3px solid red";
//   }
// }
// function ceklp01(){
//   let lp01= document.getElementById("lp01").value;
  
//   if (lp01 == "+++"){
//     document.getElementById("lp01").style="border: 3px solid green";     
//     document.getElementsByClassName('none01')[0].style.display='none';    
//   } else{
//     document.getElementById("lp01").style="border: 3px solid red";    
//     document.getElementsByClassName('lat01')[0].style.display='none';  
//     document.getElementsByClassName('none01')[0].style.display='block';
//   }
// }

// function ceklp02(){
//   let lp02= document.getElementById("lp02").value;
  
//   if (lp02 == "++++"){
//     document.getElementById("lp02").style="border: 3px solid green";        
//     document.getElementsByClassName('none01')[0].style.display='none'; 
//   } else{
//     document.getElementById("lp02").style="border: 3px solid red";    
//     document.getElementsByClassName('lat01')[0].style.display='none';  
//     document.getElementsByClassName('none01')[0].style.display='block';
//   }
// }

// function ceklp03(){
//   let lp03= document.getElementById("lp03").value;
  
//   if (lp03 == "+"){
//     document.getElementById("lp03").style="border: 3px solid green";      
//     document.getElementsByClassName('none01')[0].style.display='none';   
//   } else{
//     document.getElementById("lp03").style="border: 3px solid red";    
//     document.getElementsByClassName('lat01')[0].style.display='none';  
//     document.getElementsByClassName('none01')[0].style.display='block';
//   }
// }

// function ceklp04(){
//   let lp04= document.getElementById("lp04").value;
  
//   if (lp04 == "+"){
//     document.getElementById("lp04").style="border: 3px solid green";    
//     document.getElementsByClassName('kesimp')[0].style.display='';    
//     document.getElementsByClassName('none01')[0].style.display='none';   
//   } else{
//     document.getElementById("lp04").style="border: 3px solid red";  
//     document.getElementsByClassName('kesimp')[0].style.display='none';   
//     document.getElementsByClassName('lat01')[0].style.display='none';  
//     document.getElementsByClassName('none01')[0].style.display='block';
//   }
// }

function ceksoal1(){
  //Tupai
  if(document.getElementById("soal1").checked) {
    s1b.style.display="";
    s1s.style.display="none";
  }else {
    s1b.style.display="none";
    s1s.style.display="";
  }
  if(document.getElementById("soal2").checked) {
    s2b.style.display="none";
    s2s.style.display="";
  }else {
    s2b.style.display="none";
    s2s.style.display="";
  }
  if(document.getElementById("soal3").checked) {
    s3b.style.display="none";
    s3s.style.display="";
  }else {
    s3b.style.display="none";
    s3s.style.display="";
  }
  //Harimau
  if(document.getElementById("soal4").checked) {
    s4b.style.display="none";
    s4s.style.display="";
  }else {
    s4b.style.display="none";
    s4s.style.display="";
  }
  if(document.getElementById("soal5").checked) {
    s5b.style.display="";
    s5s.style.display="none";
  }else {
    s5b.style.display="none";
    s5s.style.display="";
  }
  if(document.getElementById("soal6").checked) {
    s6b.style.display="none";
    s6s.style.display="";
  }else {
    s6b.style.display="none";
    s6s.style.display="";
  }
  //Gajah
  if(document.getElementById("soal7").checked) {
    s7b.style.display="";
    s7s.style.display="none";
  }else {
    s7b.style.display="none";
    s7s.style.display="";
  }
  if(document.getElementById("soal8").checked) {
    s8b.style.display="none";
    s8s.style.display="";
  }else {
    s8b.style.display="none";
    s8s.style.display="";
  }
  if(document.getElementById("soal9").checked) {
    s9b.style.display="none";
    s9s.style.display="";
  }else {
    s9b.style.display="none";
    s9s.style.display="";
  }
  //Kelinci
  if(document.getElementById("soal10").checked) {
    s10b.style.display="";
    s10s.style.display="none";
  }else {
    s10b.style.display="none";
    s10s.style.display="";
  }
  if(document.getElementById("soal11").checked) {
    s11b.style.display="none";
    s11s.style.display="";
  }else {
    s11b.style.display="none";
    s11s.style.display="";
  }
  if(document.getElementById("soal12").checked) {
    s12b.style.display="none";
    s12s.style.display="";
  }else {
    s12b.style.display="none";
    s12s.style.display="";
  }
  //Ular
  if(document.getElementById("soal13").checked) {
    s13b.style.display="none";
    s13s.style.display="";
  }else {
    s13b.style.display="none";
    s13s.style.display="";
  }
  if(document.getElementById("soal14").checked) {
    s14b.style.display="";
    s14s.style.display="none";
  }else {
    s14b.style.display="none";
    s14s.style.display="";
  }
  if(document.getElementById("soal15").checked) {
    s15b.style.display="none";
    s15s.style.display="";
  }else {
    s15b.style.display="none";
    s15s.style.display="";
  }
  //Burung Hantu
  if(document.getElementById("soal16").checked) {
    s16b.style.display="none";
    s16s.style.display="";
  }else {
    s16b.style.display="none";
    s16s.style.display="";
  }
  if(document.getElementById("soal17").checked) {
    s17b.style.display="";
    s17s.style.display="none";
  }else {
    s17b.style.display="none";
    s17s.style.display="";
  }
  if(document.getElementById("soal18").checked) {
    s18b.style.display="none";
    s18s.style.display="";
  }else {
    s18b.style.display="none";
    s18s.style.display="";
  }
  //Elang
  if(document.getElementById("soal19").checked) {
    s19b.style.display="none";
    s19s.style.display="";
  }else {
    s19b.style.display="none";
    s19s.style.display="";
  }
  if(document.getElementById("soal20").checked) {
    s20b.style.display="";
    s20s.style.display="none";
  }else {
    s20b.style.display="none";
    s20s.style.display="";
  }
  if(document.getElementById("soal21").checked) {
    s21b.style.display="none";
    s21s.style.display="";
  }else {
    s21b.style.display="none";
    s21s.style.display="";
  }
  //Ayam
  if(document.getElementById("soal22").checked) {
    s22b.style.display="none";
    s22s.style.display="";
  }else {
    s22b.style.display="none";
    s22s.style.display="";
  }
  if(document.getElementById("soal23").checked) {
    s23b.style.display="none";
    s23s.style.display="";
  }else {
    s23b.style.display="none";
    s23s.style.display="";
  }
  if(document.getElementById("soal24").checked) {
    s24b.style.display="";
    s24s.style.display="none";
  }else {
    s24b.style.display="none";
    s24s.style.display="";
  }
  //Monyet
  if(document.getElementById("soal25").checked) {
    s25b.style.display="none";
    s25s.style.display="";
  }else {
    s25b.style.display="none";
    s25s.style.display="";
  }
  if(document.getElementById("soal26").checked) {
    s26b.style.display="none";
    s26s.style.display="";
  }else {
    s26b.style.display="none";
    s26s.style.display="";
  }
  if(document.getElementById("soal27").checked) {
    s27b.style.display="";
    s27s.style.display="none";
  }else {
    s27b.style.display="none";
    s27s.style.display="";
  }
  //Tikus
  if(document.getElementById("soal28").checked) {
    s28b.style.display="none";
    s28s.style.display="";
  }else {
    s28b.style.display="none";
    s28s.style.display="";
  }
  if(document.getElementById("soal29").checked) {
    s29b.style.display="none";
    s29s.style.display="";
  }else {
    s29b.style.display="none";
    s29s.style.display="";
  }
  if(document.getElementById("soal30").checked) {
    s30b.style.display="";
    s30s.style.display="none";
  }else {
    s30b.style.display="none";
    s30s.style.display="";
  }
}