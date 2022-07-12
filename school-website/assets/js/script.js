

//NAVBAR SECTION
try {
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >1)
        // window.scrollY > 1 defines the scroll of Y axis in pixels after which is event listner will fire 
    })
} catch (e) {
    console.log(`Error caught in navbar: ${e}`);
}

//MENU SECTION 
try {
    //Show & Hide the nav menu
    const menu = document.querySelector('.nav-menu'); //selecting the menu container
    const menuBtn = document.querySelector('#open-menu-btn'); //selecting the hamburger icon
    const closeBtn = document.querySelector('#close-menu-btn'); //selecting the close icon

    const openNav = () => {
        menu.style.display = 'flex';
        closeBtn.style.display = 'inline-block';
        menuBtn.style.display = 'none';
    }
    const closeNav = () => {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
    }

    //opening  nav menu
    menuBtn.addEventListener('click', openNav);

    closeBtn.addEventListener('click', closeNav); 
    //closing  nav menu 
} catch (e) {
    console.log(`Error in navbar js: ${e}`);
}


//FAQ SECTION
try {
    //toggle faq answers
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            //change icon
            const icon = faq.querySelector('.faq-icon-span');
            console.log(icon);
            if(icon.innerText === '+'){
                icon.innerText = '-';
            } else if ( icon.innerText === '-') {                
                icon.innerText = '+';
            }
        })
    })

} catch (e){
    console.log(`error in faqs : ${e}`);
}

//TESTIMONIALS-SECTION
try {
    //variables
    var testimonialsContainer = document.getElementById("testimonial-section"); //selecting complete testimonial section
    var dots = Array.prototype.slice.call(document.getElementById("testimonials-dots").children); //storing each li of dots in array format
    var testimonials = Array.prototype.slice.call(document.getElementById("testimonials-content").children); //storing all individual testimonial in array format
    var testimonialSpeed = 4500; //declaring the auto navigation speed in ms
    var currentSlide = 0; //defining a variable to use it for selecting first element of array
    var currentActive = 0; //defining a variable to use it for adding inactive classes for all non active testimonials element
    var testimonialTimer;


    window.onload = function(){
        // FUNCTION FOR AUTO NAVIGATION
        function playSlide(slide){

            //adding a for loop to remove all kind of active and inactive classes from every testimonial
            for (var k=0; k<dots.length; k++){
                testimonials[k].classList.remove("active");
                testimonials[k].classList.remove("inactive");
                dots[k].classList.remove("active");
            }

            //connecting the first index from last one of array to loop forever
            if(slide < 0){
                slide = currentSlide = testimonials.length - 1;
            }

            //connecting the last index from first one of array to loop forever
            if(slide > testimonials.length -1){
                slide = currentSlide = 0;
            }

            //adding incative class on all slides (expect the selected slide) to hide the display 
            if(currentActive != currentSlide){
                testimonials[currentActive].classList.add("inactive");
            }

            //adding the active class to visible slide 
            testimonials[slide].classList.add("active");
            dots[slide].classList.add("active");

            //redefining the current slide as equal to current active for proper operational logic
            currentActive = currentSlide;

            //clearing the previous setTimeout data & logic
            clearTimeout(testimonialTimer);

            //calling the same with addding the a value to current slide for successive auto navigation
            testimonialTimer = setTimeout(function () {
                playSlide(currentSlide += 1);
            }, testimonialSpeed);
        }

        //making the dots clickable to switch to those slides
        for (var l=0; l < dots.length; l++) {
            dots[l].addEventListener("click", function () {
                playSlide(currentSlide = dots.indexOf(this));
            })
        }

        //function call for initiation
        playSlide(currentSlide);
    }
} catch (e) {
    console.log(`Error caught in testimonial section: ${e}`);
}















































