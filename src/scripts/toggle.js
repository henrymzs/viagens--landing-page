const toggleButton = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
const icon = document.querySelector(".header__toggle-icon");
const navLinks = document.querySelectorAll(".header__nav a");

toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--active');
    toggleButton.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("header__nav--active")) {
            nav.classList.remove("header__nav--active");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            toggleButton.setAttribute("aria-expanded", false);
        }
    });
});

