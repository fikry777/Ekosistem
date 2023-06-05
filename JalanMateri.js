var sidebar = document.querySelector('.ham');
sidebar.addEventListener('click', function (){
    console.log("HAMBURGER");
    document.getElementById("sidenav").classList.toggle('aktif');
    document.getElementById("judul").classList.toggle('full');
    document.getElementById("konten").classList.toggle('full');
    document.getElementById("navigasi").classList.toggle('full');
});

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

window.addEventListener("load", function() {
  // console.log("page is fully loaded");
  // var sistem = document.getElementById("sistem");
  // sistem.style.display = "block";
  var dropdown1 = document.getElementsByClassName("dropdown-btn");
  for (i = 0; i < dropdown1.length; i++) {
    var sistem = this.document.getElementById("sistem");
    var hubungan = this.document.getElementById("hubungan");
    var keseimbangan = this.document.getElementById("keseimbangan");
  // console.log(sistem);
  if(sistem!=null){
    sistem.style.display="block";
    } else if(hubungan!=null){
      hubungan.style.display="block";
    }
    else{
      keseimbangan.style.display="block";
    }
  }
});

function ekosistem(){
  // var eko = document.getElementsByClassName("eko");
  // eko.classList.toggle("active");
  var sistem = document.getElementById("sistem");
  sistem.style.display = "block";
  // console.log(sistem);
}

// Get the modal 1
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("Imgku1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal 2
var modal = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("Imgku2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}