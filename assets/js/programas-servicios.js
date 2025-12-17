// ===== PROGRAMAS ACADÉMICOS =====
class ProgramasAcademicos {
    constructor() {
        this.cards = document.querySelectorAll('.programa-card');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.initializeFilters();
    }

    initializeFilters() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.filterCards(e));
        });
    }

    filterCards(e) {
        const filterValue = e.target.getAttribute('data-filter');
        
        // Actualizar estado activo de botones
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filtrar tarjetas
        this.cards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                const cardType = card.getAttribute('data-tipo');
                if (cardType.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0.3';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    }
}

// Inicializar cuando DOM esté listo
function initProgramas() {
    const programasSection = document.querySelector('.programas-section');
    if (programasSection) {
        window.programasInstance = new ProgramasAcademicos();
        console.log('Programas Académicos cargados');
    }
}

// ===== SERVICIOS PARA ESTUDIANTES =====
class ServiciosEstudiantes {
    constructor() {
        this.servicios = document.querySelectorAll('.servicio-card');
        this.initializeIntersectionObserver();
    }

    initializeIntersectionObserver() {
        const options = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Inicialmente invisibles para animar al entrar
        this.servicios.forEach(servicio => {
            servicio.style.opacity = '0';
            servicio.style.transform = 'translateY(20px)';
            servicio.style.transition = 'all 0.5s ease-out';
            observer.observe(servicio);
        });
    }
}

// Inicializar cuando DOM esté listo
function initServicios() {
    const serviciosSection = document.querySelector('.servicios-section');
    if (serviciosSection) {
        window.serviciosInstance = new ServiciosEstudiantes();
        console.log('Servicios para Estudiantes cargados');
    }
}

// Función para cargar ambas secciones desde header.js
function initProgramasYServicios() {
    initProgramas();
    setTimeout(() => {
        initServicios();
    }, 50);
}
