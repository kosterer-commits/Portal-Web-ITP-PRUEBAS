// ============================================
// CARRUSEL V2 - JAVASCRIPT COMPLETO
// ============================================

(function() {
    'use strict';
    
    // Variables globales
    let currentSlide = 0;
    let slides = [];
    let infos = [];
    let dots = [];
    let isAnimating = false;
    let autoplayInterval = null;
    const AUTOPLAY_DELAY = 5000;
    
    // Inicialización
    document.addEventListener('DOMContentLoaded', function() {
        initCarousel();
    });
    
    function initCarousel() {
        // Obtener elementos
        slides = document.querySelectorAll('.carousel-v2-slide');
        infos = document.querySelectorAll('.carousel-v2-info');
        dots = document.querySelectorAll('.carousel-v2-dot');
        
        if (slides.length === 0) {
            console.error('No se encontraron slides del carrusel');
            return;
        }
        
        // Event listeners para navegación
        const prevBtn = document.querySelector('.carousel-v2-arrow--prev');
        const nextBtn = document.querySelector('.carousel-v2-arrow--next');
        const catalogBtn = document.querySelector('.carousel-v2-catalog-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                goToPrevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                goToNextSlide();
            });
        }
        
        // Event listeners para dots
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                goToSlide(index);
            });
        });
        
        // Event listener para botón de catálogo
        if (catalogBtn) {
            catalogBtn.addEventListener('click', openCatalogModal);
        }
        
        // Inicializar modal
        initModal();
        
        // Soporte para teclado
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                goToPrevSlide();
            } else if (e.key === 'ArrowRight') {
                goToNextSlide();
            } else if (e.key === 'Escape') {
                closeCatalogModal();
            }
        });
        
        // Iniciar autoplay
        startAutoplay();
        
        // Pausar en hover
        const carouselMain = document.querySelector('.carousel-v2-main');
        if (carouselMain) {
            carouselMain.addEventListener('mouseenter', stopAutoplay);
            carouselMain.addEventListener('mouseleave', startAutoplay);
        }
    }
    
    function goToSlide(index) {
        if (isAnimating || index === currentSlide) return;
        
        isAnimating = true;
        
        // Remover clase active de slide e info actuales
        slides[currentSlide].classList.remove('active');
        infos[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Actualizar índice
        currentSlide = index;
        
        // Agregar clase active a nuevos elementos
        slides[currentSlide].classList.add('active');
        infos[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Permitir nueva animación después de completar
        setTimeout(function() {
            isAnimating = false;
        }, 700);
        
        // Resetear autoplay
        resetAutoplay();
    }
    
    function goToNextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        goToSlide(nextIndex);
    }
    
    function goToPrevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        goToSlide(prevIndex);
    }
    
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(goToNextSlide, AUTOPLAY_DELAY);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // ============================================
    // MODAL DEL CATÁLOGO
    // ============================================
    
    function initModal() {
        const modal = document.querySelector('.carousel-v2-modal');
        const overlay = document.querySelector('.carousel-v2-modal-overlay');
        const closeBtn = document.querySelector('.carousel-v2-modal-close');
        const thumbs = document.querySelectorAll('.carousel-v2-thumb');
        
        // Cerrar con botón X
        if (closeBtn) {
            closeBtn.addEventListener('click', closeCatalogModal);
        }
        
        // Cerrar con overlay
        if (overlay) {
            overlay.addEventListener('click', closeCatalogModal);
        }
        
        // Click en thumbnails
        thumbs.forEach(function(thumb, index) {
            thumb.addEventListener('click', function() {
                goToSlide(index);
                closeCatalogModal();
            });
        });
    }
    
    function openCatalogModal() {
        const modal = document.querySelector('.carousel-v2-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Actualizar thumbnail activo
            updateActiveThumbnail();
            
            // Pausar autoplay
            stopAutoplay();
        }
    }
    
    function closeCatalogModal() {
        const modal = document.querySelector('.carousel-v2-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reanudar autoplay
            startAutoplay();
        }
    }
    
    function updateActiveThumbnail() {
        const thumbs = document.querySelectorAll('.carousel-v2-thumb');
        thumbs.forEach(function(thumb, index) {
            if (index === currentSlide) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }
    
    // ============================================
    // SOPORTE PARA TOUCH/SWIPE (Opcional)
    // ============================================
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const bannerArea = document.querySelector('.carousel-v2-banner-area');
    if (bannerArea) {
        bannerArea.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        bannerArea.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left (siguiente)
                goToNextSlide();
            } else {
                // Swipe right (anterior)
                goToPrevSlide();
            }
        }
    }
    
})();