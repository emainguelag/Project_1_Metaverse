
const allButton = document.querySelector(".all-button");
const technoButton = document.querySelector(".techno-button");
const socialButton = document.querySelector(".social-button");
const securityButton = document.querySelector(".security-button");
const financeButton = document.querySelector(".finance-button");

const technoArticles = document.querySelectorAll(".techno");
const socialArticles = document.querySelectorAll(".social");
const securityArticles = document.querySelectorAll(".security");
const financeArticles = document.querySelectorAll(".finance");


function hidden(item) {
    item.classList.toggle("hidden");
}

function visible(item) {
    item.classList.remove("hidden");
}

technoButton.addEventListener("click", function () {
    socialArticles.forEach(visible);
    securityArticles.forEach(visible);
    financeArticles.forEach(visible);
    technoArticles.forEach(visible);
    socialArticles.forEach(hidden);
    securityArticles.forEach(hidden);
    financeArticles.forEach(hidden);
});

socialButton.addEventListener("click", function () {
    socialArticles.forEach(visible);
    securityArticles.forEach(visible);
    financeArticles.forEach(visible);
    technoArticles.forEach(visible);
    technoArticles.forEach(hidden);
    securityArticles.forEach(hidden);
    financeArticles.forEach(hidden);
});

securityButton.addEventListener("click", function () {
    socialArticles.forEach(visible);
    securityArticles.forEach(visible);
    financeArticles.forEach(visible);
    technoArticles.forEach(visible);
    technoArticles.forEach(hidden);
    socialArticles.forEach(hidden);
    financeArticles.forEach(hidden);
});

financeButton.addEventListener("click", function () {
    socialArticles.forEach(visible);
    securityArticles.forEach(visible);
    financeArticles.forEach(visible);
    technoArticles.forEach(visible);
    technoArticles.forEach(hidden);
    socialArticles.forEach(hidden);
    securityArticles.forEach(hidden);
});

allButton.addEventListener("click", function () {
    socialArticles.forEach(visible);
    securityArticles.forEach(visible);
    financeArticles.forEach(visible);
    technoArticles.forEach(visible);
});