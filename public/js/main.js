const navlinks = document.querySelector(".navlinks");
const menuButton = document.querySelector(".menuButton");
const contactbtn = document.querySelectorAll(".contact");



menuButton.addEventListener("click" , () => {
    navlinks.classList.toggle("open");
});

contactbtn.forEach((btn) => {
    btn.addEventListener("click" , () => {
        console.log("i was clicked");
        window.scrollTo(0, document.body.scrollHeight);
    });
});