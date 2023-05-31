window.addEventListener('scroll', show);
function show(){
    var shows = document.querySelectorAll('.show');

    for(var i = 0; i < shows.length; i++){

        var windowheight = window.innerHeight;
        var showtop = shows[i].getBoundingClientRect().top;
        var showpoint = 400;

        if(showtop < windowheight - showpoint){
            shows[i].classList.add('active');
        }
        else{
            shows[i].classList.remove('active');
        }

    }
};
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pagination = document.querySelector('.pagination');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
  
      updatePagination(index);
    }
  
    function updatePagination(index) {
      pagination.innerHTML = '';
  
      for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-circle');
        button.appendChild(icon);
  
        button.addEventListener('click', function() {
          showSlide(i);
        });
  
        if (i === index) {
          button.classList.add('active');
        }
  
        pagination.appendChild(button);
      }
    }
  
    function slideToPrev() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      updatePagination(currentSlide);
    }
  
    function slideToNext() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
      updatePagination(currentSlide);
    }
  
    prevBtn.addEventListener('click', slideToPrev);
    nextBtn.addEventListener('click', slideToNext);
  
    showSlide(currentSlide);
  });