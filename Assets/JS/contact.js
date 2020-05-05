var menu = document.querySelector("#navlist");
var menuLi = document.querySelector("#links");
var collapse = document.querySelector("#hamburger");
const nav = document.querySelector('#navbar');
const navSet = nav.offsetTop;


// StickyNav Function Js
function stickyNav() {
  
    if (window.scrollY >= navSet) {
  
      //Sticky class added when scrolled past nav height
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('sticky');
  
    } else {
  
  // removes sticky nav if height of nav is not scrolled
      document.body.style.paddingTop = 0;
      document.body.classList.remove('sticky');
  
    }
  
  }
  // Initializes when scrolled past nav height
  window.addEventListener('scroll', stickyNav);
  
  // Hamburger Menu Js
  collapse.addEventListener('click', function(){
  
      // adds classes to Nav upon click
      menu.classList.toggle("togglemenu");
      menuLi.classList.toggle("menucss");
      
    });