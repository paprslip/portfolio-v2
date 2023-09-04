function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleExtraInfo(num) {
    const text1 = `.extra-info-${num}`;
    const downArrow = document.querySelector(text1);
    downArrow.classList.toggle("open");
}