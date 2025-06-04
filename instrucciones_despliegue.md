# Instrucciones para Desplegar la Tienda Minecraft en GitHub Pages

Este documento proporciona instrucciones paso a paso para desplegar tu tienda de Minecraft en GitHub Pages, permitiéndote tener tu sitio web en línea de forma gratuita.

## Requisitos Previos

- Una cuenta de GitHub (puedes crear una gratis en [github.com](https://github.com))
- Git instalado en tu computadora (descarga desde [git-scm.com](https://git-scm.com/downloads))

## Pasos para el Despliegue

### 1. Crear un Repositorio en GitHub

1. Inicia sesión en tu cuenta de GitHub
2. Haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository"
3. Nombra tu repositorio como `minecraft-store-app`
4. Selecciona la opción "Public"
5. Haz clic en "Create repository"

### 2. Subir el Código al Repositorio

Abre una terminal o línea de comandos y ejecuta los siguientes comandos:

```bash
# Navega a la carpeta del proyecto
cd ruta/a/minecraft-store-app

# Inicializa Git si aún no está inicializado
git init

# Añade todos los archivos al staging
git add .

# Crea un commit con los cambios
git commit -m "Versión inicial de la tienda Minecraft"

# Conecta tu repositorio local con el repositorio remoto en GitHub
git remote add origin https://github.com/TU-USUARIO/minecraft-store-app.git

# Sube los cambios al repositorio remoto
git push -u origin main
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

### 3. Configurar GitHub Pages

1. En tu repositorio de GitHub, ve a la pestaña "Settings"
2. En el menú lateral, haz clic en "Pages"
3. En "Source", selecciona la rama "main" y la carpeta "/docs" o "/dist" (según la configuración de tu build)
4. Haz clic en "Save"

### 4. Construir y Desplegar el Sitio

Para construir y desplegar el sitio, puedes usar GitHub Actions o hacerlo manualmente:

#### Opción 1: Despliegue Manual

1. Construye el proyecto:
   ```bash
   pnpm run build
   ```

2. Copia el contenido de la carpeta `dist` a una carpeta llamada `docs` en la raíz del proyecto:
   ```bash
   mkdir -p docs
   cp -r dist/* docs/
   ```

3. Sube los cambios a GitHub:
   ```bash
   git add docs
   git commit -m "Añadir build para GitHub Pages"
   git push
   ```

4. En la configuración de GitHub Pages, selecciona la carpeta "docs" como fuente.

#### Opción 2: Usar GitHub Actions (Recomendado)

1. Crea un archivo `.github/workflows/deploy.yml` con el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
```

2. Sube este archivo a tu repositorio:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Añadir GitHub Actions para despliegue automático"
   git push
   ```

3. En la configuración de GitHub Pages, selecciona la rama "gh-pages" como fuente.

### 5. Acceder a tu Sitio Web

Una vez completado el despliegue, tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/minecraft-store-app/
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

## Actualizar el Sitio Web

Para actualizar tu sitio web después de realizar cambios:

1. Realiza los cambios en tu código
2. Crea un nuevo commit:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```

3. Si estás usando GitHub Actions, el despliegue se realizará automáticamente. Si estás haciendo el despliegue manual, repite los pasos de construcción y despliegue.

## Personalización del Dominio (Opcional)

Si deseas usar un dominio personalizado en lugar de `github.io`:

1. En la configuración de GitHub Pages, en la sección "Custom domain", ingresa tu dominio
2. Configura los registros DNS de tu dominio según las instrucciones proporcionadas por GitHub
3. Marca la casilla "Enforce HTTPS" para habilitar HTTPS en tu sitio

## Solución de Problemas Comunes

- **El sitio no se actualiza**: Asegúrate de que los cambios se hayan subido correctamente y que el despliegue haya finalizado.
- **Imágenes o recursos no aparecen**: Verifica que las rutas sean correctas y relativas a la base del sitio.
- **Errores 404**: Asegúrate de que la configuración de GitHub Pages esté correcta y apunte a la rama y carpeta adecuadas.
