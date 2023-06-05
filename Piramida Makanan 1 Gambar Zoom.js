// Get the modal 10
var modal = document.getElementById("myModal12");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("Imgku12");
var modalImg = document.getElementById("img12");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close12")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal 23
var modal = document.getElementById("myModal23");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("Imgku23");
var modalImg = document.getElementById("img23");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close23")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}