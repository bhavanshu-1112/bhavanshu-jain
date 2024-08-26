document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});