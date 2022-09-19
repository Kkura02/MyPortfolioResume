let slideIndex2 = 1;
showSlides(slideIndex2);

// next previous controls
function plusSlides(n) {
  showSlides(slideIndex2 += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //sets up connection to variable myslides
  let dots = document.getElementsByClassName("dot"); //sets up connection to variable dot

  if (n > slides.length) {slideIndex2 = 1}    //compare if n is greater than the lenght of slides then the slideIndex is 1
  if (n < 1) {slideIndex2 = slides.length}   //compare if n is less than 1 then slideIndex value will be the same as the slides.lenght
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
}