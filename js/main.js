// nav => div -> id = navbar-list 
// 
// btn - > id = btn-nav
// 
// aside  id = side-bar => div 
// 
// div -> id = overlay
// 


// ! navbar responsive section start

var navLinks = document.getElementById("navbar-list");
var navBtn = document.getElementById("btn-nav");
var overlay = document.getElementById("overlay");
var sideBar = document.querySelector(" aside#side-bar");

sideBar.innerHTML = navLinks.innerHTML;

navBtn.addEventListener("click", () => {
    overlay.classList.toggle("open");
    sideBar.classList.toggle("open");


    if (sideBar.classList.contains('open')) {
        navBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
    }
    else {
        navBtn.innerHTML = `<i
                            class="fa-solid fa-bars"></i>`
    }
})

function closeSideBar(){
    overlay.classList.remove('open');
    sideBar.classList.remove('open');
    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
}


// ? navbar responsive section end
