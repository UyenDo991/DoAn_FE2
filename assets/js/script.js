// menu
window.onscroll = function() {
  myFunction();
  myAboutUsFunction();
};

var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;

function myFunction() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItem3 = document.querySelector('.slider-item3');
    const sliderItem4 = document.querySelector('.slider-item4');
    const sliderItem5 = document.querySelector('.slider-item5');
    const sliderItem6 = document.querySelector('.slider-item6');
    const sliderItem7 = document.querySelector('.slider-item7');
    const sliderItem8 = document.querySelector('.slider-item8');
    const sliderItem9 = document.querySelector('.slider-item9');
    const sliderItem20 = document.querySelector('.slider-item20');
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;

  if (window.pageYOffset >= sticky + navbar_height) {
    navbar_sticky.classList.add("sticky");
    document.body.style.paddingTop = navbar_height + 'px';
    sliderItem3.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    sliderItem4.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    sliderItem5.style.transform = `translate(${180}px, ${180}px)  rotate(-30deg)`;
    sliderItem6.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    sliderItem7.style.transform = `translate(${-80}px, ${80}px)  rotate(0deg)`;
    sliderItem8.style.transform = `translate(${80}px, ${80}px)  rotate(15deg)`;
    sliderItem9.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;
    // sliderItem20.style.transform = `translate(${100}px, ${100}px)  rotate(-30deg)`;

  } else {
    navbar_sticky.classList.remove("sticky");
    document.body.style.paddingTop = '0';
    sliderItem3.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem4.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem5.style.transform = `translate(${100}px, ${100}px)  rotate(-180deg)`;
    sliderItem6.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem7.style.transform = `translate(${-100}px, ${20}px)  rotate(0deg)`;
    sliderItem8.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
    sliderItem9.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
    // sliderItem20.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
  }
}

function myAboutUsFunction() {
  var content2_skills = document.querySelectorAll('.content2skills');
  console.log(content2_skills);
  var content2_aboutus_height = document.querySelector('#content2-about-us').offsetHeight;
  var content2_skills_height = document.querySelector('#content2-skills').offsetHeight;
  console.log( content2_aboutus_height + navbar_height);
  console.log( "window.pageYOffset" + window.pageYOffset);
  if (window.pageYOffset - content2_skills_height  > content2_aboutus_height + navbar_height) {
      for (var i = 0; i < content2_skills.length; i++) {
        content2_skills[i].classList.add("content2-skills-bar");
      }
  } else {
      for (var i = 0; i < content2_skills.length; i++) {
        content2_skills[i].classList.remove("content2-skills-bar");
      }
  }
}

