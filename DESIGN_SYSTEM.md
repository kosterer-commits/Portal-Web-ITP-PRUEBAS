# 🎨 SISTEMA DE DISEÑO - GENESIS

## Visión General
Paleta de colores, tipografía y espaciado coherente que mantiene unidad visual a través de todas las secciones de la página, permitiendo variedad de diseños sin perder identidad.

---

## 📋 Paleta de Colores

### Colores Primarios
- **Primary Dark**: `#1e3c72` - Azul profesional oscuro (Encabezados, botones)
- **Primary Main**: `#2a5298` - Azul principal (Gradientes)
- **Primary Light**: `#3d6db5` - Azul claro (Highlights)

### Colores Secundarios
- **Cyan**: `#00d4ff` - Azul neón (Acentos, efectos)
- **Cyan Dark**: `#0099ff` - Azul neón oscuro (Hover)
- **Cyan Alt**: `#00a8cc` - Azul Intenso (Alternativo)

### Colores Neutros
- **Gray 50-950**: Escala completa para texto, fondos y bordes
- **Gray 900**: `#212529` - Texto principal
- **Gray 600**: `#6c757d` - Texto secundario
- **Gray 50**: `#f8f9fa` - Fondos claros

### Colores de Acento
- **Success**: `#00d4ff` - Cyan (Confirmaciones)
- **Warning**: `#ffc107` - Amarillo (Advertencias)
- **Error**: `#dc3545` - Rojo (Errores)
- **Info**: `#17a2b8` - Azul claro (Información)

---

## 🎯 Gradientes Principales

```css
/* Gradiente Primario - Botones y Headers */
linear-gradient(135deg, #1e3c72, #2a5298)

/* Gradiente Secundario - Acentos y Efectos */
linear-gradient(135deg, #00d4ff, #0099ff)

/* Gradiente Oscuro - Overlays */
linear-gradient(135deg, #1a1a1a, #2d2d2d)
```

---

## 📝 Tipografía

### Familia de Fuentes
- **Sans-Serif**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` (Texto)
- **Mono**: `'Monaco', 'Menlo', 'Ubuntu Mono'` (Código)

### Tamaños
- **H1**: `3rem` (56px) - Títulos principales
- **H2**: `2.25rem` (48px) - Títulos de sección
- **H3**: `1.875rem` (30px) - Subtítulos
- **Body**: `1rem` (16px) - Texto normal
- **Small**: `0.875rem` (14px) - Textos pequeños

### Pesos
- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 900

### Line Heights
- **Tight**: 1.2 (Títulos)
- **Normal**: 1.5 (Párrafos)
- **Relaxed**: 1.7 (Textos largos)

---

## 🎁 Espaciado

Sistema de espaciado consistente (escala 1:1.5):

```
xs:   0.25rem (4px)
sm:   0.5rem  (8px)
md:   1rem    (16px)
lg:   1.5rem  (24px)
xl:   2rem    (32px)
2xl:  2.5rem  (40px)
3xl:  3rem    (48px)
4xl:  4rem    (64px)
5xl:  5rem    (80px)
```

---

## 🔘 Componentes Base

### Botones
```html
<!-- Botón Primario -->
<button class="btn">Acción Principal</button>

<!-- Botón Secundario -->
<button class="btn btn-secondary">Acción Secundaria</button>

<!-- Botón Outline -->
<button class="btn btn-outline">Acción Alternativa</button>
```

**Características:**
- Padding: `0.9rem 1.8rem`
- Border Radius: `50px` (Fully rounded)
- Sombra: Media con hover mejorado
- Efecto: Elevación (-2px) y brillo interno

### Tags/Badges
```html
<span class="tag">Categoría</span>
```

**Características:**
- Padding: `0.35rem 0.9rem`
- Fondo: Gradiente primario
- Texto: Blanco, bold, uppercase
- Letter-spacing: `1px`

---

## 🎨 Secciones

### Fondos Alternados
Para mantener ritmo visual:

```html
<!-- Fondo claro (predeterminado) -->
<section class="noticias-section">...</section>

<!-- Fondo blanco -->
<section class="alternate">...</section>

<!-- Fondo oscuro -->
<section class="dark">...</section>
```

---

## ✨ Sombras

```
--shadow-sm:    0 2px 8px rgba(0, 0, 0, 0.08)
--shadow-md:    0 4px 12px rgba(0, 0, 0, 0.12)
--shadow-lg:    0 8px 24px rgba(0, 0, 0, 0.15)
--shadow-xl:    0 12px 35px rgba(0, 0, 0, 0.2)
--shadow-hover: 0 12px 35px rgba(30, 60, 114, 0.15)
```

---

## ⏱️ Transiciones

```
--transition-fast:   0.2s ease-in-out
--transition-normal: 0.3s ease-in-out
--transition-slow:   0.4s ease-in-out
--transition-smooth: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## 🔲 Border Radius

```
--radius-sm:    4px
--radius-md:    8px
--radius-lg:    12px
--radius-xl:    16px
--radius-2xl:   20px
--radius-full:  9999px (Circular)
```

---

## 📐 Layout

### Contenedor Principal
```css
max-width: 1400px;
margin: 0 auto;
padding: 0 2rem;
```

### Padding de Secciones
```css
/* Desktop */
padding: 5rem 0;

/* Tablet */
@media (max-width: 768px) {
    padding: 3rem 0;
}

/* Mobile */
@media (max-width: 480px) {
    padding: 2.5rem 0;
}
```

---

## 🎯 Cómo Usar las Variables CSS

### En el HTML
```html
<!-- Siempre incluir design-system.css primero -->
<link rel="stylesheet" href="assets/css/design-system.css">
<!-- Luego los estilos específicos de la sección -->
<link rel="stylesheet" href="assets/css/mi-seccion.css">
```

### En CSS
```css
/* Color */
background: var(--primary-main);
color: var(--text-secondary);

/* Espaciado */
padding: var(--space-xl) var(--space-lg);
margin-bottom: var(--space-md);

/* Tipografía */
font-family: var(--font-family-sans);
font-size: var(--font-2xl);
font-weight: var(--font-weight-bold);
line-height: var(--line-height-tight);

/* Sombras */
box-shadow: var(--shadow-md);

/* Transiciones */
transition: all var(--transition-normal);

/* Border Radius */
border-radius: var(--radius-lg);

/* Gradientes */
background: var(--gradient-primary);
```

---

## 🎨 Guía de Secciones

### Header
- Gradiente Primario
- Color: Blanco sobre azul
- Shadow: Sutil, pesado

### Carrusel
- Fondo: Oscuro (#1a1a1a)
- Info Lateral: Blanco con borde izquierdo
- Controles: Zona separada blanca

### Noticias
- Fondo: Gris claro
- Tarjetas: Blancas
- Efectos: Hover con elevación
- Categoría: Tag azul

---

## 📱 Breakpoints

```css
/* Desktop */
> 1200px

/* Tablet */
768px - 1200px

/* Mobile */
< 768px

/* Extra Small */
< 480px
```

---

## ♿ Accesibilidad

- **Focus Visible**: Outline cyan `3px`
- **Motion Reduce**: Desactiva animaciones si `prefers-reduced-motion`
- **Contrast**: Mínimo AA (4.5:1 para texto)
- **Colores**: No depende solo del color

---

## 🔄 Mantenimiento

Cuando necesites cambiar:

1. **Color Global**: Edita `:root` en `design-system.css`
2. **Tipografía**: Actualiza `--font-*` en `:root`
3. **Espaciado**: Modifica `--space-*` en `:root`

Todos los cambios se propagan automáticamente a través de las variables CSS.

