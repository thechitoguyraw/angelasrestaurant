var menu = document.querySelector("#navlist");
var menuLi = document.querySelector("#links");
var collapse = document.querySelector("#hamburger");
const nav = document.querySelector('#navbar');
const navSet = nav.offsetTop;

function showTabs(active){
  // set activeTabs to all .active
  let activeTabs = document.querySelectorAll('.active')
  // removes active class from tab name and tab content
  for(let i = 0; i < activeTabs.length; i++){
    activeTabs[i].className = activeTabs[i].className.replace('active', '');
  }
  // adds active class to clicked tab name and content

  active.target.parentElement.className += ' active';
  document.getElementById(active.target.href.split('#')[1]).className += ' active';

}
// adds event listner to nav-tab when clicked runs function
const tabCategories = document.getElementById('nav-tab');
tabCategories.addEventListener('click', showTabs, false);






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
