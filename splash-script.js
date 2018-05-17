

/* Navigation Menu */

// global vars
let menuButton = document.getElementById("menu-btn");
let navMenu = document.querySelector(".nav");
let navContact = document.querySelector('.nav .contact');
let navResume = document.querySelector('.nav .about');
let navProjects = document.querySelector('.nav .resume');
let navAbout = document.querySelector('.nav .projects');


// show nav menu
menuButton.addEventListener("click", () => navMenu.classList.add("show"));

// individual nav buttons
let overlay = document.querySelector(".overlay");
navResume.addEventListener("click", () => overlay.classList.add("show"));
navAbout.addEventListener("click", () => overlay.classList.add("show"));
navProjects.addEventListener("click", () => overlay.classList.add("show"));
navContact.addEventListener("click", () => overlay.classList.add("show"));

/* Overlay */

// remove overlay when clicked on to return to the main landing page
overlay.addEventListener("click", () => overlay.classList.remove("show"));
