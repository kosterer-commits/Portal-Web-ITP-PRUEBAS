// ============================================
// ORGANIGRAMA TecNM PACHUCA - COMPLETO
// Con todos los directivos y jefes
// ============================================

// Base de datos completa de directivos
const directivosData = {
    // ========================================
    // DIRECTIVOS
    // ========================================
    'director': {
        number: '01',
        name: 'Mtro. Miguel Ángel Lee Rodríguez',
        position: 'Director',
        department: 'Dirección',
        contact: 'dir_pachuca@tecnm.mx',
        extension: 'Ext. 1002',
        image: 'assets/imagenes/Organigrama/MIGUEL ÁNGEL LEE RODRÍGUEZ.png'
    },
    
    'subdirector-academico': {
        number: '02',
        name: 'Mtro. Alfonso Ávila Pérez Tagle',
        position: 'Subdirector de Servicios Académicos',
        department: 'Subdirección Académica',
        contact: 'acad_pachuca@tecnm.mx',
        extension: 'Ext. 4002',
        image: 'assets/imagenes/Organigrama/ALFONSO ÁVILA PÉREZ TAGLE.png'
    },
    
    'subdirector-admin': {
        number: '03',
        name: 'Mtro. Jorge Javier Ortiz Camacho',
        position: 'Subdirector de Servicios Administrativos',
        department: 'Subdirección Administrativa',
        contact: 'admon_pachuca@tecnm.mx',
        extension: 'Ext. 3002',
        image: 'assets/imagenes/Organigrama/JORGE JAVIER ORTÍZ CAMACHO.png'
    },
    
    'subdirectora-planeacion': {
        number: '04',
        name: 'Mtra. María Angélica Espejel Rivera',
        position: 'Subdirectora de Planeación y Vinculación',
        department: 'Subdirección de Planeación',
        contact: 'plan_pachuca@tecnm.mx',
        extension: 'Ext. 2002',
        image: 'assets/imagenes/Organigrama/MARÍA ANGÉLICA ESPEJEL RIVERA.png'
    },
    
    // ========================================
    // JEFES DE DEPARTAMENTO
    // ========================================
    'jefe-desarrollo': {
        number: '05',
        name: 'Lic. José Guillermo Romero Cuevas',
        position: 'Jefe del Departamento de Desarrollo Académico',
        department: 'Desarrollo Académico',
        contact: 'dda@pachuca.tecnm.mx',
        extension: 'Ext. 4004',
        image: 'assets/imagenes/Organigrama/JOSÉ GUILLERMO ROMERO CUEVAS.png'
    },
    
    'jefe-tierra': {
        number: '06',
        name: 'Mtro. Milton López Juárez',
        position: 'Jefe del Departamento de Ciencias de la Tierra',
        department: 'Ciencias de la Tierra',
        contact: 'cienciasdelatierra@pachuca.tecnm.mx',
        extension: 'Ext. 4014',
        image: 'assets/imagenes/Organigrama/MILTON LÓPEZ JUÁREZ.png'
    },
    
    'jefe-sistemas': {
        number: '07',
        name: 'Dr. Arturo González Cerón',
        position: 'Jefe del Departamento de Sistemas y Computación',
        department: 'Sistemas y Computación',
        contact: 'sistemasycomputacion@pachuca.tecnm.mx',
        extension: 'Ext. 4016',
        image: 'assets/imagenes/Organigrama/ARTURO GONZÁLEZ CERÓN.png'
    },
    
    'jefe-rrhh': {
        number: '08',
        name: 'Mtro. Rubén Darío Chávez Martínez',
        position: 'Jefe del Departamento de Recursos Humanos',
        department: 'Recursos Humanos',
        contact: 'rhumanos@pachuca.tecnm.mx',
        extension: 'Ext. 3004',
        image: 'assets/imagenes/Organigrama/RUBÉN DARÍO CHÁVEZ MARTÍNEZ.png'
    },
    
    'jefe-financieros': {
        number: '09',
        name: 'Lic. Pedro Luis Ávila Espinosa',
        position: 'Jefe del Departamento de Recursos Financieros',
        department: 'Recursos Financieros',
        contact: 'rf@pachuca.tecnm.mx',
        extension: 'Ext. 3006',
        image: 'assets/imagenes/Organigrama/PEDRO LUIS ÁVILA ESPINOSA.png'
    },
    
    'jefe-mantenimiento': {
        number: '10',
        name: 'M. en I.M. Miguel Antonio Álvarez Quezada',
        position: 'Jefe del Departamento de Mantenimiento y Equipo',
        department: 'Mantenimiento y Equipo',
        contact: 'mantenimientodeequipo@pachuca.tecnm.mx',
        extension: 'Ext. 3014',
        image: 'assets/imagenes/Organigrama/MIGUEL ANTONIO ÁLVAREZ QUEZADA.png'
    },
    
    'jefe-computo': {
        number: '11',
        name: 'Ing. Mary Ana Hernández Jiménez',
        position: 'Jefe del Centro de Cómputo',
        department: 'Centro de Cómputo',
        contact: 'ccomputo@pachuca.tecnm.mx',
        extension: 'Ext. 3012',
        image: 'assets/imagenes/Organigrama/MARY ANA HERNÁNDEZ JIMÉNEZ.png'
    },
    
    'jefe-gestion': {
        number: '12',
        name: 'Lic. Maury del Mar Zarco Calderón',
        position: 'Jefe del Departamento de Gestión Tecnológica y Vinculación',
        department: 'Gestión Tecnológica y Vinculación',
        contact: 'gestiontecnologica@pachuca.tecnm.mx',
        extension: 'Ext. 2008',
        image: 'assets/imagenes/Organigrama/MAURY DEL MAR ZARCO CALDERÓN.png'
    },
    
    'jefe-informacion': {
        number: '13',
        name: 'Mtra. Laura Reyes Bolaños',
        position: 'Jefe del Centro de Información',
        department: 'Centro de Información',
        contact: 'cdinfo@pachuca.tecnm.mx',
        extension: 'Ext. 2014',
        image: 'assets/imagenes/Organigrama/LAURA REYES BOLAÑOS.png'
    },
    
    'jefe-profesionales': {
        number: '14',
        name: 'Mtra. Elsa Fabiola Pérez Cerón',
        position: 'Jefe de la División de Estudios Profesionales',
        department: 'División de Estudios Profesionales',
        contact: 'dep@pachuca.tecnm.mx',
        extension: 'Ext. 4006',
        image: 'assets/imagenes/Organigrama/ELSA FABIOLA PÉREZ CERÓN.png'
    },
    
    'jefe-materiales': {
        number: '15',
        name: 'Ing. Iván Téllez Salinas',
        position: 'Jefe del Departamento de Recursos Materiales y Servicios',
        department: 'Recursos Materiales y Servicios',
        contact: 'rm_pachuca@tecnm.mx',
        extension: 'Ext. 3008',
        image: 'assets/imagenes/Organigrama/IVÁN TÉLLEZ SALINAS.png'
    },
    
    'jefe-metal': {
        number: '16',
        name: 'Mtro. Alberto Hernández Morales',
        position: 'Jefe del Departamento de Metal Mecánica',
        department: 'Metal Mecánica',
        contact: 'metalmecanica@pachuca.tecnm.mx',
        extension: 'Ext. 4012',
        image: 'assets/imagenes/Organigrama/ALBERTO HERNÁNDEZ MORALES.png'
    },
    
    'jefe-basicas': {
        number: '17',
        name: 'Dr. Jesús Benjamín Ortega Lazcano',
        position: 'Jefe del Departamento de Ciencias Básicas',
        department: 'Ciencias Básicas',
        contact: 'cbasicas@pachuca.tecnm.mx',
        extension: 'Ext. 4010',
        image: 'assets/imagenes/Organigrama/JESÚS BENJAMÍN ORTEGA LAZCANO.png'
    },
    
    'jefe-distancia': {
        number: '18',
        name: 'Mtro. José de Jesús Hernández Olvera',
        position: 'Jefe del Departamento de Educación a Distancia',
        department: 'Educación a Distancia',
        contact: 'ead@pachuca.tecnm.mx',
        extension: 'Ext. 4105',
        image: 'assets/imagenes/Organigrama/JOSÉ DE JESÚS HERNÁNDEZ OLVERA.png'
    },
    
    'jefe-extraescolares': {
        number: '19',
        name: 'Arq. Gabriela Calva Árcega',
        position: 'Jefe del Departamento de Actividades Extraescolares',
        department: 'Actividades Extraescolares',
        contact: 'ext_pachuca@tecnm.mx',
        extension: 'Ext. 2017',
        image: 'assets/imagenes/Organigrama/GABRIELA CALVA ÁRCEGA.png'
    },
    
    'jefe-quimica': {
        number: '20',
        name: 'Dra. Alejandra Fletes Gómez',
        position: 'Jefe del Departamento de Ingeniería Química y Bioquímica',
        department: 'Ingeniería Química y Bioquímica',
        contact: 'ciquimica@pachuca.tecnm.mx',
        extension: 'Ext. 4022',
        image: 'assets/imagenes/Organigrama/ALEJANDRA FLETES GÓMEZ.png'
    },
    
    'jefe-industrial': {
        number: '21',
        name: 'Ing. Yanet Hernández Ortega',
        position: 'Jefe del Departamento de Ingeniería Industrial',
        department: 'Ingeniería Industrial',
        contact: 'industrial@pachuca.tecnm.mx',
        extension: 'Ext. 4018',
        image: 'assets/imagenes/Organigrama/YANET HERNÁNDEZ ORTEGA.png'
    },
    
    'jefe-escolares': {
        number: '22',
        name: 'Mtra. Elodia Claudia Guerrero Ortiz',
        position: 'Jefe del Departamento de Servicios Escolares',
        department: 'Servicios Escolares',
        contact: 'se_pachuca@tecnm.mx',
        extension: 'Ext. 2010',
        image: 'assets/imagenes/Organigrama/ELODIA CLAUDIA GUERRERO ORTÍZ.png'
    },
    
    'jefe-posgrado': {
        number: '23',
        name: 'Dr. Samuel Medina García',
        position: 'Jefe de la División de Estudios de Posgrado e Investigación',
        department: 'Posgrado e Investigación',
        contact: 'depi@pachuca.tecnm.mx',
        extension: 'Ext. 4008',
        image: 'assets/imagenes/Organigrama/SAMUEL MEDINA GARCÍA.png'
    },
    
    'jefe-comunicacion': {
        number: '24',
        name: 'L.A. Karina Morales Montaño',
        position: 'Jefe del Departamento de Comunicación y Difusión',
        department: 'Comunicación y Difusión',
        contact: 'cyd@pachuca.tecnm.mx',
        extension: 'Ext. 2006',
        image: 'assets/imagenes/Organigrama/KARINA MORALES MONTAÑO.png'
    },
    
    'jefe-economico': {
        number: '25',
        name: 'Lic. José Luis Aguilar Gómez',
        position: 'Jefe del Departamento de Ciencias Económico-Administrativas',
        department: 'Ciencias Económico-Administrativas',
        contact: 'economico@pachuca.tecnm.mx',
        extension: 'Ext. 4024',
        image: 'assets/imagenes/Organigrama/JOSÉ LUIS AGUILAR GÓMEZ.png'
    },
    
    'jefe-presupuesto': {
        number: '26',
        name: 'M. en C. Ezequiel Mejía Loaiza',
        position: 'Jefe del Departamento de Planeación, Programación y Presupuestación',
        department: 'Planeación, Programación y Presupuestación',
        contact: 'planeacion@pachuca.tecnm.mx',
        extension: 'Ext. 2004',
        image: 'assets/imagenes/Organigrama/EZEQUIEL MEJÍA LOAISA.png'
    }
};

class OrganigramaSmash {
    constructor() {
        // Elementos del DOM
        this.fighters = document.querySelectorAll('.org-fighter');
        this.sortButtons = document.querySelectorAll('.org-sort-btn');
        this.panel = document.getElementById('org-panel');
        this.panelClose = document.querySelector('.org-panel-close');
        this.rosterGrid = document.querySelector('.org-roster-grid');
        
        // Estado
        this.currentSort = 'number';
        this.selectedFighter = null;
        
        this.init();
    }
    
    init() {
        console.log('🎮 Organigrama TecNM Pachuca inicializado');
        console.log(`📊 Total de directivos: ${Object.keys(directivosData).length}`);
        this.setupEventListeners();
        this.createBodyOverlay();
    }
    
    setupEventListeners() {
        // Click en directivos
        this.fighters.forEach(fighter => {
            fighter.addEventListener('click', () => {
                const fighterId = fighter.dataset.fighterId;
                this.openPanel(fighterId);
            });
        });
        
        // Botones de ordenamiento
        this.sortButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const sortType = btn.dataset.sort;
                this.sortFighters(sortType);
                
                // Actualizar botón activo
                this.sortButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Cerrar panel
        if (this.panelClose) {
            this.panelClose.addEventListener('click', () => this.closePanel());
        }
        
        // Cerrar con overlay
        const overlay = document.querySelector('.body-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closePanel());
        }
        
        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.panel.classList.contains('active')) {
                this.closePanel();
            }
        });
    }
    
    openPanel(fighterId) {
        const data = directivosData[fighterId];
        
        if (!data) {
            console.warn('No se encontraron datos para:', fighterId);
            return;
        }
        
        // Llenar panel con datos (SIN NÚMERO)
        document.getElementById('panel-image').src = data.image;
        document.getElementById('panel-image').alt = data.name;
        document.getElementById('panel-title').textContent = data.name;
        document.getElementById('panel-position').textContent = data.position;
        document.getElementById('panel-department').textContent = data.department;
        document.getElementById('panel-contact').textContent = data.contact;
        document.getElementById('panel-extension').textContent = data.extension;
        
        // Mostrar panel
        this.panel.classList.add('active');
        document.querySelector('.body-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
        
        this.selectedFighter = fighterId;
        
        console.log('👤 Panel abierto:', data.name);
    }
    
    closePanel() {
        this.panel.classList.remove('active');
        document.querySelector('.body-overlay').classList.remove('active');
        document.body.style.overflow = '';
        this.selectedFighter = null;
    }
    
    sortFighters(sortType) {
        this.currentSort = sortType;
        
        if (sortType === 'all') {
            this.showAll();
        } else if (sortType === 'category') {
            this.showByCategory();
        }
    }
    
    showAll() {
        // Convertir a grid simple
        const fightersArray = Array.from(this.fighters);
        
        this.rosterGrid.innerHTML = '';
        this.rosterGrid.classList.remove('sort-by-category');
        
        fightersArray.forEach(fighter => {
            this.rosterGrid.appendChild(fighter);
        });
        
        this.reapplyAnimations();
        console.log('📊 Mostrando todos los directivos');
    }
    
    showByCategory() {
        // Reorganizar por categorías
        this.rosterGrid.innerHTML = '';
        this.rosterGrid.classList.add('sort-by-category');
        
        const categories = {
            'direccion': {
                title: 'Dirección',
                fighters: []
            },
            'academico': {
                title: 'Jefes Académicos',
                fighters: []
            },
            'administrativo': {
                title: 'Jefes Administrativos',
                fighters: []
            },
            'planeacion': {
                title: 'Jefes de Planeación y Vinculación',
                fighters: []
            }
        };
        
        // Agrupar por categoría
        this.fighters.forEach(fighter => {
            const category = fighter.dataset.category;
            if (categories[category]) {
                categories[category].fighters.push(fighter);
            }
        });
        
        // Crear secciones
        Object.keys(categories).forEach(catKey => {
            const cat = categories[catKey];
            if (cat.fighters.length > 0) {
                const section = document.createElement('div');
                section.className = 'org-department-section';
                
                const title = document.createElement('h2');
                title.className = 'org-department-title';
                title.textContent = cat.title;
                
                const grid = document.createElement('div');
                grid.className = 'org-department-grid';
                
                cat.fighters.forEach(fighter => {
                    grid.appendChild(fighter);
                });
                
                section.appendChild(title);
                section.appendChild(grid);
                this.rosterGrid.appendChild(section);
            }
        });
        
        this.reapplyAnimations();
        console.log('🏢 Mostrando por categoría');
    }
    
    reapplyAnimations() {
        // Remover y re-aplicar animaciones
        this.fighters.forEach((fighter, index) => {
            fighter.style.animation = 'none';
            setTimeout(() => {
                fighter.style.animation = '';
                fighter.style.animationDelay = `${index * 0.05}s`;
            }, 10);
        });
    }
    
    createBodyOverlay() {
        // Crear overlay para cuando el panel está abierto
        if (!document.querySelector('.body-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'body-overlay';
            document.body.appendChild(overlay);
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new OrganigramaSmash();
    });
} else {
    new OrganigramaSmash();
}

// Efecto parallax en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.org-hero');
    const flames = document.querySelector('.org-hero-flames');
    
    if (hero && flames) {
        flames.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

console.log('✅ Organigrama TecNM Pachuca cargado correctamente');
console.log('📋 26 directivos y jefes de departamento registrados');