

document.addEventListener('DOMContentLoaded', function () {
    // Select all images in the gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

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
});
