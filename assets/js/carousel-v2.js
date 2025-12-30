// ============================================
// CARRUSEL V2 - VERSIÓN DINÁMICA SIMPLIFICADA
// Solo edita el array de slides para agregar/quitar banners
// ============================================

// ============================================
// CONFIGURACIÓN DE SLIDES - EDITA AQUÍ
// ============================================
var carouselSlidesData = [
    {
        banner: 'assets/imagenes/banners/banner1.jpg',
        tag: 'Convocatoria',
        title: 'Reinscripción Enero-Junio 2026',
        description: 'Consulta la convocatoria completa para el proceso de reinscripción del semestre Enero-Junio 2026.',
        buttonText: 'Ver convocatoria',
        link: 'pdf/CONVOCATORIA ENERO - JUNIO 2026.pdf',
        thumbnail: 'assets/imagenes/banners/banner1.jpg'
    },
    {
        banner: 'assets/imagenes/banners/banner2.jpg',
        tag: 'Licitación',
        title: 'Servicio de Limpieza 2025',
        description: 'Convocatoria abierta para la contratación de servicio de limpieza en las instalaciones del Instituto.',
        buttonText: 'Ver documento',
        link: 'pdf/CONVOCATORIA ABIERTA SERVICIO DE LIMPIEZA No.ITP-DRMS-SL-001-2025  (1).pdf',
        thumbnail: 'assets/imagenes/banners/banner2.jpg'
    },
    {
        banner: 'assets/imagenes/banners/banner3.jpg',
        tag: 'Licitación',
        title: 'Vigilancia y Seguridad',
        description: 'Convocatoria para contratación de servicio de vigilancia y seguridad privada en el campus.',
        buttonText: 'Ver documento',
        link: 'pdf/CONVOCATORIA ABIERTA SERVICIO DE VIGILANCIA Y SEGURIDADNo.ITP-DRMS-SV-001-2025.pdf',
        thumbnail: 'assets/imagenes/banners/banner3.jpg'
    },
    {
        banner: 'assets/imagenes/banners/banner4.jpg',
        tag: 'Examen',
        title: 'Convocatoria EGEL Marzo 2026',
        description: 'Inscríbete al Examen General de Egreso de Licenciatura aplicación Marzo 2026.',
        buttonText: 'Ver convocatoria',
        link: 'pdf/CONVOCATORIA EGEL 2026 (1).pdf',
        thumbnail: 'assets/imagenes/banners/banner4.jpg'
    },
    {
        banner: 'assets/imagenes/banners/banner5.jpg',
        tag: 'Calendario',
        title: 'Calendario Escolar Ene-Jun 2026',
        description: 'Consulta el calendario oficial del semestre Enero-Junio 2026 con fechas importantes.',
        buttonText: 'Ver calendario',
        link: 'pdf/Calendario ENERO - JUNIO 2026.2.pdf',
        thumbnail: 'assets/imagenes/banners/banner5.jpg'
    },
    
];

// Variables globales
var carouselCurrentSlide = 0;
var carouselIsAnimating = false;
var carouselAutoplayInterval = null;
var CAROUSEL_AUTOPLAY_DELAY = 5000;

// Función de inicialización
function initCarouselV2() {
    console.log('🚀 Iniciando carrusel V2 dinámico...');

    // Generar HTML dinámicamente
    generateCarouselHTML();

    // Configurar eventos
    setupCarouselEvents();

    // Iniciar autoplay
    carouselStartAutoplay();

    console.log('✅ Carrusel inicializado con', carouselSlidesData.length, 'slides');
}

// Generar todo el HTML del carrusel dinámicamente
function generateCarouselHTML() {
    var slidesContainer = document.querySelector('.carousel-v2-slides');
    var infoWrapper = document.querySelector('.carousel-v2-info-wrapper');
    var indicatorsContainer = document.querySelector('.carousel-v2-indicators');
    var modalGrid = document.querySelector('.carousel-v2-modal-grid');

    if (!slidesContainer || !infoWrapper || !indicatorsContainer || !modalGrid) {
        console.error('❌ Contenedores no encontrados');
        return;
    }

    // Limpiar contenedores
    slidesContainer.innerHTML = '';
    infoWrapper.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    modalGrid.innerHTML = '';

    // Generar cada slide
    carouselSlidesData.forEach(function(slide, index) {
        // Generar slide del banner
        var slideDiv = document.createElement('div');
        slideDiv.className = 'carousel-v2-slide' + (index === 0 ? ' active' : '');
        slideDiv.setAttribute('data-slide', index);
        slideDiv.innerHTML = '<img src="' + slide.banner + '" alt="' + slide.title + '" class="carousel-v2-banner-img lazyload">';
        slidesContainer.appendChild(slideDiv);

        // Generar info
        var infoDiv = document.createElement('div');
        infoDiv.className = 'carousel-v2-info' + (index === 0 ? ' active' : '');
        infoDiv.setAttribute('data-info', index);

        var buttonHTML = slide.onclick
            ? '<a href="' + slide.link + '" class="carousel-v2-btn" onclick="' + slide.onclick + '">'
            : '<a href="' + slide.link + '" class="carousel-v2-btn" target="_blank">';

        infoDiv.innerHTML =
            '<div class="carousel-v2-info-content">' +
                '<h2 class="carousel-v2-title">' + slide.title + '</h2>' +
                '<div class="carousel-v2-description-row">' +
                    '<p class="carousel-v2-description">' + slide.description + '</p>' +
                    buttonHTML +
                        '<span>' + slide.buttonText + '</span>' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<path d="M5 12h14M12 5l7 7-7 7"/>' +
                        '</svg>' +
                    '</a>' +
                '</div>' +
            '</div>';
        infoWrapper.appendChild(infoDiv);

        // Generar dot indicador
        var dot = document.createElement('button');
        dot.className = 'carousel-v2-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('data-slide', index);
        dot.setAttribute('aria-label', 'Slide ' + (index + 1));
        dot.onclick = function(e) {
            e.preventDefault();
            carouselGoToSlide(index);
        };
        indicatorsContainer.appendChild(dot);

        // Generar thumbnail para modal
        var thumb = document.createElement('div');
        thumb.className = 'carousel-v2-thumb' + (index === 0 ? ' active' : '');
        thumb.setAttribute('data-slide', index);
        thumb.innerHTML =
            '<img src="' + slide.thumbnail + '" alt="' + slide.title + '">' +
            '<div class="carousel-v2-thumb-overlay">' +
                '<p class="carousel-v2-thumb-tag">' + slide.tag + '</p>' +
                '<h4 class="carousel-v2-thumb-title">' + slide.title + '</h4>' +
            '</div>';
        thumb.onclick = function() {
            carouselGoToSlide(index);
            carouselCloseModal();
        };
        modalGrid.appendChild(thumb);
    });
}

// Configurar eventos
function setupCarouselEvents() {
    // Botones de navegación
    var prevBtn = document.querySelector('.carousel-v2-arrow--prev');
    var nextBtn = document.querySelector('.carousel-v2-arrow--next');
    var catalogBtn = document.querySelector('.carousel-v2-catalog-btn');

    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.preventDefault();
            carouselGoPrev();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.preventDefault();
            carouselGoNext();
        };
    }

    if (catalogBtn) {
        catalogBtn.onclick = function(e) {
            e.preventDefault();
            carouselOpenModal();
        };
    }

    // Modal
    setupModalEvents();

    // Teclado
    document.onkeydown = function(e) {
        if (e.key === 'ArrowLeft') {
            carouselGoPrev();
        } else if (e.key === 'ArrowRight') {
            carouselGoNext();
        } else if (e.key === 'Escape') {
            carouselCloseModal();
        }
    };

    // Hover
    var carouselMain = document.querySelector('.carousel-v2-main');
    if (carouselMain) {
        carouselMain.onmouseenter = function() {
            carouselStopAutoplay();
        };
        carouselMain.onmouseleave = function() {
            carouselStartAutoplay();
        };
    }

    // Touch
    setupTouchEvents();
}

// Ir a un slide específico
function carouselGoToSlide(index) {
    if (carouselIsAnimating || index === carouselCurrentSlide) {
        return;
    }

    carouselIsAnimating = true;

    var slides = document.querySelectorAll('.carousel-v2-slide');
    var infos = document.querySelectorAll('.carousel-v2-info');
    var dots = document.querySelectorAll('.carousel-v2-dot');

    // Remover active del actual
    if (slides[carouselCurrentSlide]) slides[carouselCurrentSlide].classList.remove('active');
    if (infos[carouselCurrentSlide]) infos[carouselCurrentSlide].classList.remove('active');
    if (dots[carouselCurrentSlide]) dots[carouselCurrentSlide].classList.remove('active');

    // Actualizar índice
    carouselCurrentSlide = index;

    // Agregar active al nuevo
    if (slides[carouselCurrentSlide]) slides[carouselCurrentSlide].classList.add('active');
    if (infos[carouselCurrentSlide]) infos[carouselCurrentSlide].classList.add('active');
    if (dots[carouselCurrentSlide]) dots[carouselCurrentSlide].classList.add('active');

    // Permitir nueva animación
    setTimeout(function() {
        carouselIsAnimating = false;
    }, 700);

    // Resetear autoplay
    carouselResetAutoplay();
}

// Ir al siguiente
function carouselGoNext() {
    var nextIndex = carouselCurrentSlide + 1;
    if (nextIndex >= carouselSlidesData.length) {
        nextIndex = 0;
    }
    carouselGoToSlide(nextIndex);
}

// Ir al anterior
function carouselGoPrev() {
    var prevIndex = carouselCurrentSlide - 1;
    if (prevIndex < 0) {
        prevIndex = carouselSlidesData.length - 1;
    }
    carouselGoToSlide(prevIndex);
}

// Autoplay
function carouselStartAutoplay() {
    carouselStopAutoplay();
    carouselAutoplayInterval = setInterval(carouselGoNext, CAROUSEL_AUTOPLAY_DELAY);
}

function carouselStopAutoplay() {
    if (carouselAutoplayInterval) {
        clearInterval(carouselAutoplayInterval);
        carouselAutoplayInterval = null;
    }
}

function carouselResetAutoplay() {
    carouselStopAutoplay();
    carouselStartAutoplay();
}

// Modal
function setupModalEvents() {
    var overlay = document.querySelector('.carousel-v2-modal-overlay');
    var closeBtn = document.querySelector('.carousel-v2-modal-close');

    if (closeBtn) {
        closeBtn.onclick = function(e) {
            e.preventDefault();
            carouselCloseModal();
        };
    }

    if (overlay) {
        overlay.onclick = function() {
            carouselCloseModal();
        };
    }
}

function carouselOpenModal() {
    var modal = document.querySelector('.carousel-v2-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        carouselUpdateActiveThumbnail();
        carouselStopAutoplay();
    }
}

function carouselCloseModal() {
    var modal = document.querySelector('.carousel-v2-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        carouselStartAutoplay();
    }
}

function carouselUpdateActiveThumbnail() {
    var thumbs = document.querySelectorAll('.carousel-v2-thumb');
    for (var i = 0; i < thumbs.length; i++) {
        if (i === carouselCurrentSlide) {
            thumbs[i].classList.add('active');
        } else {
            thumbs[i].classList.remove('active');
        }
    }
}

// Touch/Swipe
var carouselTouchStartX = 0;
var carouselTouchEndX = 0;

function setupTouchEvents() {
    var bannerArea = document.querySelector('.carousel-v2-banner-area');
    if (bannerArea) {
        bannerArea.addEventListener('touchstart', function(e) {
            carouselTouchStartX = e.changedTouches[0].screenX;
        });

        bannerArea.addEventListener('touchend', function(e) {
            carouselTouchEndX = e.changedTouches[0].screenX;
            carouselHandleSwipe();
        });
    }
}

function carouselHandleSwipe() {
    var diff = carouselTouchStartX - carouselTouchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            carouselGoNext();
        } else {
            carouselGoPrev();
        }
    }
}

// ============================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initCarouselV2();
    });
} else {
    initCarouselV2();
}

window.addEventListener('load', function() {
    var slides = document.querySelectorAll('.carousel-v2-slide');
    if (slides.length === 0) {
        initCarouselV2();
    }
});
