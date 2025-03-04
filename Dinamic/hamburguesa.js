const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');


menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); 
    navMenu.classList.toggle('open');
});


document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});