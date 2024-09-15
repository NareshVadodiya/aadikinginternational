function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


// ___slick____
document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.slider');
    sliders.forEach(function(slider) {
        $(slider).slick({
            autoplay: true,
            autoplaySpeed: 500,
            dots: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });
  });



  //

//   $(".hover").mouseleave(
//     function () {
//       $(this).removeClass("hover");
//     }
//   );

  
// slick


    document.addEventListener("DOMContentLoaded", function() {
        const slickCarousel = document.querySelector('.team-carousel');

        // Initialize Slick Carousel using plain JavaScript
        const slickOptions = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            dots: true,
            arrows: false,
            centerMode : true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        if (slickCarousel) {
            // Check if Slick is available
            if (typeof $(slickCarousel).slick === "function") {
                $(slickCarousel).slick(slickOptions);  // Call Slick with the specified options
            } else {
                console.error("Slick Carousel is not available.");
            }
        }
    });


  