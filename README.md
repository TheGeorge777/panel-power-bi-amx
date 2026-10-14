# Panel de reportes HITSS

Sitio estático (sin instalación ni compilación). Se publica tal cual en GitHub Pages: sube **toda la carpeta** respetando su estructura y abre `index.html`.

```
index.html              Estructura de la página
assets/img/             Logo y favicon
css/
  variables.css         Colores, fondo pastel y medidas  ← cambia aquí la paleta
  base.css              Reset y botones base
  layout.css            Encabezado, rejilla y contador
  sidebar.css           Barra lateral
  cards.css             Tarjetas y sus temas de color
  viewer.css            Ventana flotante de vista previa
  responsive.css        Ajustes para celular/tablet
js/
  config.js             Textos: título, pie "Generado por…", etc.
  data/                 UN archivo por categoría (los reportes viven aquí)
  utils.js              Funciones auxiliares
  sidebar.js            Categorías, buscador, ocultar/mostrar menú
  cards.js              Dibujo de tarjetas
  viewer.js             Ventana movible / redimensionable / maximizable
  main.js               Arranque
```

## Tareas comunes
- **Agregar un reporte:** abre el archivo de su categoría en `js/data/` y copia un bloque `{ title, desc, url }`.
- **Nueva categoría:** copia un archivo de `js/data/`, cambia `slug`, `name`, `color`, `theme` y añade su `<script>` en `index.html` (sección "configuración y datos").
- **Colores de tarjeta:** temas `c-red`, `c-black`, `c-wine` en `css/cards.css`.
- **Fondo / colores generales:** `css/variables.css` (`--bg` es el fondo pastel).
- **Textos / autoría:** `js/config.js`.

## Vista previa flotante
Arrastra la barra negra para moverla · esquina inferior derecha para cambiar tamaño · doble clic en la barra o "Maximizar" · `Esc` o "Cerrar" para salir.
