window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});