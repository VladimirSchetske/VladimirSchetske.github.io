document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const fullImagePath = this.getAttribute('data-full');
            lightboxImg.src = fullImagePath;
            lightbox.style.display = 'block';
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});