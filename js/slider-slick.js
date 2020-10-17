$(document).ready(function () {

    $('.client-slider').slick();

  const clientSlider = document.querySelector('.clients');

  clientSlider.addEventListener("click", animateArrow);




});


function animateArrow(e) { 
  if(!e.target.classList.contains('slick-arrow')) return false;
 
  e.target.classList.add("motion");

  setTimeout(() => { e.target.classList.remove("motion"); }, 500);
  

}

