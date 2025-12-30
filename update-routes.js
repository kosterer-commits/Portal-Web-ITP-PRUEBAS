const fs = require('fs');
const path = require('path');

function updateHtmlFile(filePath, depth) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Reemplazar assets/ con ../../assets/
    content = content.replace(/href="assets\//g, 'href="' + depth + 'assets/');
    content = content.replace(/src="assets\//g, 'src="' + depth + 'assets/');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✓ ' + path.basename(filePath));
  } catch (err) {
    console.error('✗ Error en ' + filePath + ': ' + err.message);
  }
}

// Procesar todos los HTML en paginas
const dirs = [
  { dir: 'paginas/carreras', depth: '../../' },
  { dir: 'paginas/programas-especiales', depth: '../../' },
  { dir: 'paginas/servicios', depth: '../../' },
  { dir: 'paginas/pruebas', depth: '../../' }
];

dirs.forEach(({dir, depth}) => {
  const folder = path.join(process.cwd(), dir);
  if (fs.existsSync(folder)) {
    fs.readdirSync(folder)
      .filter(f => f.endsWith('.html'))
      .forEach(file => {
        updateHtmlFile(path.join(folder, file), depth);
      });
  }
});

console.log('\nRutas actualizadas exitosamente');
