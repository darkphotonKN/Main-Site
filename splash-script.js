

/* Navigation Menu */

// global vars

const navContact = document.querySelector('.nav .contact');
const navAbout = document.querySelector('.nav .about');
const navResume = document.querySelector('.nav .resume');
const navProjects = document.querySelector('.nav .projects');


// Show Menu

// vars
const menuButton = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav");
const closeMenu = document.querySelector(".nav-close");

menuButton.addEventListener("click", () => navMenu.classList.add("show"));

// close nav menu
navMenu.addEventListener("mouseenter", () => closeMenu.classList.add("show"));
navMenu.addEventListener("mouseleave", () => closeMenu.classList.remove("show"));
closeMenu.addEventListener("click", () => navMenu.classList.remove("show"));


/* plain vanilla JS toggle but works only after an extra click at the start */ 
/*function navMenuToggle(classState) {

    if(classState == "nav") {
        menuButton.addEventListener("click", () => {
            
            navMenu.classList.add("show");
            navMenuToggle(navMenu.classList);
            
        });
    }

    if(classState == "nav show") {
        menuButton.addEventListener("click", () => {
    
            navMenu.classList.remove("show");
            navMenuToggle(navMenu.classList);
        });
    }

}
*/

// individual nav buttons
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
navResume.addEventListener("click", () => overlay.classList.add("show"));

navProjects.addEventListener("click", () => overlay.classList.add("show"));
navContact.addEventListener("click", () => overlay.classList.add("show"));
navContact.addEventListener("click", () => content.classList.add("show"))

/* Overlay */

// remove overlay and content box when clicked on to return to the main landing page
const overlayBtn = document.querySelector(".close-btn");
overlayBtn.addEventListener("click", () => {
    overlay.classList.remove("show")
    content.classList.remove("show")
});



// About
const aboutSection = document.getElementById("about"); 
const closeAbout = document.querySelector("#about .close-about");

// show about section when about is clicked in nav menu
navAbout.addEventListener("click", () => aboutSection.classList.add("show"));

// show and hide close button when mouse enters about section area
aboutSection.addEventListener("mouseenter", () => closeAbout.classList.add("show"));
aboutSection.addEventListener("mouseleave", () => closeAbout.classList.remove("show"));

// close button closes about section
closeAbout.addEventListener("click", () => aboutSection.classList.remove("show"));


// Projects 


/* test */

