# 📋 Guía de Uso del Carrusel V2 - Versión Simplificada

## 🎯 Resumen
El carrusel ahora es **100% dinámico**. Solo necesitas editar un array en JavaScript para agregar o quitar banners.

---

## ✨ Cómo Agregar un Nuevo Banner

### 1. Abre el archivo JavaScript
Edita: `assets/js/carousel-v2.js`

### 2. Encuentra el array `carouselSlidesData` (líneas 9-101)

### 3. Agrega un nuevo objeto al final del array

```javascript
{
    banner: 'ruta/a/tu/banner.jpg',           // Imagen del banner principal
    tag: 'Etiqueta',                          // Tag pequeño (ej: "Convocatoria")
    title: 'Título del Banner',               // Título principal
    description: 'Descripción del banner',    // Texto descriptivo
    buttonText: 'Texto del botón',            // Texto del botón (ej: "Ver más")
    link: 'ruta/al/archivo.pdf',              // Link del botón
    thumbnail: 'ruta/a/thumbnail.jpg'         // Imagen para el catálogo
}
```

### 4. Ejemplo Completo

```javascript
var carouselSlidesData = [
    // ... banners existentes ...
    {
        banner: 'assets/imagenes/banners/nuevo-banner.jpg',
        tag: 'Novedad',
        title: 'Nueva Convocatoria 2027',
        description: 'Consulta la nueva convocatoria para el periodo 2027.',
        buttonText: 'Ver convocatoria',
        link: 'pdf/convocatoria-2027.pdf',
        thumbnail: 'assets/imagenes/banners/nuevo-banner.jpg'
    }
];
```

---

## 🗑️ Cómo Eliminar un Banner

### Simplemente elimina el objeto completo del array

```javascript
// ANTES (con 3 banners)
var carouselSlidesData = [
    { banner: 'banner1.jpg', ... },
    { banner: 'banner2.jpg', ... },  // ← Este lo queremos eliminar
    { banner: 'banner3.jpg', ... }
];

// DESPUÉS (con 2 banners)
var carouselSlidesData = [
    { banner: 'banner1.jpg', ... },
    { banner: 'banner3.jpg', ... }
];
```

---

## 🔄 Reordenar Banners

Simplemente cambia el orden de los objetos en el array. El primero será el que se muestra al inicio.

```javascript
var carouselSlidesData = [
    { banner: 'banner3.jpg', ... },  // Ahora este es el primero
    { banner: 'banner1.jpg', ... },
    { banner: 'banner2.jpg', ... }
];
```

---

## 🔗 Tipos de Enlaces

### Link a PDF (se abre en nueva pestaña)
```javascript
{
    buttonText: 'Ver documento',
    link: 'pdf/documento.pdf'
}
```

### Link con función especial (como el modal de equivalencias)
```javascript
{
    buttonText: 'Ver información',
    link: '#',
    onclick: 'openEquivalenciasModal(event)'
}
```

---

## ⚙️ Configuración Adicional

### Cambiar velocidad del autoplay
En `carousel-v2.js` línea 107:

```javascript
var CAROUSEL_AUTOPLAY_DELAY = 5000;  // 5 segundos (5000 milisegundos)
```

---

## 📝 Notas Importantes

1. **No toques el HTML**: Todo se genera automáticamente desde el JavaScript
2. **Mantén el mismo formato**: Copia y pega un objeto existente y modifica los valores
3. **No olvides las comas**: Entre objetos debe haber una coma, excepto en el último
4. **Rutas relativas**: Las rutas son relativas desde el archivo HTML principal

---

## ✅ Checklist para Agregar un Banner

- [ ] Subir la imagen del banner a `assets/imagenes/banners/`
- [ ] Subir el PDF (si aplica) a `pdf/`
- [ ] Agregar el objeto al array `carouselSlidesData`
- [ ] Verificar que todas las comas estén bien colocadas
- [ ] Probar en el navegador

---

## 🐛 Solución de Problemas

### El carrusel no muestra nada
- Abre la consola del navegador (F12)
- Verifica si hay errores de sintaxis en el array
- Revisa que las rutas de las imágenes sean correctas

### Un banner no aparece
- Verifica que la imagen exista en la ruta especificada
- Revisa que el objeto tenga todos los campos requeridos
- Asegúrate de que haya una coma después del objeto anterior

### Los dots no coinciden con los banners
- Esto se soluciona automáticamente, se generan según el número de elementos en el array

---

## 📦 Archivos del Carrusel

- **HTML**: `assets/src/carousel-v2.html` (estructura base, no requiere cambios)
- **CSS**: `assets/css/carousel-v2.css` (estilos, no requiere cambios)
- **JavaScript**: `assets/js/carousel-v2.js` (← **EDITA AQUÍ PARA AGREGAR/QUITAR BANNERS**)

---

## 🎨 Ventajas de esta Versión

✅ Un solo lugar para editar (el array en JavaScript)
✅ No necesitas contar slides manualmente
✅ No necesitas sincronizar múltiples secciones HTML
✅ Agregar/quitar banners toma 30 segundos
✅ Menos código = menos errores
✅ Todo se genera automáticamente

---

**¿Preguntas?** Revisa los ejemplos en el código o duplica un banner existente para usarlo como plantilla.
