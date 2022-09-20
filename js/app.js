$(function () {
//     nav bar section
     $(".btn").click(function () {
        let logo = $("nav .logo");
        let navMenu = $("#mycsnav ul")
       logo.toggleClass("activelogo");
      navMenu.toggleClass("activenavlogo");
     });   


    //  $(window).scroll(function(){
    //   if (scroll>= 300){
    //     $(".navbar").addClass("menufixed");
    //     console.log("okay");
    //   }
    //   else {
    //      $('.navbar').removeClass("menufixed")
    //   }
    //  });

    let nav = $(".navbar");
    let navbarValue = nav.offset().top;
     $(window).scroll(function () {
      let scrTop = $(window).scrollTop();
      console.log(scrTop);
      if (navbarValue < scrTop) {
        nav.addClass("menufixed");
      } else {
        nav.removeClass("menufixed");
      }
    });
// nav bar section ends
   

// banner section
$('#banner').slick({
     arrows:true,
     nextArrow: ".rightarrows",
     prevArrow:".leftarrows",
     autoplay:true,
     autoplaySpeed:2000,
});


// services slick
$('.service-slick').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     arrows:false,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [
          {
               breakpoint: 2000,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
               }
             },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          },
         
        ]
      });
    
 
// COUNTER PLUGING JS
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '#counter' )
IO.observe( el )


// BLIG SLICK JS0
$('#blogSliders').slick({
     
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows:false,
     centerMode: true,
     autoplay: true,
     autoplaySpeed:1500,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


// TESTIMONIAL SECTION START
$('.testimonial-cnt').slick({
  fade: true,
  arrows:false,
  asNavFor:'.testimonial-img',
});

$('.testimonial-img').slick({
  arrows:false,
  slidesToShow:3,
  slidesToScroll:1,
  centerMode: true,
  centerPadding: "0px",
  asNavFor:'.testimonial-cnt',
});


// 

$('.theme-slick').slick({
  slidesToShow:5,
  slidesToScroll:1,
  nextArrow: ".rightarrow",
  prevArrow:".leftarrow",
  centerMode:true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 990,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll:1
      }
    }
  ]
});

$('.port').slick({
    slidesToShow:4,
    responsive:[
      {
        breakpoint:575,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          arrows:false,
          autoplay:true,
          autoplaySpeed:1500,
        }
      },
      {
        breakpoint:991,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          arrows:false,
          autoplay:true,
          autoplaySpeed:1500,
        }
      }
    ]
})

});