// Get the modal 11
var modal = document.getElementById("myModal11");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("Imgku11");
var modalImg = document.getElementById("img11");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close11")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}