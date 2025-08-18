// Smooth image loading animation
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle animation to fact cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe fact cards and ecology items
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.fact-card, .ecology-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add hover effect to gallery images
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Simple loading indicator
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add some personality with a fun fact rotation
const funFacts = [
    "Red squirrels are excellent tree climbers and can jump between branches!",
    "They cache food for winter and have remarkable memory for finding their stores.",
    "Red squirrels can swim when necessary to cross water.",
    "They can rotate their ankles to climb down trees head-first.",
    "Red squirrels are diurnal and most active during daylight hours."
];

let currentFactIndex = 0;

function rotateFunFact() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        setTimeout(() => {
            heroSubtitle.textContent = funFacts[currentFactIndex];
            heroSubtitle.style.opacity = '1';
            currentFactIndex = (currentFactIndex + 1) % funFacts.length;
        }, 500);
    }
}

// Rotate fun facts every 5 seconds
setInterval(rotateFunFact, 5000);

// Add a subtle parallax effect to the hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Lightbox functionality
let currentImageIndex = 0;
const galleryImages = [];

document.addEventListener('DOMContentLoaded', function() {
    // Collect all gallery images
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach((img, index) => {
        galleryImages.push({
            src: img.src,
            alt: img.alt,
            caption: img.parentElement.querySelector('p').textContent
        });
        
        // Add click event to open lightbox
        img.addEventListener('click', () => openLightbox(index));
    });
    
    // Lightbox controls
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightbox();
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    function updateLightbox() {
        const image = galleryImages[currentImageIndex];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightboxCaption.textContent = image.caption;
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightbox();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('show')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
}); 