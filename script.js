document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    // Ensure the lightbox is initially hidden
    lightbox.style.display = 'none';

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

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const fullImagePath = this.getAttribute('data-full');
            lightboxImg.src = fullImagePath;
            lightbox.style.display = 'block';
            currentIndex = Array.from(galleryItems).indexOf(item);
        });
    });

    if (close) {
        close.addEventListener('click', function () {
            lightbox.style.display = 'none';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    if (prev) {
        prev.addEventListener('click', function () {
            showImage(currentIndex - 1);
        });
    }

    if (next) {
        next.addEventListener('click', function () {
            showImage(currentIndex + 1);
        });
    }

    function showImage(index) {
        const totalItems = galleryItems.length;
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        const fullImagePath = galleryItems[currentIndex].getAttribute('data-full');
        lightboxImg.src = fullImagePath;
        lightbox.style.display = 'block';
    }
});
