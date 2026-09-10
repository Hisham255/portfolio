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

function closeSideBar() {
    overlay.classList.remove('open');
    sideBar.classList.remove('open');
    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
}

// ? navbar responsive section end


// ! hero section start

const p = document.querySelector('.hero-section div p:nth-of-type(2)');

const texts = [
    "I'm a always seeks excellence and to stand out in whatever I do.     ",
    'Artificial intelligence cannot replicate human creativity.     ',
    'Creating what comes Next.     ',
    'How difficult is the perseverance of one person.     ',
    'Making the digital world more beautiful.     ',
    'Turning ideas into experiences.     '
];

let currentIndex = 0;
let iterationCount = 0;

function getTextWidth(text, element) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = getComputedStyle(element).font; // match exact font/size
    return ctx.measureText(text).width;
}

p.addEventListener('animationiteration', () => {
    iterationCount++;

    if(iterationCount == 0){
        p.textContent = texts[0];
    }

    if (iterationCount % 2 === 0) {
        currentIndex = (currentIndex + 1) % texts.length;
        p.textContent = texts[currentIndex];

        const width = getTextWidth(texts[currentIndex], p);
        
        p.style.width = `${width}px`;
        p.style.animationTimingFunction = `steps(${texts[currentIndex].length})`;
    }
});

// ? hero section end
