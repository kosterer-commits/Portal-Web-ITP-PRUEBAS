// ============================================
// NOTICIAS DESTACADAS - INTERACTIVIDAD
// Efectos y funcionalidades para tarjetas
// ============================================

class NoticiasSection {
    constructor() {
        this.cards = document.querySelectorAll('.noticia-card');
        this.btns = document.querySelectorAll('.noticia-btn');
        
        this.init();
    }
    
    init() {
        if (this.cards.length === 0) {
            console.warn('⚠️ Noticias: No se encontraron tarjetas');
            return;
        }
        
        console.log('✅ Noticias inicializado:', this.cards.length, 'tarjetas');
        
        // Event listeners
        this.setupEventListeners();
        
        // Animaciones iniciales
        this.setupIntersectionObserver();
    }
    
    setupEventListeners() {
        // Botones de lectura
        this.btns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                // Permitir que el navegador maneje la descarga del PDF
                // El atributo target="_blank" se encarga de abrir en nueva pestaña
            });
            
            // Agregar feedback visual
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
        
        // Interactividad en las tarjetas
        this.cards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                this.animateCard(card);
            });
        });
    }
    
    animateCard(card) {
        // Puedes agregar animaciones adicionales aquí
        const image = card.querySelector('.noticia-image');
        if (image) {
            image.style.transform = 'scale(1.08)';
        }
    }
    
    setupIntersectionObserver() {
        // Cargar imágenes cuando entran en viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector('.noticia-image');
                    if (img && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        this.cards.forEach(card => observer.observe(card));
    }
}

// Función de inicialización
function initNoticias() {
    const noticiasSection = document.querySelector('.noticias-section');
    
    if (noticiasSection) {
        window.noticiasInstance = new NoticiasSection();
    } else {
        console.warn('⚠️ Noticias: Elemento .noticias-section no encontrado');
    }
}

// Exponer función de inicialización
window.initNoticias = initNoticias;

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNoticias);
} else {
    initNoticias();
}
