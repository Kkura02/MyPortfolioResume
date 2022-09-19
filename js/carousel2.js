let slideIndex3 = 1;
showSlides2(slideIndex);

// next previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("skillslides"); //sets up connection to variable myslides
  let dots = document.getElementsByClassName("dot2"); //sets up connection to variable dot

  if (n > slides.length) {slideIndex = 1}    //compare if n is greater than the lenght of slides then the slideIndex is 1
  if (n < 1) {slideIndex = slides.length}   //compare if n is less than 1 then slideIndex value will be the same as the slides.lenght
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}