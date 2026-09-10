

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

    if (iterationCount == 0) {
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



// ! skills section start

const skills = document.querySelector(" #skills div");

var skillsList = [
    {
        skill_title: "HTML",
        skill_img: "fa-brands fa-html5",
        skill_color: "text-orange-600"
    },

    {
        skill_title: "CSS",
        skill_img: "fa-brands fa-css",
        skill_color: "text-purple-700"
    },

    {
        skill_title: "JavaScript",
        skill_img: "fa-brands fa-square-js",
        skill_color: "text-yellow-500"
    },

    {
        skill_title: "BootStrap",
        skill_img: "fa-brands fa-bootstrap",
        skill_color: "text-purple-700"
    },

    {
        skill_title: "TailWind",
        skill_img: "fa-brands fa-tailwind-css",
        skill_color: "text-teal-700"
    },

    {
        skill_title: "C++",
        skill_img: "fa-solid fa-code",
        skill_color: "text-blue-700"
    },
    {
        skill_title: "Git",
        skill_img: "fa-brands fa-git-alt",
        skill_color: "text-orange-600"
    },
    {
        skill_title: "GitHub",
        skill_img: "fa-brands fa-github",
        skill_color: "text-gray-800"
    },
    {
        skill_title: "Java",
        skill_img: "fa-brands fa-java",
        skill_color: "text-red-600"
    },
    {
        skill_title: "PHP",
        skill_img: "fa-brands fa-php",
        skill_color: "text-indigo-600"
    },
    {
        skill_title: "SQL",
        skill_img: "fa-solid fa-database",
        skill_color: "text-blue-600"
    },
    {
        skill_title: "Python",
        skill_img: "fa-brands fa-python",
        skill_color: "text-yellow-500"
    },
    {
        skill_title: "OOP",
        skill_img: "fa-solid fa-cubes",
        skill_color: "text-green-600"
    },
    {
        skill_title: "Figma",
        skill_img: "fa-brands fa-figma",
        skill_color: "text-purple-500"
    },

    {
        skill_title: "Chess",
        skill_img: "fa-solid fa-chess-knight",
        skill_color: "text-green-800"
    },
    {
        skill_title: "P Solving",
        skill_img: "fa-solid fa-puzzle-piece",
        skill_color: "text-amber-500"
    },
    {
        skill_title: "DS",
        skill_img: "fa-solid fa-sitemap",
        skill_color: "text-violet-600"
    },
    {
        skill_title: "Algorithms",
        skill_img: "fa-solid fa-list-check",
        skill_color: "text-rose-500"
    },
    {
        skill_title: "Terminal",
        skill_img: "fa-solid fa-terminal",
        skill_color: "text-gray-700"
    },




]

var skillData = "";

for (var i = 0; i < skillsList.length; i++) {
    var skillsContent = `
                <article class="flex flex-col justify-between cursor-pointer items-center p-3 rounded-lg bg-gray-300 hover:bg-gray-400 w-[100px] h-[102px] m-3 hover:scale-110">
                    <span class="${skillsList[i].skill_color} text-5xl "><i class="${skillsList[i].skill_img}"></i></span>
                    <h6 class="text-black font-inter font-bold mt-1" >${skillsList[i].skill_title}</h6>
                </article>
                `

    skillData = skillData + skillsContent;
}

skills.innerHTML = skillData;

// ? skills section end







