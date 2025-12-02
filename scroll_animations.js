gsap.registerPlugin(ScrollTrigger);

// Анімація для заголовків секцій магазину і join
gsap.utils.toArray('.third_section h2, .fourth_section h2').forEach(heading => {
    gsap.from(heading, {
        scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 0.5,
        },
        y: 50,
        opacity: 0,
        duration: 1,
    });
});

// Анімація для заголовку about (з верху, з поворотом)
gsap.from('.second_block h2', {
    scrollTrigger: {
        trigger: '.second_block h2',
        start: 'top 85%',
        end: 'top 65%',
        scrub: 0.5,
    },
    y: -60,
    opacity: 0,
    rotation: -15,
    duration: 1.2,
});

// Анімація для bg_about (знизу)
gsap.from('.bg_about', {
    scrollTrigger: {
        trigger: '.bg_about',
        start: 'top 80%',
        end: 'top 55%',
        scrub: 0.6,
    },
    y: 150,
    opacity: 0,
    duration: 1.3,
});

// Анімація для першого grass_block (зліва)
gsap.from('.grass_blocks img:first-child', {
    scrollTrigger: {
        trigger: '.bg_about',
        start: 'top 75%',
        end: 'top 50%',
        scrub: 0.5,
    },
    x: -200,
    opacity: 0,
    duration: 1.2,
});

// Анімація для другого grass_block (справа)
gsap.from('.grass_blocks img:last-child', {
    scrollTrigger: {
        trigger: '.bg_about',
        start: 'top 75%',
        end: 'top 50%',
        scrub: 0.5,
    },
    x: 200,
    opacity: 0,
    duration: 1.2,
});

// Анімація для карточок магазину з каскадним ефектом
gsap.utils.toArray('.shop-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 0.3,
        },
        y: 80,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: index * 0.15,
    });
});

// Анімація для server-card (знизу з rotation)
gsap.from('.server-card', {
    scrollTrigger: {
        trigger: '.server-card',
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.6,
    },
    y: 120,
    opacity: 0,
    scale: 0.7,
    rotation: -12,
    duration: 1.3,
});

// Анімація для текстового блоку у first_block
gsap.from('.text-wrap.text-hero', {
    scrollTrigger: {
        trigger: '.first_block',
        start: 'top center',
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
});
