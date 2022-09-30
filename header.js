const button = document.getElementById('openBtn')

button.addEventListener('click', function () {
    const ul = document.getElementById('navbar');
    const list = document.getElementsByClassName('ul');

    for (const li of list) {
        li.classList.toggle('horizontal');
    }
});