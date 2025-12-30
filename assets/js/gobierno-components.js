// Cargador de componentes gubernamentales

// Cargar barra de gobierno
function loadGobiernoBar() {
    fetch('assets/src/gobierno-bar.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('gobierno-bar-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error al cargar barra de gobierno:', error));
}

// Cargar pie de página gubernamental
function loadGobiernoFooter() {
    fetch('assets/src/gobierno-footer.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('gobierno-footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error al cargar pie de página:', error));
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadGobiernoBar();
    loadGobiernoFooter();
});
