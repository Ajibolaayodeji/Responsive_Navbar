let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector("#nav_links");
let links = document.querySelector(".links");

//hamburger
hamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

//hiding
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        navLinks.classList.toggle('hide');
    })
}