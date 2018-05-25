

/* Navigation Menu */

// global vars

// individual nav buttons
const navContact = document.querySelector('.nav .contact-nav');
const navAbout = document.querySelector('.nav .about-nav');
const navResume = document.querySelector('.nav .resume-nav');
const navProjects = document.querySelector('.nav .projects-nav');


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


/* Overlay */

const overlay = document.querySelector(".overlay");

// remove overlay and content box when clicked on to return to the main landing page
// function for setting up button for removing overlay and pop up content

function closeMenuSetup(overlay, content) {
    let str = ".x .close-btn";
let str2 = str.replace("x", content.className);
    let str3 = str2.replace("show", "");

    const overlayBtn = document.querySelector(str3);

    overlayBtn.addEventListener("click", () => {
        overlay.classList.remove("show");
        content.classList.remove("show");
    });
    

}



/* Resume Section */

const resume = document.querySelector(".resume");
const resumeButton = document.querySelector(".resume .flip-cv");
const cvPage1 = document.querySelector(".resume .cv-page1");
const cvPage2 = document.querySelector(".resume .cv-page2");

navResume.addEventListener("click", () => {
    overlay.classList.add("show");
    resume.classList.add("show");
    closeMenuSetup(overlay, resume);
});

resumeButton.addEventListener("click", () => {
    let cv1DisplayState = window.getComputedStyle(cvPage1, null).getPropertyValue("display");
    // check if first or second page is showing and display the other
    if(cv1DisplayState == "block") {
        cvPage1.style.display = "none";
        cvPage2.style.display = "block";
    }
    else {
        cvPage1.style.display = "block";
        cvPage2.style.display = "none";
    }
});





/* Contacts Section */

const content = document.querySelector(".content");

navContact.addEventListener("click", () => {
    overlay.classList.add("show"); 
    content.classList.add("show");
    closeMenuSetup(overlay, content);
});



/* About Section */

const aboutSection = document.getElementById("about"); 
const closeAbout = document.querySelector("#about .close-about");

// show about section when about is clicked in nav menu
navAbout.addEventListener("click", () => aboutSection.classList.add("show"));

// show and hide close button when mouse enters about section area
aboutSection.addEventListener("mouseenter", () => closeAbout.classList.add("show"));
aboutSection.addEventListener("mouseleave", () => closeAbout.classList.remove("show"));

// close button closes about section
closeAbout.addEventListener("click", () => aboutSection.classList.remove("show"));


/* Projects Section */

const projectsSection = document.getElementById("projects"); 
const closeProjects = document.querySelector("#projects .close-projects");

// show about section when about is clicked in nav menu
navProjects.addEventListener("click", () => projectsSection.classList.add("show"));

// show and hide close button when mouse enters about section area
projectsSection.addEventListener("mouseenter", () => closeProjects.classList.add("show"));
projectsSection.addEventListener("mouseleave", () => closeProjects.classList.remove("show"));

// close button closes about section
closeProjects.addEventListener("click", () => projectsSection.classList.remove("show"));


/* Using Masonry to grid projects */

let project = document.querySelector('#main-view #projects');

//gridItem[i].style.display = "block"
let msnry = new Masonry(project, {
  // options
  itemSelector: '.item', // query selector of the individual items within the grid
  columnWidth: 370, // adjust width of each column which tries to fit in the masonry grid'
  containerStyle: null,
  
});                // default is 200















/* test */

