document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
        
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
            });
        });
    }
    
    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselImages = document.querySelector('.carousel-images');
    
    // Add touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            scrollCarousel(1);
        } else if (touchEndX > touchStartX) {
            // Swipe right
            scrollCarousel(-1);
        }
    }
    
    // Expose scrollCarousel to window for button click access
    window.scrollCarousel = function(direction) {
        if (!carouselImages) return;
        
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // Initialize carousel position
    if (carouselImages) {
        carouselImages.style.transform = 'translateX(0)';
    }
    
    // Auto-rotate carousel
    if (totalSlides > 1) {
        setInterval(function() {
            scrollCarousel(1);
        }, 5000);
    }
    
    // Handle window resize for better responsiveness
    window.addEventListener('resize', function() {
        if (carouselImages) {
            carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    });

});


 // Contact form submission
 const contactForm = document.getElementById("contact-form");
 if (contactForm) {
     contactForm.addEventListener("submit", function (event) {
         event.preventDefault();

         let form = this;

         fetch(form.action, {
             method: form.method,
             body: new FormData(form),
             headers: { 'Accept': 'application/json' }
         }).then(response => {
             if (response.ok) {
                 document.getElementById("popup").style.display = "flex";
             } else {
                 alert("❌ Error occurred, please try again.");
             }
         }).catch(error => {
             alert("❌ Check your internet connection.");
         });
     });
 }

 // Close popup and reset form
 const closePopup = document.getElementById("close-popup");
 if (closePopup) {
     closePopup.addEventListener("click", function () {
         document.getElementById("popup").style.display = "none";
         contactForm.reset();
     });
 }
AOS.init({
    duration: 3000,
    easing: "ease-out-cubic",
});

let btn=document.getElementById("btn");
window.onscroll=function(){
    if(scrollY>=400)
    {btn.style.display='block';
}else{btn.style.display='none';}
btn.onclick=function(){scroll({left:0,top:0,behavior:'smooth'})}
}
