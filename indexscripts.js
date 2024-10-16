document.addEventListener('DOMContentLoaded', function () {
    let currentFrame = 0;
    const frames = document.querySelectorAll('.frame');
    const totalFrames = frames.length;
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    // Check if overlay and mainContent elements exist
    if (!overlay || !mainContent) {
        console.error('Overlay or main content element not found.');
        return;
    }

    let scrollPos = 0; // Track the scroll position

    // Function to update the animation frames based on scroll position
    function updateAnimation() {
        let frameIndex = Math.min(Math.floor(scrollPos / 100), totalFrames - 1); // Adjust scroll step as needed
        if (frameIndex !== currentFrame) {
            frames[currentFrame].style.display = 'none';  // Hide current frame
            frames[frameIndex].style.display = 'block';   // Show new frame
            currentFrame = frameIndex;
        }

        // When the last frame is reached, hide the overlay and show the main content
        if (frameIndex === totalFrames - 1) {
            overlay.style.display = 'none'; // Hide the overlay
            mainContent.style.display = 'block'; // Show the main content

            // Allow scrolling after animation is complete
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';

            // Remove the scroll event listener
            window.removeEventListener('wheel', scrollHandler);

            // Debugging logs
            console.log('Animation complete. Scroll event listener removed.');
            console.log('Body overflow:', document.body.style.overflow);
            console.log('HTML overflow:', document.documentElement.style.overflow);
        }
    }

    // Scroll handler function
    function scrollHandler(event) {
        // Accumulate scroll position based on the wheel scroll delta
        scrollPos += event.deltaY;

        // Prevent scroll position from going negative
        scrollPos = Math.max(scrollPos, 0);

        updateAnimation();

        // Prevent default scrolling while the animation is playing
        if (currentFrame < totalFrames - 1) {
            event.preventDefault(); // Stop the default scroll behavior
        }
    }

    // Attach scroll event listener for the animation
    window.addEventListener('wheel', scrollHandler, { passive: false });

    // Disable scrolling while the animation is playing
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Debugging logs
    console.log('Initial body overflow:', document.body.style.overflow);
    console.log('Initial HTML overflow:', document.documentElement.style.overflow);
});

const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.getElementsByClassName('close');

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}