const hamBtn = document.getElementById("hamBtn");

const primaryNav = document.getElementById("primaryNav");

function toggleMenu() {
    primaryNav.classList.toggle("open")
    hamBtn.classList.toggle("open")
};

hamBtn.onclick = toggleMenu;