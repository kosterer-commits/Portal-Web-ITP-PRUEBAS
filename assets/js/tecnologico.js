document.addEventListener('DOMContentLoaded', function () {
    const placeholder = document.getElementById('tecnologico-placeholder');
    if (!placeholder) return;

    const section = document.createElement('section');
    section.className = 'tecnologico-section';

    section.innerHTML = `
        <div class="tecnologico-container">
            <!-- Header de la sección estilo 'Pastillero' -->
            <div class="itp-header-block text-center">
                <span class="itp-tag-line">Identidad Institucional</span>

                <h2 class="itp-title-modern">
                    Conoce Nuestro <span class="highlight">Tecnológico</span>
                </h2>

                <div class="itp-separator">
                    <span class="dot"></span>
                    <span class="line"></span>
                    <span class="dot"></span>
                </div>

                <p class="itp-subtitle-modern">
                    Descubre nuestra historia, misión y el impacto que generamos en la sociedad a través de la educación tecnológica de excelencia.
                </p>
            </div>
            
            <div class="video-wrapper">
                <!-- GIF Replacement for Video -->
                <img src="assets/videos/ITP_TUZA.gif" alt="Animación Tecnológico" class="video-gif">

                <!-- Overlay Button -->
                <a href="#" class="btn btn-overlay-video">Conoceme</a>
            </div>
        </div>
    `;

    placeholder.appendChild(section);
});
