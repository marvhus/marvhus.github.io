const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links .right');
const listItems = document.querySelectorAll('.nav-links .right .list-item');

hamburger.addEventListener('click', () => {
    console.log('click');
    navLinks.classList.toggle('open');
    listItems.forEach(listItem => {
        listItem.classList.toggle('fade');
    });
});

// Ignore this, just a git test test