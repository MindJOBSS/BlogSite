const navlinks = document.querySelector(".navlinks");
const menuButton = document.querySelector(".menuButton");
const scrollContainer = document.querySelector(".gridContainer");
const scrollContainer2 = document.querySelector(".gridContainer2");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const nextbtn2 = document.querySelector(".next2");
const prevbtn2 = document.querySelector(".prev2");
const contactbtn = document.querySelectorAll(".contact");



menuButton.addEventListener("click" , () => {
    navlinks.classList.toggle("open");
});


nextbtn.addEventListener("click" , () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 200;
});

prevbtn.addEventListener("click" , () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 200;
});

nextbtn2.addEventListener("click" , () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 200;
});

prevbtn2.addEventListener("click" , () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 200;
});

contactbtn.forEach((btn) => {
    btn.addEventListener("click" , () => {
        console.log("i was clicked");
        window.scrollTo(0, document.body.scrollHeight);
    });
});