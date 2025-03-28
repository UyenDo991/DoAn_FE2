// menu
window.onscroll = function() {myFunction()};

var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;

function myFunction() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItem3 = document.querySelector('.slider-item3');
    const sliderItem4 = document.querySelector('.slider-item4');
    const sliderItem6 = document.querySelector('.slider-item6');
    const sliderItem7 = document.querySelector('.slider-item7');
    const sliderItem8 = document.querySelector('.slider-item8');
    const sliderItem9 = document.querySelector('.slider-item9');
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;

  if (window.pageYOffset >= sticky + navbar_height) {
    navbar_sticky.classList.add("sticky")
    document.body.style.paddingTop = navbar_height + 'px';
    sliderItem3.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    sliderItem4.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    sliderItem6.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    sliderItem7.style.transform = `translate(${-80}px, ${80}px)  rotate(0deg)`;
    sliderItem8.style.transform = `translate(${80}px, ${80}px)  rotate(15deg)`;
    sliderItem9.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;

  } else {
    navbar_sticky.classList.remove("sticky");
    document.body.style.paddingTop = '0'
    sliderItem3.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem4.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem6.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem7.style.transform = `translate(${-100}px, ${20}px)  rotate(0deg)`;
    sliderItem8.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
    sliderItem9.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
  }
}