// ============================================
// SPLASH SCREEN - ANIMACIÓN DE CORTINA/TEATRO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const curtainLeft = document.querySelector('.splash-curtain-left');
    const curtainRight = document.querySelector('.splash-curtain-right');
    const content = document.querySelector('.splash-content');

    // Verificar que existan los elementos
    if (!splash || !curtainLeft || !curtainRight || !content) {
        console.warn('Elementos del splash screen no encontrados');
        return;
    }

    // Función para abrir cortinas
    const openCurtains = () => {
        curtainLeft.classList.add('open');
        curtainRight.classList.add('open');
    };

    // Función para mostrar contenido
    const showContent = () => {
        content.classList.add('show');
    };

    // Función para animar elementos
    const animateElements = () => {
        const logoTec = document.querySelector('.splash-logo-tec');
        const logoTecnm = document.querySelector('.splash-logo-tecnm');
        const title = document.querySelector('.splash-title');
        const subtitle = document.querySelector('.splash-subtitle');
        const slogan = document.querySelector('.splash-slogan');

        // Animar logos con flotación
        if (logoTec) {
            setTimeout(() => {
                logoTec.style.animation = 'logoFloat 3s ease-in-out infinite';
            }, 500);
        }

        if (logoTecnm) {
            setTimeout(() => {
                logoTecnm.style.animation = 'logoFloat 3s ease-in-out infinite 0.5s';
            }, 700);
        }

        // Animar texto con glow
        if (title) {
            setTimeout(() => {
                title.style.animation = 'textGlow 1s ease';
            }, 1000);
        }

        if (subtitle) {
            setTimeout(() => {
                subtitle.style.animation = 'textGlow 1s ease 0.2s both';
            }, 1200);
        }

        if (slogan) {
            setTimeout(() => {
                slogan.style.animation = 'textGlow 1s ease 0.4s both';
            }, 1400);
        }
    };

    // Función para cerrar splash
    const closeSplash = () => {
        splash.style.animation = 'fadeOut 1.5s ease';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 1500);
    };

    // Secuencia de animación
    setTimeout(openCurtains, 500);      // Abrir cortinas después de 0.5s
    setTimeout(showContent, 1000);      // Mostrar contenido después de 1s
    setTimeout(animateElements, 1500);  // Animar elementos después de 1.5s
    // setTimeout(closeSplash, 5000);      // Cerrar después de 5s - COMENTADO PARA DEBUG

    console.log('🎭 Splash screen de cortina inicializado');
});