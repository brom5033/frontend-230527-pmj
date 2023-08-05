let prevButton = document.getElementById
('prev-btn');
let nextButton = document.getElementById('next-btn');
let sliderContainer = document.getElementById('slide-container');

let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

prevButton.addEventListener('click',function(){
  slideIndex--;
  if (slideIndex < 0){
    slideIndex = slide.length - 1 ;
  }
  updateSlidePosition();
})

nextButton.addEventListener('click',function(){
  slideIndex++;
  if (slideIndex >= slides.length){
    slideIndex = 0;
  }
  updateSlidePosition();
})


function updateSlidePosition() {
  for (let i = 0; i < slide.length; i++){
    slide[i].style.transform = "translateX(" + -slideIndex * 100 +"%)"
  }
}