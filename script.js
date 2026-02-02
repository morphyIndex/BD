const homeLink = document.getElementById('home-link');
const wishesLink = document.getElementById('wishes-link');
const homeSection = document.getElementById('home-section');
const wishesSection = document.getElementById('wishes-section');

function switchTab(show, hide, activeLink, inactiveLink) {
    show.classList.remove('hidden');
    hide.classList.add('hidden');
    activeLink.classList.add('active');
    inactiveLink.classList.remove('active');
    window.scrollTo(0,0);
}

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(homeSection, wishesSection, homeLink, wishesLink);
});

wishesLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(wishesSection, homeSection, wishesLink, homeLink);
});