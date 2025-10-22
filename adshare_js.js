
//==========Nav Autohide==========//

const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

  if (lastScrollY < window.scrollY) {
    // Scrolling down → hide navbar
    //console.log("we are going down");
    navbar.classList.add("hidden");
  } else {
    // Scrolling up → show navbar
    //console.log("we are going up");
    navbar.classList.remove("hidden");
  }

  lastScrollY = window.scrollY; 
});

//==========Show Menu==========//

const showMenu =(navId, toggleId) => {
  const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId)
  
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show_menu')
  })
}
showMenu('navbar-menu','navbar-toggle')

//==========Remove Menu==========//

const navLink = document.querySelectorAll('.navbar_menu_link')

const linkAction = () => {
  const navMenu = document.getElementById('navbar-menu')
  // When click on each navbar_menu_link, we remove the show_menu class
  navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Add an event listener to the entire document
document.addEventListener('click', (event) => {
  const navMenu = document.getElementById('navbar-menu');
  const navToggle = document.querySelector('.navbar_toggle'); // Get your toggle button

  // Check if the menu is visible and the clicked element is NOT inside the menu or the toggle button
  if (
    navMenu.classList.contains('show_menu') && // The menu is open
    !navMenu.contains(event.target) && // Clicked element is outside the menu
    !navToggle.contains(event.target) // Clicked element is not the button that opens the menu
  ) {
    navMenu.classList.remove('show_menu');
  }
});