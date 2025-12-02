const imageWrap = document.querySelector('.image_wrap');
const firstBlock = document.querySelector('.first_block');

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
let isActive = false;

function animate() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    imageWrap.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

    requestAnimationFrame(animate);
}

animate();

function updateTarget(e) {
    const rect = imageWrap.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const maxRotate = 7;

    targetX = (-deltaY / rect.height) * maxRotate;
    targetY = (deltaX / rect.width) * maxRotate;
}

firstBlock.addEventListener('mouseenter', () => {
    isActive = true;
    document.addEventListener('mousemove', updateTarget);
});

firstBlock.addEventListener('mouseleave', () => {
    isActive = false;
    targetX = 0;
    targetY = 0;
    document.removeEventListener('mousemove', updateTarget);
});

document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget) {
        isActive = false;
        targetX = 0;
        targetY = 0;
        document.removeEventListener('mousemove', updateTarget);
    }
});
