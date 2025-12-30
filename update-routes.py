import os
import re

def update_html_files(directory, depth):
    """Actualiza las rutas de assets en los archivos HTML"""
    for filename in os.listdir(directory):
        if filename.endswith('.html'):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Reemplazar rutas de assets
            new_content = re.sub(
                r'(href|src)="assets/',
                rf'\1="{depth}assets/',
                content
            )
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f'✓ Actualizado: {filename}')

# Actualizar las carpetas
base_path = 'c:\\xampp\\htdocs\\Genesis\\paginas'
depth = '../../'

for folder in ['carreras', 'programas-especiales', 'servicios', 'pruebas']:
    folder_path = os.path.join(base_path, folder)
    if os.path.exists(folder_path):
        update_html_files(folder_path, depth)
        print(f'Carpeta {folder} actualizada\n')

print('✓ Todas las rutas han sido actualizadas exitosamente')
