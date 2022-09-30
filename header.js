var nav = document.getElementById("nav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    nav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    nav.classList.remove("active");
}