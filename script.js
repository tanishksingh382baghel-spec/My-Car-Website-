// menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu");
}
//close Menu on page scroll
window.onscroll = () => {
    menu.classList.remove("move")
    navbar.classList.remove("open-menu");   
}
//Input Form Data
window.onload = () => {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("start-date").value = today;
    document.getElementById("return-date").value = new Date(
        Date.now() + 7 * 86400000
    )
    .toISOString()
    .split("T")[0];
}
//Scroll Reveal Animation
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home-img img", {origin: "right"});
animate.reveal(".input-form", {origin: "bottom"});
animate.reveal(".trend-box, .rental-box, .team-box", {interval: 100 });