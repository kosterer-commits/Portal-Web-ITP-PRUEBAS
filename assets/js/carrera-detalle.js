// ===== LÓGICA PARA PÁGINAS DE DETALLE DE CARRERA =====

class CarreraDetalle {
    constructor() {
        this.initAccordion();
        this.initButtons();
        this.smoothScroll();
    }

    initAccordion() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach((header, index) => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los acordeones
                document.querySelectorAll('.accordion-item').forEach(el => {
                    el.classList.remove('active');
                });
                
                // Abrir el acordeón clickeado si no estaba activo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
        
        // Abrir el primer acordeón por defecto
        if (accordionHeaders.length > 0) {
            accordionHeaders[0].parentElement.classList.add('active');
        }
    }

    initButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleButtonClick(e, btn);
            });
        });
    }

    handleButtonClick(e, btn) {
        const text = btn.innerText;
        
        if (text.includes('Solicitar')) {
            // Abrir modal o redirigir a formulario
            this.showFormModal('Solicitar Información');
        } else if (text.includes('Descargar')) {
            // Simular descarga de PDF
            this.downloadPDF();
        }
    }

    showFormModal(title) {
        // Crear modal simple
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="modal-close">✕</button>
                </div>
                <div class="modal-body">
                    <p>Te contactaremos pronto con más información sobre esta carrera.</p>
                    <form class="modal-form">
                        <input type="text" placeholder="Nombre completo" required>
                        <input type="email" placeholder="Correo electrónico" required>
                        <input type="tel" placeholder="Teléfono" required>
                        <textarea placeholder="¿Preguntas o comentarios?" rows="4"></textarea>
                        <button type="submit" class="btn-modal-submit">Enviar</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Enviar formulario
        modal.querySelector('.modal-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Solicitud enviada exitosamente. Te contactaremos pronto.');
            modal.remove();
        });
    }

    downloadPDF() {
        // Simulación de descarga
        alert('El plan de estudios se descargará en formato PDF');
        // En producción: window.location.href = 'ruta/al/pdf';
    }

    smoothScroll() {
        // Scroll suave para enlaces internos
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
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.carreraInstance = new CarreraDetalle();
    console.log('Página de carrera cargada exitosamente');
});

// Agregar estilos dinámicos para el modal
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #1e3c72;
    }

    .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        transition: color 0.2s;
    }

    .modal-close:hover {
        color: #000;
    }

    .modal-body {
        padding: 1.5rem;
    }

    .modal-body p {
        margin: 0 0 1rem 0;
        color: #666;
    }

    .modal-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .modal-form input,
    .modal-form textarea {
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1rem;
    }

    .modal-form input:focus,
    .modal-form textarea:focus {
        outline: none;
        border-color: #2a5298;
        box-shadow: 0 0 0 3px rgba(42, 82, 152, 0.1);
    }

    .btn-modal-submit {
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.2s;
    }

    .btn-modal-submit:hover {
        transform: scale(1.05);
    }

    .btn-modal-submit:active {
        transform: scale(0.98);
    }

    @media (max-width: 768px) {
        .modal-content {
            width: 95%;
        }

        .modal-header {
            padding: 1rem;
        }

        .modal-body {
            padding: 1rem;
        }
    }
`;
document.head.appendChild(styleSheet);
