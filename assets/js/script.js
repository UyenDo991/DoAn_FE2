// menu
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
let navbar_menu = document.getElementById("navbar-menu");
let scrollPage = document.documentElement.scrollHeight * 0.01;  // 1% chiều cao trang
 console.log(scrollPage);
  if (window.scrollY > scrollPage || window.scrollY > scrollPage) {
    navbar_menu.style.top = "0";
    navbar_menu.style.background = 'rgba(255, 255, 255, 0.2)';
  } else {
    navbar_menu.style.top = "0px";
    navbar_menu.style.background = 'none';
  }
}
window.addEventListener('load', function() {
    
  });