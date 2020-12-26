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

/**
 * Define Global Variables
 * 
*/

let sections = document.getElementsByTagName('section');
let navUl       = document.getElementById('navbar__list');
let navItems = document.getElementsByClassName('nav-item');
let target,targetSec ;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// remove active class for sections
function removeActiveClass(){
    for(navItem of navItems){
        if(navItem.classList.contains('active-link')){
            navItem.classList.remove('active-link');
        }
    }
}

// get active class for sections
function getActiveSec(){
    let activeSec = sections[0];
    let maxVal = 100000;
    for(section of sections){
        let bounding = section.getBoundingClientRect();
        if(bounding.top > - 300  && bounding.top < maxVal){
            maxVal = bounding.top;
            activeSec = section;
        }
    }
    return activeSec;
}
// remove active nav item
function removeActiveLink(){
    for(section of sections){
        if(section.classList.contains('your-active-class')){
            section.classList.remove('your-active-class');
        }
    }
}

// get active nav item
function getActiveLink( activeSec){
    let secId = activeSec.id;
    let activeLink = document.getElementById('nav-'+secId);
    return activeLink;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for(section of sections){
    let secData = section.dataset.nav;
    let secId = section.getAttribute('id');
    let liEl = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('class','menu__link');
    link.setAttribute('data-target',secId);
    liEl.setAttribute('id','nav-'+secId);
    link.textContent = secData;
    liEl.appendChild(link);
    liEl.setAttribute('class','nav-item');
    navUl.appendChild(liEl);
}


// Add class 'active' to section & nav item when near top of viewport

// function getActiveSec(){
//     let activeSec = sections[0];
//     let maxVal = 10000;
//     for(section of sections){
//         let bounding = section.getBoundingClientRect();
//         if(bounding.top > - 300  && bounding.top < maxVal){
//             maxVal = bounding.top;
//             activeSec = section;
//         }
//     }
//     return activeSec;
// }
window.addEventListener('scroll',function(){
    removeActiveClass();
    removeActiveLink();
    let activeSec = getActiveSec();
    let activeLink = getActiveLink(activeSec);
    activeSec.classList.add('your-active-class');
    activeLink.classList.add('active-link');
})
    
// Scroll to top
let scrollUp = document.getElementById('scroll-up');
scrollUp.addEventListener('click',function (){
    // for(section of sections){
        
    //  }
    window.scrollTo(document.body.scrollLeft,document.body.scrollTop);
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
for(navItem of navItems){
    navItem.addEventListener('click',function(){
         target = this.firstElementChild.dataset.target;
         targetSec = document.getElementById(target);
        //  removing active class
         removeActiveClass();
        //  add active class to targeted section
         targetSec.classList.add('your-active-class');
        // window.scrollTo(targetSec.offsetLeft,targetSec.offsetTop);
        targetSec.scrollIntoView ({behavior: 'smooth',block: "end",inline:"nearest"})
    });
}
// Set sections as active


