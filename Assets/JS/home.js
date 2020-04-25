var imgs = ['img/authentic.jpg', 'img/taco.jpg', 'img/authentic.jpg'];
var time = 3000;
var i = 0
var menu = document.querySelector("#navlist");
var menuLi = document.querySelector("#links");
var collapse = document.querySelector("#hamburger");
const nav = document.querySelector('#navbar');
const navSet = nav.offsetTop;

function stickyNav() {
  

  if (window.scrollY >= navSet) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNav);









function changeSlide(){
    document.slides.src = imgs[i];

       if(i < imgs.length-1){
           i++;
} 
    else{
    i = 0;
}
setTimeout("changeSlide()", time);

}

window.onload = changeSlide;

// function  toggle(){
//   menu.classList.toggle("toggleMenu");
//   hamburger.addEventListener('click', "toggleMenu" )
// }
collapse.addEventListener('click', function(){
  menu.classList.toggle("togglemenu");

  menuLi.classList.toggle("menucss");
});
