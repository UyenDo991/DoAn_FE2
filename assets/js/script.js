// menu
window.onscroll = function() {
  myFunction();
  myAboutUsFunction();
  myProjectFunction();
  revealOnScroll();
  revealInternship();
};

var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;
const btnBackToTop = document.querySelector(".backToTop");

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
    btnBackToTop.style.display = "block";
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
    btnBackToTop.style.display = "none";
    sliderItem3.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem4.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem5.style.transform = `translate(${100}px, ${100}px)  rotate(-180deg)`;
    sliderItem6.style.transform = `translate(${80}px, ${80}px)  rotate(-30deg)`;
    sliderItem7.style.transform = `translate(${-100}px, ${20}px)  rotate(0deg)`;
    sliderItem8.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
    sliderItem9.style.transform = `translate(${20}px, ${20}px)  rotate(50deg)`;
    // sliderItem20.style.transform = `translate(${20}px, ${20}px)  rotate(15deg)`;
  }
}
//btn contactme
function scrollToContact() {
  const element = document.getElementById("my-contact");
  element.scrollIntoView({ behavior: "smooth" });
}
//var content2_aboutus_height = document.querySelector('#content2-about-us').offsetHeight;
//var content2_skills_height = document.querySelector('#content2-skills').offsetHeight;
function myAboutUsFunction() {
 // var content2_skills = document.querySelectorAll('.content2skills');
  //console.log(content2_skills);
  //console.log( content2_aboutus_height + navbar_height);
  //console.log( "window.pageYOffset" + window.pageYOffset);
  // if (window.pageYOffset - content2_skills_height  > content2_aboutus_height + navbar_height) {
  //     for (var i = 0; i < content2_skills.length; i++) {
  //       content2_skills[i].classList.add("content2-skills-bar");
  //     }
  // } else {
  //     for (var i = 0; i < content2_skills.length; i++) {
  //       content2_skills[i].classList.remove("content2-skills-bar");
  //     }
  // }
    const observerContent2 = new IntersectionObserver(entries =>{
        entries.forEach(e =>{
            const content2skills = e.target.querySelectorAll('.content2skills');
            if(e.isIntersecting){
              content2skills.forEach(element => {
                element.classList.add('content2-skills-bar');
              });
              return;
            }
            content2skills.forEach(element => {
              element.classList.remove('content2-skills-bar');
            });
        });
    });
    const content2_skills = document.querySelectorAll('#content2-skills');
    content2_skills.forEach(e =>{
      observerContent2.observe(e);
    });
}
function myProjectFunction() {
    var content3_show = document.querySelectorAll('.parent');
    var triggerBottom = window.innerHeight * 0.9; 

    content3_show.forEach(function (item) {
        var box = item.getBoundingClientRect();
        if (box.top < triggerBottom) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });

  //   const observerContent3 = new IntersectionObserver(entries =>{
  //     entries.forEach(e =>{
  //         const content3_show = e.target.querySelectorAll('.parent');
  //         if(e.isIntersecting){
  //           content3_show.forEach(element => {
  //             element.classList.add('show');
  //           });
  //           return;
  //         }
  //         content3_show.forEach(element => {
  //           element.classList.remove('show');
  //         });
  //     });
  // });
  // const content3_project = document.querySelectorAll('.content-3-projects');
  // content3_project.forEach(e =>{
  //   observerContent3.observe(e);
  // });



}
 function revealOnScroll() {
    const elements = document.querySelectorAll('.content-4-big');
    const triggerBottom = window.innerHeight * 0.9;
  
    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
  
      if (boxTop < triggerBottom) {
        el.classList.add('appear');
      } else {
        el.classList.remove('appear');
      }
    });
  }
  function revealInternship() {
    const cards = document.querySelectorAll('.slide-in-left, .slide-in-right');
    const triggerBottom = window.innerHeight * 0.85;
  
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  }
//Button Back To Top
btnBackToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Modal
const btnSeeMore = document.querySelectorAll('.btnSeeMore');
const btnClose = document.querySelectorAll('.btnClose');

let checkIDModal = 0;

// Khi nhấn nút mở modal
btnSeeMore.forEach(element => {
    element.addEventListener('click', function () {
        checkIDModal = element.id;
        showSlides_Content_3(checkIDModal);
    });
});

// Khi nhấn nút đóng modal
btnClose.forEach(btn => {
    btn.addEventListener('click', function () {
        const modal_container = document.getElementById(`content-modal-${checkIDModal}`);
        if (modal_container) {
            modal_container.classList.remove('show');
            resetBook(modal_container); // reset trạng thái trang
        }
    });
});

let currentLocation = 0;
let numOfPapers = 0;
let maxLocation = 0;

// Hiển thị modal + thiết lập lật trang
function showSlides_Content_3(checkIDModal) {
    const modal_container = document.getElementById(`content-modal-${checkIDModal}`);
    if (!modal_container) return;
    modal_container.classList.add('show');
    currentLocation = 1;
    numOfPapers = 3;
    maxLocation = numOfPapers + 1;

    setupBookNavigation(modal_container);
    slideShowContent3(modal_container);
}

// Cài đặt nút Prev / Next
function setupBookNavigation(modal_container) {
     console.log(modal_container);
    const prevBtn = modal_container.querySelector("#prev-btn");
    const nextBtn = modal_container.querySelector("#next-btn");
    const book = modal_container.querySelector("#modal-book");


    const paper1 = modal_container.querySelector("#p1");
    const paper2 = modal_container.querySelector("#p2");
    const paper3 = modal_container.querySelector("#p3");

    const showModalText = modal_container.querySelector(".content-3-modal-box");
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    console.log(showModalText);
    // Xóa sự kiện cũ trước khi thêm mới (tránh đè)
    prevBtn.replaceWith(prevBtn.cloneNode(true));
    nextBtn.replaceWith(nextBtn.cloneNode(true));

    const newPrevBtn = modal_container.querySelector("#prev-btn");
    const newNextBtn = modal_container.querySelector("#next-btn");

    newPrevBtn.addEventListener('click', () => {
        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true, book);
                    paper1.classList.remove("modal-flipped");
                    paper1.style.zIndex = 3;
                    break;
                // case 3:
                //     paper2.classList.remove("modal-flipped");
                //     paper2.style.zIndex = 2;
                //     break;
                case 3:
                    openBook(book);
                    paper2.classList.remove("modal-flipped");
                    paper2.style.zIndex = 2;
                    paper3.classList.remove("modal-flipped");
                    paper3.style.zIndex = 1;
                    // paper3.style.transform = "translateX(0px)";
                    break;
            }
            currentLocation--;
        }
    });

    newNextBtn.addEventListener('click', () => {
        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    openBook(book);
                    paper1.classList.add("modal-flipped");
                    paper1.style.zIndex = 1;
                    showModalText.classList.add('showAnimationText');
                    break;
                // case 2:
                //     paper2.classList.add("modal-flipped");
                //     paper2.style.zIndex = 2;
                //     break;
                case 2:
                    paper3.classList.add("modal-flipped");
                    paper2.classList.add("modal-flipped");
                    paper2.style.zIndex = 3;
                    paper3.style.zIndex = 2;
                    // paper3.style.transform = "translateX(-50px)";
                    closeBook(false, book);
                    break;
            }
            currentLocation++;
        }
    });
}

// Mở sách (dịch sang phải)
function openBook(book) {
    book.style.transform = "translateX(50%)";
}

// Đóng sách (dịch trái hoặc phải tùy vị trí)
function closeBook(isAtBeginning, book) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

// Reset trạng thái lật khi đóng modal
function resetBook(modal_container) {
  console.log('modal_container');
  console.log(modal_container);
    const book = modal_container.querySelector("#modal-book");
    const papers = modal_container.querySelectorAll(".modal-paper");
    const paper1 = modal_container.querySelector("#p1"); 
    const paper2 = modal_container.querySelector("#p2"); 
    const paper3 = modal_container.querySelector("#p3"); 
    const showModalText = modal_container.querySelector(".content-3-modal-box");
    const prevBtn = modal_container.querySelector("#prev-btn");
    const nextBtn = modal_container.querySelector("#next-btn");
    
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";

    book.style.transform = "translateX(0%)";
    papers.forEach(paper => {
        paper.classList.remove("modal-flipped");
        // paper.style.zIndex = 0;
        paper.style.transform = "translateX(0%)";

    });
    paper3.style.zIndex = 1;
    paper2.style.zIndex = 2;
    paper1.style.zIndex = 3;
    showModalText.classList.remove('showAnimationText');
    
    currentLocation = 1;
}

//
//ảnh
const mainPhoto  = document.querySelector('.img-bg-f2');

let iMaxInge = 5; // số lượng ảnh tối đa
function slideShowContent3(modal_container) {
    const imageElement = modal_container.querySelector(".img-bg-f2");
    if (!imageElement) return;

    const basePath = imageElement.getAttribute("data-base-src"); // ví dụ: "assets/images/xxx"

    if (!basePath) {
        console.error("Missing data-base-src attribute");
        return;
    }

    if (i > iMaxInge) {
        i = 1; // reset về ảnh đầu
    }

    const link_name = `${basePath}${i}.jpg`; // Ví dụ: "assets/images/xxx1.jpg"
    imageElement.setAttribute("src", link_name);

    i++;

    slideshowTimeout = setTimeout(() => slideShowContent3(modal_container), 1000);
}
