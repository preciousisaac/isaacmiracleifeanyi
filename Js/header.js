
//-------------loader-------------------//

window.addEventListener("load", () => {
    const loaderContainer = document.getElementById('loader-container');
    const content = document.getElementById('content');

    setTimeout(() => {
        loaderContainer.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('visible');
    }, 2000); // Adjust the duration as needed
});




//-------------Hamburger meenu-------------//

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};



