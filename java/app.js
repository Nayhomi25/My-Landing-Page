/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**rgb(136,203,171);
    background: linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%); */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// Define Global Variables//
const navBar = document.querySelector('.navbar__menu');
const ul = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');

//End Global Variables//

 

// Starting to build the nav//
const nav = document.querySelector('.navbar');
let sticky = nav.offsetTop;

const navbarScroll = () => {
    if (window.pageYOffset >= sticky) {
      //makes the navbar stationary//
      nav.classList.add('sticky')

    } else {
      //removes the stationary navbar//
      nav.classList.remove('sticky');
    }
  };
  
 window.onscroll = navbarScroll;


// build the nav
function buildNav(){
    sections.forEach(section => {
        //Create the li elements that contained inside the ul
        const navButton = document.createElement('li');
        //Insert the html text to  the li
        navButton.insertAdjacentHTML('afterbegin',`<a href='#${section.id}' class='menu__link'>${section.dataset.nav}</a>`);
        //Append the li to the ul
        ul.appendChild(navButton);

        //scrollBehavior Function Invoke
       scrollBehavior(navButton, section);
    });
    //Append the ul to the nav
    navBar.appendChild(ul);
}

//Build Nav Function Invoke//
buildNav();


// scroll event, to scroll to the section when it is clicked on the navbar//
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:'smooth'
        });
    });
}

//collaspsible sections//
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function setActive (){
  //const sec = document.querySelectorAll('.menu__link')
  sections.forEach((section, i)=>{
      //Get the boundingrect for each section//
      const sectionBond = section.getBoundingClientRect();
      //Check if the section is in viewport or not//
      if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
          //section in viewport accourding to top and bottom boundings//
          //add 'your-active-class' class to the specific section//
          section.classList.add('your-active-class');
      } else{
          //Remove section active class when section is off sight//
          section.classList.remove('your-active-class');
        
      }
  })
}
window.addEventListener('scroll',(event)=>{
  setActive();
})

// start of Highlight sections during scroll//
const post = document.getElementById('nav_bar')
const hiLight = post.getBoundingClientRect().top;
const viewportHeight = window.outerHeight;

let navHeight = document.getElementById('nav_bar').offsetHeight;

let navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', e => {
  scrollin= window.scrollY;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollin + 300 &&
        section.offsetTop + section.offsetHeight > scrollin + 300) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
//end of Highlight sections during scroll//

//slideshow//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// Start of GO UP Button//

// Scroll to top of the Landing Page using scrollTO event//
document.getElementById('top').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

//to show and hide the button//
const topButton = document.querySelector('#top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 20) {
      //hides top button when page is at the top//
        topButton.style.visibility = 'hidden';
        topButton.style.opacity = '0';
    } else {
      //shows button immediately page leaves top//
        topButton.style.visibility = 'visible';
        topButton.style.opacity = '1';
    }
});
// End of GO UP Button//
