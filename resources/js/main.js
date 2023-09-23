// animated skills bar 
$(document).ready(function () {
    $('.skillbar').skillbar({
        speed: 1000,
    });

      //mixitup(PORTFOLIO SECTION)
      var mixer = mixitup('.box');
      // smooth scroll for ie/edge/safari
   
      $("a").on('click', function(e) {
   
           if(this.hash !=""){
               e.preventDefault();
               var hash = this.hash;
               $('html, body').animate({
                   scrollTop:$(hash).offset().top
               },800, function (){
                   window.location.hash =hash;
               });
           }
      });
   
  
});

// swiper slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// ham menu 
  var navLinks = document.getElementById("navLinks");

  function showMenu(){
      navLinks.style.right="0";
  }
  function hideMenu(){
      navLinks.style.right="-30rem";
  }

  // sticky menu 
  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }