document.addEventListener('DOMContentLoaded', function () {
    const placeholder = document.getElementById('sidebar-menu-placeholder');
    if (!placeholder) return;

    // Use placeholder images for now. Replace with actual paths relative to assets/imagenes/
    // Example: 'assets/imagenes/iconos/edu_distancia.png'
    const links = [
        {
            title: 'Educación a Distancia',
            desc: 'Plataforma virtual',
            url: '#',
            img: 'assets/imagenes/iconos/placeholder.png'
        },
        {
            title: 'Contraloría Social',
            desc: 'Transparencia institucional',
            url: '#',
            img: 'assets/imagenes/iconos/placeholder.png'
        },
        {
            title: 'Sistema Integral (SII)',
            desc: 'Información académica',
            url: '#',
            img: 'assets/imagenes/iconos/placeholder.png'
        },
        {
            title: 'CONRICyT',
            desc: 'Recursos científicos',
            url: '#',
            img: 'assets/imagenes/iconos/placeholder.png'
        },
        {
            title: 'FESE',
            desc: 'Fondo educación superior',
            url: '#',
            img: 'assets/imagenes/iconos/placeholder.png'
        },
        {
            title: 'CONACyT',
            desc: 'Ciencia y tecnología',
            url: '#',
            img: 'assets/imagenes/iconos/placeholder.png'
        }
    ];

    // Create main container
    const container = document.createElement('div');
    container.className = 'sidebar-container';

    // Create the trigger tab (which becomes the container for content on hover)
    const trigger = document.createElement('div');
    trigger.className = 'sidebar-trigger';

    // Label for collapsed state
    const label = document.createElement('div');
    label.className = 'trigger-label';
    label.textContent = 'ENLACES INSTITUCIONALES';
    trigger.appendChild(label);

    // Content container (initially hidden)
    const content = document.createElement('div');
    content.className = 'sidebar-content';

    // Header inside expanded menu
    const header = document.createElement('div');
    header.className = 'menu-header';
    header.textContent = 'Enlaces Institucionales';
    content.appendChild(header);

    // Add links
    links.forEach(link => {
        const item = document.createElement('a');
        item.href = link.url;
        item.className = 'sidebar-link-item';

        // Image handling (using a default placeholder if image fails to load or for now)
        // Since we don't have the specific images yet, I'll use a generic colored block or try to find a generic icon if available
        // For the purpose of this task, we will create image tags that the user can swap source later.

        item.innerHTML = `
            <img src="${link.img}" alt="${link.title}" class="link-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="fallback-icon" style="display:none; width:40px; height:40px; background:#eee; border-radius:50%; align-items:center; justify-content:center; margin-right:15px; font-size:20px;">🔗</div>
            <div class="link-text">
                <span class="link-title">${link.title}</span>
                <span class="link-desc">${link.desc}</span>
            </div>
        `;

        content.appendChild(item);
    });

    trigger.appendChild(content);
    container.appendChild(trigger);
    placeholder.appendChild(container);

    // Optional: Click to toggle active state on mobile or if preferred over hover
    trigger.addEventListener('click', function (e) {
        // Only toggle if we are not clicking a link
        if (!e.target.closest('a')) {
            container.classList.toggle('active');
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
        if (!container.contains(e.target)) {
            container.classList.remove('active');
        }
    });
});
