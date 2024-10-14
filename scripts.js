let currentIndex = 0;

function moveCarousel(index) {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Wrap around logic: if index exceeds bounds, loop around
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Move the carousel to the new index
    const translateX = -100 * currentIndex;
    container.style.transform = `translateX(${translateX}%)`;

    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Set initial active dot
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.dot').classList.add('active');
});

