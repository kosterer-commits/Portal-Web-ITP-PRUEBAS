document.addEventListener('DOMContentLoaded', function() {
    const placeholder = document.getElementById('header-placeholder');
    
    // Ruta al archivo header.html
    const headerPath = 'assets/src/header.html'; 

    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            placeholder.innerHTML = htmlContent;
            
            // IMPORTANTE: Ejecutar el código del menú DESPUÉS de cargar el header
            initializeMenu();
            
            // Inicializar el sistema de títulos
            initializePageTitle();
            
            // Cargar el carrusel de banners V2
            loadCarouselV2();
            
            // Cargar noticias destacadas
            loadNoticias();
            
            // Cargar programas académicos y servicios
            loadProgramasYServicios();
            
            // Cargar el menú de accesibilidad CON DELAY para garantizar que el DOM esté listo
            setTimeout(() => {
                loadAccessibilityMenu();
            }, 200);
        })
        .catch(error => {
            console.error('Error al cargar el header:', error);
            placeholder.innerHTML = '<p style="color: red; padding: 1rem;">Error al cargar el encabezado. Verifica la ruta: ' + headerPath + '</p>';
        });
});

// Función para cargar el menú de accesibilidad
function loadAccessibilityMenu() {
    const accessibilityPath = 'assets/src/accessibility.html';
    
    fetch(accessibilityPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            // Agregar el contenido al final del body
            document.body.insertAdjacentHTML('beforeend', htmlContent);
            
            // Inicializar el menú de accesibilidad CON MÁS TIEMPO para garantizar DOM ready
            setTimeout(() => {
                initializeAccessibilityMenu();
            }, 300);
        })
        .catch(error => {
            console.error('Error al cargar el menú de accesibilidad:', error);
        });
}

// Función para cargar el carrusel de banners V2
function loadCarouselV2() {
    const carouselPath = 'assets/src/carousel-v2.html';
    const placeholder = document.getElementById('carousel-v2-placeholder');
    
    if (!placeholder) {
        console.warn('No se encontró el placeholder del carrusel V2');
        return;
    }
    
    fetch(carouselPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            placeholder.innerHTML = htmlContent;
            
            // Esperar un momento para que el DOM se actualice
            setTimeout(() => {
                // Inicializar el carrusel V2
                if (window.initCarouselV2) {
                    window.initCarouselV2();
                } else {
                    console.error('initCarouselV2 no está disponible');
                }
            }, 100);
        })
        .catch(error => {
            console.error('Error al cargar el carrusel V2:', error);
        });
}

// Función para cargar el sistema de títulos
// Función para inicializar el menú (se ejecuta después de cargar el HTML)
function initializeMenu() {
    // Toggle menú móvil
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const mainMenu = document.querySelector('.main-menu');
    const menuButton = document.querySelector('.menu-button');

    // Verificar que los elementos existan
    if (!hamburger || !nav) {
        console.error('No se encontraron los elementos del menú');
        return;
    }

    console.log('Menú inicializado correctamente');

    // Toggle hamburguesa (abrir/cerrar menú lateral en móvil)
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        
        // En móvil, abrir automáticamente el mega menú
        if (window.innerWidth <= 768 && mainMenu) {
            if (nav.classList.contains('active')) {
                mainMenu.classList.add('active');
            } else {
                mainMenu.classList.remove('active');
            }
        }
        
        // Animar hamburguesa
        if (hamburger.classList.contains('active')) {
            hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburger.children[1].style.opacity = '0';
            hamburger.children[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            hamburger.children[0].style.transform = '';
            hamburger.children[1].style.opacity = '';
            hamburger.children[2].style.transform = '';
        }
    });

    // Cerrar menú al hacer clic en un enlace del mega menú
    const menuLinks = document.querySelectorAll('.menu-section a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                mainMenu.classList.remove('active');
                
                // Resetear hamburguesa
                hamburger.children[0].style.transform = '';
                hamburger.children[1].style.opacity = '';
                hamburger.children[2].style.transform = '';
            }
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            if (mainMenu) {
                mainMenu.classList.remove('active');
            }
            
            // Resetear hamburguesa
            hamburger.children[0].style.transform = '';
            hamburger.children[1].style.opacity = '';
            hamburger.children[2].style.transform = '';
        }
    });

    // Ajustar menú al redimensionar ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            if (mainMenu) {
                mainMenu.classList.remove('active');
            }
            
            // Resetear hamburguesa
            hamburger.children[0].style.transform = '';
            hamburger.children[1].style.opacity = '';
            hamburger.children[2].style.transform = '';
        }
    });
}

// ============================================
// MENÚ DE ACCESIBILIDAD - COMPLETO Y FUNCIONAL
// ============================================

function initializeAccessibilityMenu() {
    console.log('⏳ Inicializando menú de accesibilidad...');
    
    // Elementos del DOM
    const btnHeader = document.getElementById('accessibility-btn-header');
    const btnFab = document.getElementById('accessibility-btn-fab');
    const panel = document.getElementById('accessibility-panel');
    const overlay = document.getElementById('accessibility-overlay');
    const closeBtn = document.getElementById('close-accessibility-panel');
    const resetBtn = document.getElementById('reset-accessibility');

    // Verificar que los elementos existan
    if (!panel || !overlay) {
        console.error('❌ No se encontraron los elementos del menú de accesibilidad', {
            panel: !!panel,
            overlay: !!overlay,
            btnHeader: !!btnHeader,
            btnFab: !!btnFab,
            closeBtn: !!closeBtn,
            resetBtn: !!resetBtn
        });
        return;
    }

    console.log('✅ Elementos encontrados, iniciando setup de accesibilidad');

    // ============================================
    // ESTADO Y PERSISTENCIA (localStorage)
    // ============================================

    const defaultState = {
        fontSize: 'normal',
        contrast: 'normal',
        grayscale: false,
        lineSpacing: false,
        letterSpacing: false,
        readableFont: false,
        highlightLinks: false,
        bigCursor: false,
        readingGuide: false,
        pauseAnimations: false,
        hideImages: false,
        readingMode: false
    };

    // Cargar estado guardado o usar default
    let accessibilityState = JSON.parse(localStorage.getItem('accessibilitySettings')) || { ...defaultState };

    // Función para guardar estado
    function saveState() {
        localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilityState));
    }

    // ============================================
    // APLICAR CONFIGURACIONES GUARDADAS AL CARGAR
    // ============================================

    function loadSavedSettings() {
        // Tamaño de fuente
        applyFontSize(accessibilityState.fontSize);
        document.querySelectorAll('[data-size]').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-size') === accessibilityState.fontSize) {
                btn.classList.add('active');
            }
        });

        // Contraste
        applyContrast(accessibilityState.contrast);
        document.querySelectorAll('[data-contrast]').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-contrast') === accessibilityState.contrast) {
                btn.classList.add('active');
            }
        });

        // Todos los toggles
        if (accessibilityState.grayscale) {
            document.getElementById('grayscale-toggle').checked = true;
            applyGrayscale(true);
        }
        if (accessibilityState.lineSpacing) {
            document.getElementById('line-spacing-toggle').checked = true;
            applyLineSpacing(true);
        }
        if (accessibilityState.letterSpacing) {
            document.getElementById('letter-spacing-toggle').checked = true;
            applyLetterSpacing(true);
        }
        if (accessibilityState.readableFont) {
            document.getElementById('readable-font-toggle').checked = true;
            applyReadableFont(true);
        }
        if (accessibilityState.highlightLinks) {
            document.getElementById('highlight-links-toggle').checked = true;
            applyHighlightLinks(true);
        }
        if (accessibilityState.bigCursor) {
            document.getElementById('big-cursor-toggle').checked = true;
            applyBigCursor(true);
        }
        if (accessibilityState.readingGuide) {
            document.getElementById('reading-guide-toggle').checked = true;
            applyReadingGuide(true);
        }
        if (accessibilityState.pauseAnimations) {
            document.getElementById('pause-animations-toggle').checked = true;
            applyPauseAnimations(true);
        }
        if (accessibilityState.hideImages) {
            document.getElementById('hide-images-toggle').checked = true;
            applyHideImages(true);
        }
        if (accessibilityState.readingMode) {
            document.getElementById('reading-mode-toggle').checked = true;
            applyReadingMode(true);
        }
    }

    // ============================================
    // FUNCIONES DE APERTURA/CIERRE
    // ============================================

    function openPanel() {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePanel() {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ============================================
    // EVENT LISTENERS - APERTURA/CIERRE
    // ============================================

    if (btnHeader) {
        btnHeader.addEventListener('click', (e) => {
            e.preventDefault();
            openPanel();
        });
    }

    if (btnFab) {
        btnFab.addEventListener('click', (e) => {
            e.preventDefault();
            openPanel();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePanel);
    }

    overlay.addEventListener('click', closePanel);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panel.classList.contains('active')) {
            closePanel();
        }
    });

    // ============================================
    // FUNCIONALIDADES - TAMAÑO DE TEXTO
    // ============================================

    function applyFontSize(size) {
        document.documentElement.classList.remove('font-small', 'font-normal', 'font-large');
        
        if (size === 'small') {
            document.documentElement.classList.add('font-small');
        } else if (size === 'large') {
            document.documentElement.classList.add('font-large');
        } else {
            document.documentElement.classList.add('font-normal');
        }
    }

    const fontSizeButtons = document.querySelectorAll('[data-size]');
    fontSizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            fontSizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const size = btn.getAttribute('data-size');
            accessibilityState.fontSize = size;
            applyFontSize(size);
            saveState();
        });
    });

    // ============================================
    // FUNCIONALIDADES - CONTRASTE
    // ============================================

    function applyContrast(mode) {
        document.documentElement.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
        document.documentElement.classList.add('contrast-' + mode);
    }

    const contrastButtons = document.querySelectorAll('[data-contrast]');
    contrastButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            contrastButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const contrast = btn.getAttribute('data-contrast');
            accessibilityState.contrast = contrast;
            applyContrast(contrast);
            saveState();
        });
    });

    // ============================================
    // FUNCIONALIDADES - ESCALA DE GRISES
    // ============================================

    function applyGrayscale(enabled) {
        if (enabled) {
            document.documentElement.classList.add('grayscale-mode');
        } else {
            document.documentElement.classList.remove('grayscale-mode');
        }
    }

    const grayscaleToggle = document.getElementById('grayscale-toggle');
    if (grayscaleToggle) {
        grayscaleToggle.addEventListener('change', (e) => {
            accessibilityState.grayscale = e.target.checked;
            applyGrayscale(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - ESPACIADO ENTRE LÍNEAS
    // ============================================

    function applyLineSpacing(enabled) {
        if (enabled) {
            document.documentElement.classList.add('line-spacing-extended');
        } else {
            document.documentElement.classList.remove('line-spacing-extended');
        }
    }

    const lineSpacingToggle = document.getElementById('line-spacing-toggle');
    if (lineSpacingToggle) {
        lineSpacingToggle.addEventListener('change', (e) => {
            accessibilityState.lineSpacing = e.target.checked;
            applyLineSpacing(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - ESPACIADO ENTRE LETRAS
    // ============================================

    function applyLetterSpacing(enabled) {
        if (enabled) {
            document.documentElement.classList.add('letter-spacing-extended');
        } else {
            document.documentElement.classList.remove('letter-spacing-extended');
        }
    }

    const letterSpacingToggle = document.getElementById('letter-spacing-toggle');
    if (letterSpacingToggle) {
        letterSpacingToggle.addEventListener('change', (e) => {
            accessibilityState.letterSpacing = e.target.checked;
            applyLetterSpacing(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - FUENTE LEGIBLE
    // ============================================

    function applyReadableFont(enabled) {
        if (enabled) {
            document.documentElement.classList.add('readable-font');
        } else {
            document.documentElement.classList.remove('readable-font');
        }
    }

    const readableFontToggle = document.getElementById('readable-font-toggle');
    if (readableFontToggle) {
        readableFontToggle.addEventListener('change', (e) => {
            accessibilityState.readableFont = e.target.checked;
            applyReadableFont(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - RESALTAR ENLACES
    // ============================================

    function applyHighlightLinks(enabled) {
        if (enabled) {
            document.documentElement.classList.add('highlight-links');
        } else {
            document.documentElement.classList.remove('highlight-links');
        }
    }

    const highlightLinksToggle = document.getElementById('highlight-links-toggle');
    if (highlightLinksToggle) {
        highlightLinksToggle.addEventListener('change', (e) => {
            accessibilityState.highlightLinks = e.target.checked;
            applyHighlightLinks(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - CURSOR GRANDE
    // ============================================

    function applyBigCursor(enabled) {
        if (enabled) {
            document.documentElement.classList.add('big-cursor');
        } else {
            document.documentElement.classList.remove('big-cursor');
        }
    }

    const bigCursorToggle = document.getElementById('big-cursor-toggle');
    if (bigCursorToggle) {
        bigCursorToggle.addEventListener('change', (e) => {
            accessibilityState.bigCursor = e.target.checked;
            applyBigCursor(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - GUÍA DE LECTURA
    // ============================================

    let readingGuideElement = null;

    function applyReadingGuide(enabled) {
        if (enabled) {
            if (!readingGuideElement) {
                readingGuideElement = document.createElement('div');
                readingGuideElement.id = 'reading-guide';
                readingGuideElement.style.cssText = `
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(to right, transparent, #FFD700, transparent);
                    pointer-events: none;
                    z-index: 10000;
                    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                `;
                document.body.appendChild(readingGuideElement);

                document.addEventListener('mousemove', updateReadingGuide);
            }
        } else {
            if (readingGuideElement) {
                document.removeEventListener('mousemove', updateReadingGuide);
                readingGuideElement.remove();
                readingGuideElement = null;
            }
        }
    }

    function updateReadingGuide(e) {
        if (readingGuideElement) {
            readingGuideElement.style.top = e.clientY + 'px';
        }
    }

    const readingGuideToggle = document.getElementById('reading-guide-toggle');
    if (readingGuideToggle) {
        readingGuideToggle.addEventListener('change', (e) => {
            accessibilityState.readingGuide = e.target.checked;
            applyReadingGuide(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - PAUSAR ANIMACIONES
    // ============================================

    function applyPauseAnimations(enabled) {
        if (enabled) {
            document.documentElement.classList.add('pause-animations');
        } else {
            document.documentElement.classList.remove('pause-animations');
        }
    }

    const pauseAnimationsToggle = document.getElementById('pause-animations-toggle');
    if (pauseAnimationsToggle) {
        pauseAnimationsToggle.addEventListener('change', (e) => {
            accessibilityState.pauseAnimations = e.target.checked;
            applyPauseAnimations(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - OCULTAR IMÁGENES
    // ============================================

    function applyHideImages(enabled) {
        if (enabled) {
            document.documentElement.classList.add('hide-images');
        } else {
            document.documentElement.classList.remove('hide-images');
        }
    }

    const hideImagesToggle = document.getElementById('hide-images-toggle');
    if (hideImagesToggle) {
        hideImagesToggle.addEventListener('change', (e) => {
            accessibilityState.hideImages = e.target.checked;
            applyHideImages(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // FUNCIONALIDADES - MODO DE LECTURA
    // ============================================

    function applyReadingMode(enabled) {
        if (enabled) {
            document.documentElement.classList.add('reading-mode');
        } else {
            document.documentElement.classList.remove('reading-mode');
        }
    }

    const readingModeToggle = document.getElementById('reading-mode-toggle');
    if (readingModeToggle) {
        readingModeToggle.addEventListener('change', (e) => {
            accessibilityState.readingMode = e.target.checked;
            applyReadingMode(e.target.checked);
            saveState();
        });
    }

    // ============================================
    // BOTÓN DE REINICIO
    // ============================================

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('¿Deseas restablecer todas las configuraciones de accesibilidad?')) {
                // Resetear estado
                accessibilityState = { ...defaultState };
                saveState();

                // Remover todas las clases
                document.documentElement.className = '';

                // Resetear UI
                fontSizeButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-size') === 'normal') {
                        btn.classList.add('active');
                    }
                });

                contrastButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-contrast') === 'normal') {
                        btn.classList.add('active');
                    }
                });

                document.querySelectorAll('.toggle-switch input').forEach(toggle => {
                    toggle.checked = false;
                });

                // Remover guía de lectura si existe
                if (readingGuideElement) {
                    document.removeEventListener('mousemove', updateReadingGuide);
                    readingGuideElement.remove();
                    readingGuideElement = null;
                }

                // Aplicar configuración normal
                applyFontSize('normal');
                applyContrast('normal');

                console.log('✅ Configuración de accesibilidad restablecida');
            }
        });
    }

    // ============================================
    // CARGAR CONFIGURACIÓN GUARDADA
    // ============================================

    loadSavedSettings();

    // API pública
    window.getAccessibilityState = function() {
        return { ...accessibilityState };
    };

    console.log('✅ Todas las funcionalidades de accesibilidad activadas');
}

// ============================================
// SISTEMA DE TÍTULOS CON EFECTO TYPEWRITER
// ============================================

const pageTitles = {
    'index.html': {
        text: 'El Hombre Alimenta el Ingenio en Contacto con la Ciencia',
        speed: 50, // milisegundos por carácter
        delay: 500, // delay antes de empezar
        variant: 'gradient-text' // 'gradient-text', 'neon-text', 'elegant', o null
    },
    'nosotros.html': {
        text: 'Acerca del TecNM Pachuca',
        speed: 60,
        delay: 300,
        variant: null
    },
    'ingenierias.html': {
        text: 'Programas de Ingeniería',
        speed: 60,
        delay: 300,
        variant: null
    },
    'licenciaturas.html': {
        text: 'Licenciaturas',
        speed: 60,
        delay: 300,
        variant: null
    },
    'posgrado.html': {
        text: 'Posgrado - Maestrías y Doctorados',
        speed: 60,
        delay: 300,
        variant: null
    },
    'contacto.html': {
        text: 'Contáctanos',
        speed: 60,
        delay: 300,
        variant: null
    }
};

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page === '' ? 'index.html' : page;
}

function typeWriter(text, element, speed, callback) {
    let i = 0;
    const titleElement = element.closest('.typewriter-title');
    
    if (titleElement) {
        titleElement.classList.add('typing');
        titleElement.classList.remove('typing-complete');
    }
    
    function type() {
        if (i < text.length) {
            element.textContent = text.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        } else {
            if (titleElement) {
                titleElement.classList.remove('typing');
                titleElement.classList.add('typing-complete');
            }
            if (callback) callback();
        }
    }
    
    type();
}

function initializePageTitle() {
    const currentPage = getCurrentPage();
    const pageConfig = pageTitles[currentPage] || pageTitles['index.html'];
    
    const textElement = document.getElementById('typewriter-text');
    const titleElement = document.getElementById('typewriter-title');
    
    if (!textElement || !titleElement) {
        console.error('No se encontró el elemento del título typewriter');
        return;
    }
    
    // Aplicar variante de estilo si existe
    if (pageConfig.variant) {
        titleElement.classList.add(pageConfig.variant);
    }
    
    // Actualizar título de la pestaña del navegador
    document.title = `${pageConfig.text} | TecNM Pachuca`;
    
    // Iniciar efecto typewriter después del delay
    setTimeout(() => {
        typeWriter(pageConfig.text, textElement, pageConfig.speed, () => {
            console.log('✅ Título completado:', pageConfig.text);
        });
    }, pageConfig.delay);
    
    console.log('✅ Sistema de títulos typewriter inicializado');
}

// Función para actualizar el título dinámicamente (API pública)
window.updatePageTitle = function(config) {
    const textElement = document.getElementById('typewriter-text');
    const titleElement = document.getElementById('typewriter-title');
    
    if (!textElement || !titleElement) return;
    
    // Limpiar texto actual
    textElement.textContent = '';
    
    // Remover variantes anteriores
    titleElement.classList.remove('gradient-text', 'neon-text', 'elegant');
    
    // Aplicar nueva variante
    if (config.variant) {
        titleElement.classList.add(config.variant);
    }
    
    // Iniciar nuevo typewriter
    const speed = config.speed || 50;
    const delay = config.delay || 0;
    
    setTimeout(() => {
        typeWriter(config.text, textElement, speed);
    }, delay);
    
    // Actualizar título del navegador
    document.title = `${config.text} | TecNM Pachuca`;
};

// Función para agregar configuración de nueva página
window.addPageTitleConfig = function(pageName, config) {
    pageTitles[pageName] = config;
    console.log(`✅ Configuración de título agregada para: ${pageName}`);
};

// Función para cargar noticias destacadas
function loadNoticias() {
    const noticiasPath = 'assets/src/noticias.html';
    const placeholder = document.getElementById('noticias-placeholder');
    
    if (!placeholder) {
        console.warn('No se encontró el placeholder de noticias');
        return;
    }
    
    fetch(noticiasPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            placeholder.innerHTML = htmlContent;
            
            // Esperar un momento para que el DOM se actualice
            setTimeout(() => {
                // Inicializar noticias
                if (window.initNoticias) {
                    window.initNoticias();
                } else {
                    console.error('initNoticias no está disponible');
                }
            }, 100);
        })
        .catch(error => {
            console.error('Error al cargar noticias:', error);
        });
}

// Función para cargar programas académicos y servicios para estudiantes
function loadProgramasYServicios() {
    const programasPath = 'assets/src/programas-academicos.html';
    const serviciosPath = 'assets/src/servicios-estudiantes.html';
    const programasPlaceholder = document.getElementById('programas-placeholder');
    const serviciosPlaceholder = document.getElementById('servicios-placeholder');
    
    if (!programasPlaceholder || !serviciosPlaceholder) {
        console.warn('No se encontraron los placeholders de programas o servicios');
        return;
    }
    
    // Cargar programas académicos
    fetch(programasPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            programasPlaceholder.innerHTML = htmlContent;
            
            // Esperar un momento para que el DOM se actualice
            setTimeout(() => {
                if (window.initProgramas) {
                    window.initProgramas();
                } else {
                    console.error('initProgramas no está disponible');
                }
            }, 100);
        })
        .catch(error => {
            console.error('Error al cargar programas académicos:', error);
        });
    
    // Cargar servicios para estudiantes
    fetch(serviciosPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            serviciosPlaceholder.innerHTML = htmlContent;
            
            // Esperar un momento para que el DOM se actualice
            setTimeout(() => {
                if (window.initServicios) {
                    window.initServicios();
                } else {
                    console.error('initServicios no está disponible');
                }
            }, 100);
        })
        .catch(error => {
            console.error('Error al cargar servicios para estudiantes:', error);
        });
}