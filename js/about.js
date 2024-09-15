const sliderContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth;  // Assuming all cards have the same width

// Function to update the carousel position
function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Show the next card
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
});

// Show the previous card
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
});

// Autoplay feature
setInterval(() => {
    nextButton.click();
}, 3000);  // Slide every 3 seconds

// Update card width on window resize
window.addEventListener('resize', () => {
    sliderContainer.style.transition = 'none';  // Disable transition during resize
    updateSlider();
    setTimeout(() => {
        sliderContainer.style.transition = 'transform 0.5s ease-in-out';  // Re-enable transition
    }, 100);
});