document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    // Set preview image dimensions based on original aspect ratio
    galleryItems.forEach(item => {
        const img = new Image();
        img.src = item.src;
        img.onload = () => {
            const originalWidth = img.naturalWidth;
            const originalHeight = img.naturalHeight;
            const aspectRatio = originalWidth / originalHeight;

            if (aspectRatio > 1) {
                item.style.width = '200px';
                item.style.height = (200 / aspectRatio) + 'px';
            } else {
                item.style.height = '200px';
                item.style.width = (200 * aspectRatio) + 'px';
            }
        };
    });

    //--------------------Lightbox functionality-----------------------------------//



 // Open lightbox
function openLightbox(src) {
    lightbox.style.display = 'block';
    lightboxImg.src = src;
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Show next image
function showNext() {
    let currentIndex = [...galleryItems].findIndex(item => item.querySelector('img').src === lightboxImg.src);
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].querySelector('img').src;
}

// Show previous image
function showPrevious() {
    let currentIndex = [...galleryItems].findIndex(item => item.querySelector('img').src === lightboxImg.src);
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].querySelector('img').src;
}

// Event listeners
galleryItems.forEach(item => {
    item.addEventListener('click', event => {
        openLightbox(event.target.getAttribute('data-full'));
    });
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Remove automatic lightbox opening
// if (window.innerWidth <= 768) { // This might be the problematic part
//     openLightbox(galleryItems[0].querySelector('img').getAttribute('data-full'));
// }



