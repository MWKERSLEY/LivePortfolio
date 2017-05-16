
 /* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets 
    var badBar = document.getElementById('titleBar');
    badBar.remove();
/*    var projects = document.getElementsByClassName('projectElement');
    for (var i = 0; i<projects.length; i++) {
        projects[i].addEventListener('click', function(a, b, c) {
            console.log(a, b, c);
        });
    }*/
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  /* BxSlider
    -----------------------------------------------*/
  (function (window, $) {
  'use strict';

  // Cache document for fast access.
  var document = window.document;

  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: true,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


   /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
  });
  

  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#work').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
    $('#plan').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#portfolio .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });


/*  The Modal JavaScript
    -----------------------------------------------*/

// Get the modal1
var theModal1 = document.getElementById('project1Modal');
// Get the button that opens the modal
var modalButton1 = document.getElementById("project1");
modalButton1.addEventListener("click", openModel1, false);
function openModel1() {
    theModal1.style.display = "block";
}
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    theModal1.style.display = "none";
}

// Get the modal2
var theModal2 = document.getElementById('project2Modal');
// Get the button that opens the modal
var modalButton2 = document.getElementById("project2");
modalButton2.addEventListener("click", openModel2, false);
function openModel2() {
    theModal2.style.display = "block";
}
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    theModal2.style.display = "none";
}

// Get the modal3
var theModal3 = document.getElementById('project3Modal');
// Get the button that opens the modal
var modalButton3 = document.getElementById("project3");
modalButton3.addEventListener("click", openModel3, false);
function openModel3() {
    
    theModal3.style.display = "block";
}
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    theModal3.style.display = "none";
}

// Get the modal4
var theModal4 = document.getElementById('project4Modal');
// Get the button that opens the modal
var modalButton4 = document.getElementById("project4");
modalButton4.addEventListener("click", openModel4, false);
function openModel4() {
    theModal4.style.display = "block";
}
// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];
// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    theModal4.style.display = "none";
}
// Get the modal5
var theModal5 = document.getElementById('project5Modal');
// Get the button that opens the modal
var modalButton5 = document.getElementById("project5");
modalButton5.addEventListener("click", openModel5, false);
function openModel5() {
    theModal5.style.display = "block";
}
// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];
// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    theModal5.style.display = "none";
}

// Get the modal6
var theModal6 = document.getElementById('project6Modal');
// Get the button that opens the modal
var modalButton6 = document.getElementById("project6");
modalButton6.addEventListener("click", openModel6, false);
function openModel6() {
    theModal6.style.display = "block";
}
// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];
// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
    theModal6.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == theModal1) {
        theModal1.style.display = "none";
    }
    if (event.target == theModal2) {
        theModal2.style.display = "none";
    }
    if (event.target == theModal3) {
        theModal3.style.display = "none";
    }
    if (event.target == theModal4) {
        theModal4.style.display = "none";
    }
    if (event.target == theModal5) {
        theModal5.style.display = "none";
    }
    if (event.target == theModal6) {
        theModal6.style.display = "none";
    }
}





/*

document.getElementById('project1').addEventListener('click', function() {
    console.log('hi1');

});
document.getElementById('project2').addEventListener('click', function() {
    console.log('hi2');
});
document.getElementById('project3').addEventListener('click', function() {
    console.log('hi3');
});
document.getElementById('project4').addEventListener('click', function() {
    console.log('hi4');
});
document.getElementById('project5').addEventListener('click', function() {
    console.log('hi5');
});
document.getElementById('project6').addEventListener('click', function() {
    console.log('hi6');
});*/