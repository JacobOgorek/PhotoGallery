const thumbnails = document.querySelector('.thumbnails');
const lightbox = document.querySelector('.lightbox');
const fullImage = document.querySelector('#fullImage');
const caption = document.querySelector('#caption');

// Sample image data (you can load this from the JSON file or a database)
const images = [
    { src: 'uploads/image1.jpg', caption: 'Description 1' },
    { src: 'uploads/image2.jpg', caption: 'Description 2' },
    // Add more images
];

// Create thumbnails
images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.addEventListener('click', () => openLightbox(index));
    thumbnails.appendChild(thumbnail);
});

// Open the lightbox
function openLightbox(index) {
    fullImage.src = images[index].src;
    caption.innerHTML = images[index].caption;
    lightbox.style.display = 'block';
}

// Close the lightbox
const close = document.querySelector('.close');
close.addEventListener('click', () => lightbox.style.display = 'none');

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            // Show previous image
        } else if (event.key === 'ArrowRight') {
            // Show next image
        }
    }
});
