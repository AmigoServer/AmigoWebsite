const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');
const headerOffset = document.querySelector('.site-header').offsetHeight;

window.addEventListener('scroll', () => {
    let current = sections[0].getAttribute('id');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerOffset - 1;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('load', () => {
    const firstSection = sections[0].getAttribute('id');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${firstSection}`) {
            link.classList.add('active');
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - headerOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
