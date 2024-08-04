
// active menu ///////////////////
// let munuli = document.querySelectorAll('header ul li a ');
// let section = document.querySelectorAll('section');


// function activeMenu(){
//     let len = section.length;
//     while(--len && wimdow.scrollY + 97 < section[len].offsetTop){}
//     menuli.forEach(sec => sec.classlist.remove('active'));
//     menuli[len].classlist.add("active");
// }

// activeMenu()
// window.addEventListener("scroll",activeMenu);


// sticky navbar /////////////////////////////////////
// const header = document.querySelector("header");
// window.addEventListener("scroll",function(){
//     header.classList.toggle("sticky",window.screenY > 50);
// })



// toggle icon navbar /////////////////////////////////////

// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }


window.addEventListener("load", () => {
    const loaderContainer = document.getElementById('loader-container');
    const content = document.getElementById('content');

    setTimeout(() => {
        loaderContainer.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('visible');
    }, 2000); // Adjust the duration as needed
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};


