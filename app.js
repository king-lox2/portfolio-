//---------------------------------------

const loader = document.querySelector('.loader');

window.addEventListener("load", () => {
setTimeout(function greet() {
   loader.classList.add('stop-load');
 },4000); 
}); 

//---------------------------------------

const navBtn = document.querySelector(".nav-btn");

const hideSidebar = document.querySelector(".close-sidebar");

const sidebarWrapper = document.querySelector(".sidebar-wrapper");



navBtn.addEventListener("click",() =>{
 if (sidebarWrapper.classList.contains('show-sidebar')) {
   sidebarWrapper.classList.remove('show-sidebar');
 } else{
   sidebarWrapper.classList.add('show-sidebar');
 }
});


hideSidebar.addEventListener("click",() => {
  sidebarWrapper.classList.remove('show-sidebar');

});


//---------------------------------------

const buttons = document.querySelectorAll('.btn-att');

const article = document.querySelectorAll('.article-content');

const work = document.querySelector('.work');

work.addEventListener("click", (e) => {
  const btnId = e.target.dataset.id;
  
  if (btnId) {
    buttons.forEach((btn) => {
    btn.classList.remove('showtext');
    e.target.classList.add('showtext');
    });
    
    article.forEach((text) => {
    text.classList.remove('showtext');
    });
    
    const articleDisplay = document.getElementById(btnId);
    articleDisplay.classList.add('showtext'); 
    
  }
  
});

//----------------------------------------

const navContainer = document.querySelector('.container');

const arrow = document.querySelector('.arrow-w');


window.addEventListener("scroll", () => {
 const scrollHeight = window.pageYOffset;
 
 const navHeight = navContainer.getBoundingClientRect().height;
 
 
 if (scrollHeight > navHeight) {
   navContainer.classList.add('fixed');
 }
 else {
  navContainer.classList.remove('fixed');
 }
 
 if (scrollHeight > 1500 ) {
   arrow.classList.add('arrow-show');
 }
 else {
   arrow.classList.remove('arrow-show');
 }  
 
});

//---------------------------------------

const scrollAnc = document.querySelectorAll('.scroll');

const asideContainer = document.querySelector('.container');


scrollAnc.forEach((scrolls) => {
 scrolls.addEventListener("click", (e) => {
 e.preventDefault();

const anchor = e.currentTarget.getAttribute("href").slice(1);

const anchorElement = document.getElementById(anchor);

const navHeight = navContainer.getBoundingClientRect().height;



let position = anchorElement.offsetTop - navHeight;

if (navHeight > 90) {
  position = position - navHeight;
}

if (navHeight < 90) {
  position = position - navHeight;
}

window.scrollTo({
 left:0,
 top:position,
});

if (sidebarWrapper.classList.contains('show-sidebar')) {
   sidebarWrapper.classList.remove('show-sidebar');
 }

 });
});





AOS.init({
	duration:500  
});
 