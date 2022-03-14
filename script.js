const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("open");
    navMenu.classList.toggle("open");
});

navMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-menu-link")) {
        const id = e.target.getAttribute("href");
        const element = document.querySelector(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
});