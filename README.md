# Minecraft Store - Tienda de Mods, Skins y Plugins

Esta es una aplicación web para vender mods, skins y plugins para Minecraft. La aplicación está construida con React y utiliza TailwindCSS para los estilos.

## Características

- Página de inicio con banner, categorías y productos destacados
- Catálogo de productos con filtros por categoría
- Página de detalle de producto
- Carrito de compras
- Página de contacto y soporte
- Diseño responsive para dispositivos móviles y escritorio
- Estética visual inspirada en Minecraft

## Estructura del Proyecto

```
minecraft-store-app/
├── public/             # Archivos públicos
│   └── images/         # Imágenes del sitio
├── src/                # Código fuente
│   ├── assets/         # Recursos estáticos
│   ├── components/     # Componentes React
│   │   ├── layout/     # Componentes de layout (Header, Footer)
│   │   ├── product/    # Componentes relacionados con productos
│   │   └── ui/         # Componentes de UI reutilizables
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilidades y funciones
│   ├── pages/          # Páginas principales
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada
└── ...                 # Archivos de configuración
```

## Tecnologías Utilizadas

- React
- TypeScript
- TailwindCSS
- Vite (como bundler)

## Instalación y Uso Local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/minecraft-store-app.git
   cd minecraft-store-app
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm run dev
   ```

4. Abre tu navegador en `http://localhost:3000`

## Despliegue en GitHub Pages

1. Actualiza el archivo `vite.config.ts` con el nombre de tu repositorio:
   ```typescript
   base: '/nombre-de-tu-repositorio/',
   ```

2. Construye la aplicación:
   ```bash
   pnpm run build
   ```

3. Despliega en GitHub Pages:
   ```bash
   pnpm run deploy
   ```

## Personalización

### Agregar Nuevos Productos

Para agregar nuevos productos, modifica los arrays de productos en los archivos de las páginas correspondientes:

- `src/pages/Catalog.tsx` - Para el catálogo general
- `src/pages/Home.tsx` - Para los productos destacados en la página de inicio

### Cambiar Imágenes

Las imágenes se encuentran en la carpeta `public/images/`. Puedes reemplazarlas manteniendo los mismos nombres o actualizar las referencias en el código.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## Descargo de Responsabilidad

Minecraft es una marca registrada de Mojang Studios. Este sitio no está afiliado con Mojang Studios.
